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
        # -> Scroll the page to observe GSAP animations and verify their smoothness and synchronization with scrolling on Chrome.
        await page.mouse.wheel(0, 600)
        

        # -> Open the KLATOO landing page on Firefox to start testing backdrop-filter, canvas transparency, and GSAP animations.
        await page.goto('http://localhost:3000', timeout=10000)
        await asyncio.sleep(3)
        

        # -> Scroll the page on Firefox to observe GSAP animations and verify smoothness and synchronization.
        await page.mouse.wheel(0, 600)
        

        # -> Open the KLATOO landing page on Safari Desktop to start testing backdrop-filter, canvas transparency, and GSAP animations.
        await page.goto('http://localhost:3000', timeout=10000)
        await asyncio.sleep(3)
        

        # -> Scroll the page on Safari Desktop to observe GSAP animations and verify smoothness and synchronization, and visually inspect backdrop-filter glassmorphism effects.
        await page.mouse.wheel(0, 600)
        

        # -> Open the KLATOO landing page on iOS Safari to test backdrop-filter glassmorphism effects, canvas transparency, and GSAP animations.
        await page.goto('http://localhost:3000', timeout=10000)
        await asyncio.sleep(3)
        

        # -> Scroll the page on iOS Safari to observe GSAP animations, particle globe performance, and verify backdrop-filter glassmorphism effects visually.
        await page.mouse.wheel(0, 600)
        

        # -> Open the KLATOO landing page on Windows Edge to test backdrop-filter glassmorphism effects, canvas transparency, and GSAP animations.
        await page.goto('http://localhost:3000', timeout=10000)
        await asyncio.sleep(3)
        

        # -> Scroll the page on Windows Edge to observe GSAP animations and verify smoothness and synchronization, and visually inspect backdrop-filter glassmorphism effects.
        await page.mouse.wheel(0, 600)
        

        # -> Open the KLATOO landing page on Android Chrome to test backdrop-filter glassmorphism effects, canvas transparency, and GSAP animations.
        await page.goto('http://localhost:3000', timeout=10000)
        await asyncio.sleep(3)
        

        # -> Scroll the page on Android Chrome to observe GSAP animations and verify smoothness and synchronization, and visually inspect backdrop-filter glassmorphism effects.
        await page.mouse.wheel(0, 600)
        

        # --> Assertions to verify final state
        frame = context.pages[-1]
        await expect(frame.locator('text=THE DIGITAL EARTH').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Not a Virtual Fantasy').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=KEY FEATURES').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Location-Based Posting').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Local-to-Global Flow').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Kubic. Content as Asset').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Creators Post').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Engagement Stacks').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Kubic Gains Value').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=WHY KUBIC HAS REAL VALUE').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=A New Economic Dimension').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Revenue Is Shared, Not Extracted').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Ownership meets Creation.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Creation meets Distribution.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=COMPARISON').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Traditional Land').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Value rises with foot traffic, activity, and visibility.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Kubic').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Value rises with posts, engagement, and global exposure.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Marketplace Coming Soon').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Global Trends and Stories').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=From local moments to global movements.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Sign up now').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Join the movement that connects').first).to_be_visible(timeout=30000)
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
    