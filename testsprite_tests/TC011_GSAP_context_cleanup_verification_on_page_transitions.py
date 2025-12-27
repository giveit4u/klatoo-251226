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
        # -> Navigate to another page using a navigation button to test animation cleanup on page transition.
        frame = context.pages[-1]
        # Click 'Features' button to navigate to Features page and trigger page transition animations.
        elem = frame.locator('xpath=html/body/main/nav/div/div/button[2]').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Navigate back to the landing page to verify GSAP animation cleanup and no duplication.
        frame = context.pages[-1]
        # Click 'About' button to navigate back to landing page and trigger page transition animations.
        elem = frame.locator('xpath=html/body/main/nav/div/div/button').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Navigate to 'Kubic' page to continue testing GSAP animation cleanup on page transitions.
        frame = context.pages[-1]
        # Click 'Kubic' button to navigate to Kubic page and trigger page transition animations.
        elem = frame.locator('xpath=html/body/main/nav/div/div/button[3]').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Navigate back to the Features page to continue testing GSAP animation cleanup on page transitions.
        frame = context.pages[-1]
        # Click 'Features' button to navigate back to Features page and trigger page transition animations.
        elem = frame.locator('xpath=html/body/main/nav/div/div/button[2]').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Navigate to About page to continue testing GSAP animation cleanup on page transitions.
        frame = context.pages[-1]
        # Click 'About' button to navigate to About page and trigger page transition animations.
        elem = frame.locator('xpath=html/body/main/nav/div/div/button').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Navigate to Kubic page again to continue testing GSAP animation cleanup on page transitions.
        frame = context.pages[-1]
        # Click 'Kubic' button to navigate to Kubic page and trigger page transition animations.
        elem = frame.locator('xpath=html/body/main/nav/div/div/button[3]').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Navigate back to the landing page to continue testing GSAP animation cleanup on page transitions.
        frame = context.pages[-1]
        # Click 'About' button to navigate back to About page and trigger page transition animations.
        elem = frame.locator('xpath=html/body/main/nav/div/div/button').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Scroll down the landing page to visually inspect for particle globe and glassmorphism effects and confirm their presence or absence.
        await page.mouse.wheel(0, 800)
        

        # -> Navigate to Features page to check for particle globe and glassmorphism effects presence and GSAP animation cleanup during page transitions.
        frame = context.pages[-1]
        # Click 'Features' button to navigate to Features page and check for particle globe and glassmorphism effects and GSAP animation cleanup.
        elem = frame.locator('xpath=html/body/main/nav/div/div/button[2]').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # --> Assertions to verify final state
        frame = context.pages[-1]
        await expect(frame.locator('text=About').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Features').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Kubic').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=THE DECLARATION OF A DIGITAL EARTH').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Rooted in reality. Designed for real value.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Not a Virtual Fantasy').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=KEY FEATURES').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Location-Based Posting').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Local-to-Global Flow').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Kubic. Content as Asset').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Content Shapes The Land.').first).to_be_visible(timeout=30000)
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
        await expect(frame.locator('text=Trade the Surface of the World').first).to_be_visible(timeout=30000)
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
    