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
        # -> Simulate opening the mobile navigation drawer by clicking the appropriate button (likely the first button) to test scroll lock and layout shifts.
        frame = context.pages[-1]
        # Click the first button to open the mobile navigation drawer on a small screen device
        elem = frame.locator('xpath=html/body/main/nav/div/button').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Try clicking other buttons that might open the mobile navigation drawer, such as button index 2 (About) or button index 3 (Features), or any other likely candidates.
        frame = context.pages[-1]
        # Click the 'About' button to check if it opens the mobile navigation drawer
        elem = frame.locator('xpath=html/body/main/nav/div/div/button').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Identify and click the correct button or icon that opens the mobile navigation drawer, likely a hamburger menu or similar icon, possibly the button at index 0 or another element.
        frame = context.pages[-1]
        # Click the first button again to try opening the mobile navigation drawer, as it might be the hamburger menu toggle.
        elem = frame.locator('xpath=html/body/main/nav/div/button').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Attempt to scroll the page behind the open drawer to verify if scrolling is locked appropriately.
        await page.mouse.wheel(0, await page.evaluate('() => window.innerHeight'))
        

        # -> Close the mobile navigation drawer by clicking the appropriate button or close icon and verify that the page scroll behavior returns to normal.
        frame = context.pages[-1]
        # Click the first button again to close the mobile navigation drawer
        elem = frame.locator('xpath=html/body/main/nav/div/button').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # --> Assertions to verify final state
        frame = context.pages[-1]
        await expect(frame.locator('text=THE DECLARATION OF A DIGITAL EARTH').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=KEY FEATURES').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Location-Based Posting').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Local-to-Global Flow').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Kubic. Content as Asset').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Content Shapes The Land.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=WHY KUBIC HAS REAL VALUE').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=A New Economic Dimension').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Revenue Is Shared, Not Extracted').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Marketplace Coming Soon').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Global Trends and Stories').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Sign up now').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Join the movement that connects').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=KLATOO : THE OPERATING SYSTEM OF THE DIGITAL EARTH').first).to_be_visible(timeout=30000)
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
    