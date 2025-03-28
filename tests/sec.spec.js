const {test, expect} = require('@playwright/test');
const fns = require("C:/Playwright-Jan2025/LloydsLoansApp/TestData/DataUtils.js")
const {LoginPage} = require('../PageObjects/LoginPage')
const DataSet = JSON.parse(JSON.stringify(require('../TestData/DataSet.json')));



  
test.only('Home Page dashboard menu validation',async ({page})=>{

  
  console.log(DataSet.Url);
  
  const loginPage = new LoginPage(page)
  await loginPage.Goto()
  //await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  await expect(page).toHaveTitle('OrangeHRM');
  await loginPage.ValidLogin()
  await expect(page).toHaveURL(/dashboard/)
  await page.waitForLoadState('networkidle')
  let menus = await page.locator("//ul[@class='oxd-main-menu']/li/a/span").allTextContents()
  //console.log(menuone);
  console.log(menus);
  expect(menus.includes("Claim")).toBeTruthy()
  expect(menus).toHaveLength(12)
})

