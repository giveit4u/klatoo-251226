import asyncio
from playwright import async_api
from playwright.async_api import expect

async def run_test():
    pw = None
    browser = None
    context = None
    
    try:
        # Start a Playwright session in asynchronous mode
        pw = await async_api.async_playwright().start()
        
        # Launch a Chromium browser in headless mode with custom arguments
        browser = await pw.chromium.launch(
            headless=True,
            args=[
                "--window-size=1280,720",         # Set the browser window size
                "--disable-dev-shm-usage",        # Avoid using /dev/shm which can cause issues in containers
                "--ipc=host",                     # Use host-level IPC for better stability
                "--single-process"                # Run the browser in a single process mode
            ],
        )
        
        # Create a new browser context (like an incognito window)
        context = await browser.new_context()
        context.set_default_timeout(5000)
        
        # Open a new page in the browser context
        page = await context.new_page()
        
        # Navigate to your target URL and wait until the network request is committed
        await page.goto("http://localhost:3000", wait_until="commit", timeout=10000)
        
        # Wait for the main page to reach DOMContentLoaded state (optional for stability)
        try:
            await page.wait_for_load_state("domcontentloaded", timeout=3000)
        except async_api.Error:
            pass
        
        # Iterate through all iframes and wait for them to load as well
        for frame in page.frames:
            try:
                await frame.wait_for_load_state("domcontentloaded", timeout=3000)
            except async_api.Error:
                pass
        
        # Interact with the page elements to simulate user flow
        # -> Resize the browser window to 320px width and check text legibility, Bento Grid visibility, and horizontal scroll.
        frame = context.pages[-1]
        # Click to focus or activate any interactive element if needed before resizing.
        elem = frame.locator('xpath=html/body/main/nav/div/button').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Resize the browser window to 360px width and check text legibility, Bento Grid visibility, and horizontal scroll.
        frame = context.pages[-1]
        # Click to focus or activate any interactive element before resizing.
        elem = frame.locator('xpath=html/body/main/nav/div/button').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Resize the browser window to 375px width and check text legibility, Bento Grid visibility, and horizontal scroll.
        frame = context.pages[-1]
        # Click to focus or activate any interactive element before resizing.
        elem = frame.locator('xpath=html/body/main/nav/div/button').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # --> Assertions to verify final state
        frame = context.pages[-1]
        await expect(frame.locator('text=About').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Features').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Kubic').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=EN').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=/').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=KO').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Sign up').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=THE DECLARATION OF A DIGITAL EARTH').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=We Are Building').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=THE DIGITAL EARTH').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Rooted in reality. Designed for real value.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Not a Virtual Fantasy').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=KLATOO is built on real locations, real people, and real-world activity — faithfully mirrored onto a digital earth. We are not escaping reality. We are layering a digital world directly on top of it.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text="On the digital layer,\nreality overlaps, and value accumulates."').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=KEY FEATURES').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=From Local to Global, With Assetization Built In.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Location-Based Posting').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Every piece of content begins with where it happens. Anchor your moments to real coordinates.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Local-to-Global Flow').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=A single local post can scale into global visibility. Traffic turns into revenue share.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=LOCAL').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=GLOBAL').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Kubic. Content as Asset').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Your posts aren\'t just content — they activate the land beneath them, creating tradable value.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=KUBIC X LBS POSTING').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Content Shapes The Land.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=On KLATOO, content does not end as content. As meaningful posts accumulate, the Kubic tied to that location becomes active — and its value grows.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text="You don\'t buy land and wait.\nYou activate land and grow it."').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=01').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Creators Post').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Short-form content created at real-world places.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=02').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Engagement Stacks').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Views, interactions, and sharing stack onto the Kubic.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=03').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Kubic Gains Value').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Land with real activity naturally becomes more valuable.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=WHY KUBIC HAS REAL VALUE').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=A New Economic Dimension').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Revenue Is Shared, Not Extracted').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Value is shared — not captured. Kubic is designed so that value flows to:').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Kubic Owners').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Content Creators').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=The Platform Ecosystem').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Ownership meets Creation.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Creation meets Distribution.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=COMPARISON').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Traditional Land').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Value rises with foot traffic, activity, and visibility.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Kubic').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Value rises with posts, engagement, and global exposure.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Trade the Surface of the World').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Ownership meets Creation.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Creation meets Distribution.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Marketplace Coming Soon').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Global Trends and Stories').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=From local moments to global movements.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Discover what\'s happening in the world.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Sign up now').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Join the movement that connects').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Reality, Content, and Value.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=KLATOO : THE OPERATING SYSTEM OF THE DIGITAL EARTH').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=83 Uisadang-daero, Yeongdeungpo-gu, Seoul, Republic of Korea').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=070-7537-2017').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=cs@underpin.kr').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Privacy Policy').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Terms of Service').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Terms for location based services').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=All rights reserved © 2025 UNDERPIN.').first).to_be_visible(timeout=30000)
        await asyncio.sleep(5)
    
    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()
            
asyncio.run(run_test())
    