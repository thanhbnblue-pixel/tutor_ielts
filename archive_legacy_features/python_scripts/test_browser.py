import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        # Create a new context with empty localStorage to simulate a fresh user
        context = await browser.new_context()
        page = await context.new_page()
        
        page.on("console", lambda msg: print(f"Console {msg.type}: {msg.text}"))
        page.on("pageerror", lambda err: print(f"Page Error: {err.message}"))
        
        await page.goto("http://localhost:3000", wait_until="networkidle")
        
        # Click the "Kiểm tra trình độ 30 câu" button if it exists
        try:
            # We first need to click "Học Tập" (Path) tab
            buttons = await page.locator("nav button").all()
            if len(buttons) > 1:
                await buttons[1].click()
                await page.wait_for_timeout(1000)
                
            await page.click("text=Kiểm tra trình độ 30 câu")
            await page.wait_for_timeout(1000)
            await page.screenshot(path="screenshot_placement.png")
            print("Captured Placement Test")
        except Exception as e:
            print("Could not open Placement Test:", e)
            
        await browser.close()

asyncio.run(main())
