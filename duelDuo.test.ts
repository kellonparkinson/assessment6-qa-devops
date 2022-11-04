
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('draw button displays choices', async () => {
    await driver.findElement(By.id('draw')).click()
    const choices = await driver.findElement(By.id('choices'))
    await driver.sleep(2000)

    const displayed = await choices.isDisplayed()
    expect(displayed).toBeTruthy()
})

test('add to duo button displays duo', async () => {
    await driver.findElement(By.id('draw')).click()

    await driver.findElement(By.className('bot-btn')).click()
    const playerDuo = await driver.findElement(By.id('player-duo'))
    await driver.sleep(2000)

    const displayed = await playerDuo.isDisplayed()
    expect(displayed).toBe(true)
})