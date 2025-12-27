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
        # -> Scroll down the page to verify sticky header behavior on scroll.
        await page.mouse.wheel(0, 300)
        

        # -> Click the language toggle button to switch from English to Korean.
        frame = context.pages[-1]
        # Click the KO button to switch language to Korean
        elem = frame.locator('xpath=html/body/main/nav/div/div/div/button[2]').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Test the mobile navigation drawer by simulating a small screen or clicking the mobile menu button if available.
        await page.mouse.wheel(0, 500)
        

        frame = context.pages[-1]
        # Click the button that might open the mobile navigation drawer
        elem = frame.locator('xpath=html/body/main/nav/div/button').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Click outside the mobile drawer area to test if the drawer closes properly.
        frame = context.pages[-1]
        # Click outside the mobile drawer area (on main content) to close the drawer
        elem = frame.locator('xpath=html/body/main/div[2]/section[2]/div/div[2]/div[3]').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # --> Assertions to verify final state
        frame = context.pages[-1]
        await expect(frame.locator('text=서비스 소개').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=주요 기능').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=가입하기').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=디지털 지구의 미래를 선언하다').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=우리가 꿈꾸는 세상,').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=새로운 디지털 지구').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=가상현실이 아닙니다').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=KLATOO는 실제 장소와 사람, 그리고 현실의 활동을 디지털 환경에 그대로 투영합니다. 현실을 외면하는 가상이 아니라, 현실 위에 디지털 세계를 정교하게 겹쳐 새로운 가치를 창출합니다.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=디지털 영역에서,').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=현실과 완벽히 결합되어새로운 가치를 축적합니다.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=로컬의 경험이 글로벌 자산으로').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=연결되는 시스템').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=위치 기반 포스팅').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=모든 콘텐츠는 실제 장소에서 시작됩니다. 당신의 소중한 순간을 실제 좌표 위에 기록하세요.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=로컬에서 글로벌로').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=지역의 작은 소식이 전 세계로 확산됩니다. 발생한 트래픽은 모두에게 수익으로 돌아옵니다.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Kubic. 자산이 되는 콘텐츠').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=게시물은 단순한 기록을 넘어, 그 장소의 가치를 활성화하고 거래 가능한 자산을 만듭니다.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=콘텐츠가 세상을 바꾼다.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=KLATOO에서 콘텐츠는 기록으로 끝나지 않습니다. 의미 있는 활동이 쌓이면 해당 장소의 큐빅이 활성화되어 실제 가치가 상승합니다.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=땅을 사놓고 기다리는 게 아닙니다. 이제 땅을 직접 활성화하고 키우세요.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=크리에이터 포스팅').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=실제 장소에서 생성되는 숏폼 콘텐츠.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=인게이지먼트 누적').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=조회수, 상호작용, 공유 등 모든 활동이 큐빅에 축적됩니다.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=큐빅 가치 극대화').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=실제 활동이 활발한 장소의 가치는 폭발적으로 성장합니다.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=왜 큐빅인인가?').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=새로운 경제적 차원').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=수익의 독점이 아닌 진정한 분배').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=창출된 가치는 플랫폼이 독점하지 않습니다. 큐빅 생태계의 모든 참여자에게 선순환되도록 설계되었습니다.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=큐빅(Land) 소유자').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=콘텐츠 크리에이터').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=플랫폼 생태계 참여자').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=소유가 창작으로 연결됩니다.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=창작이 유통으로 확장됩니다.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=가치의 차이').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=기존 부동산').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=유동 인구와 물리적 환경에 의존하는 제한적 가치').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=큐빅(Kubic)').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=콘텐츠, 데이터, 글로벌 확산력에 기반한 무한한 가치').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=지구의 표면을 소유하고 거래하세요').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=소유와 창작의 결합').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=창작과 유통의 연결').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=마켓플레이스 준비중').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=전 세계의 트렌드와 이야기를 만나보세요').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=로컬의 순간들이 모여 글로벌의 흐름이 됩니다.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=지금 이 순간, 세계 곳곳의 생생한 소식을 발견하세요.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=지금 가입하기').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=단순한 소셜 네트워크를 넘어').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=현실, 콘텐츠, 가치가 하나되는 여정에 동참하세요.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=KLATOO : 디지털 지구의 새로운 운영체제').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=83 Uisadang-daero, Yeongdeungpo-gu, Seoul, Republic of Korea').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=070-7537-2017').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=cs@underpin.kr').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=개인정보 처리방침').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=서비스 이용약관').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=위치기반서비스 이용약관').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=All rights reserved. © 2025 UNDERPIN.').first).to_be_visible(timeout=30000)
        await asyncio.sleep(5)
    
    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()
            
asyncio.run(run_test())
    