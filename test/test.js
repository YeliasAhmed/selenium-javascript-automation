require("chromedriver");
const assert = require("assert");
const { Builder, By, Key, until } = require("selenium-webdriver");

async function test() {
  let driver = await new Builder().forBrowser("chrome").build();

 
  

  try {

const username = "//input[@id='username']";
const password = "//input[@id='password']";
const login = "//input[@id='Login']";
const quicksetup = "(//*[name()='svg'][@data-key='setup'])[1]";
const advancesetup = "//button[normalize-space()='Open Advanced Setup']";
const users = "//div[@title='Users']//lightning-primitive-icon[@variant='bare']";
const profile = "//a[normalize-space()='Profiles']";
const sysAdmin = "//a[normalize-space()='System Administrator']";

    
  const url = "https://data-data-3699.lightning.force.com/lightning/setup/Profiles/home";
  const url1 = "https://data-data-3699.my.salesforce.com/";
  await driver.manage().setTimeouts({ implicit: 20000 });
  await driver.manage().window().maximize();

  await driver.get(url);


  
  await driver.findElement(By.xpath(username)).sendKeys("nightmarearmy420@gmail.com");
  await driver.findElement(By.xpath(password)).sendKeys("Abcd1234");
  await driver.findElement(By.xpath(login)).click();
  // await new Promise(resolve => setTimeout(resolve, 8000));

  

  // await driver.findElement(By.xpath(quicksetup)).click();
  // await driver.findElement(By.xpath(advancesetup)).click();
  // const handles = await driver.getAllWindowHandles();
  // await driver.switchTo().window(handles[1]);
  // // await new Promise(resolve => setTimeout(resolve, 5000));
  // await driver.findElement(By.xpath(users)).click();
  await driver.findElement(By.xpath(profile)).click();
  await new Promise(resolve => setTimeout(resolve, 6000));
  console.log("Before scroll");
  await driver.switchTo().frame(0);
  await driver.executeScript('arguments[0].scrollIntoView();', await driver.findElement(By.xpath(sysAdmin)));
  console.log("After scroll");
  await driver.findElement(By.xpath(sysAdmin)).click();
  console.log("After click on the system administrator");

  } finally{

    // await driver.quit();
  }


  console.log("Passed");
  
}
test();

// const username = "//input[@id='username']";
// const password = "//input[@id='password']";
// const login = "//input[@id='Login']";
// const quicksetup = "(//*[name()='svg'][@data-key='setup'])[1]";
// const advancesetup = "//button[normalize-space()='Open Advanced Setup']";
// const users = "//div[@title='Users']//lightning-primitive-icon[@variant='bare']";
// const profile = "//a[normalize-space()='Profiles']";
// const sysAdmin = "//a[normalize-space()='System Administrator']";

// describe("Salesforce functionality", function () {
//   let driver;

//   before(async function () {
    
//     driver = await new Builder().forBrowser("chrome").build();
//   });

//   it("Clicked on the system administrator successfully", async function () {
//     const url = "https://data-data-3699.my.salesforce.com/";
//     await driver.manage().setTimeouts({ implicit: 20000 });
//     await driver.manage().window().maximize();
  
//     await driver.get(url);
  
  
    
//     await driver.findElement(By.xpath(username)).sendKeys("nightmarearmy420@gmail.com");
//     await driver.findElement(By.xpath(password)).sendKeys("Abcd1234");
//     await driver.findElement(By.xpath(login)).click();
//     // await new Promise(resolve => setTimeout(resolve, 8000));
  
    
  
//     await driver.findElement(By.xpath(quicksetup)).click();
//     await driver.findElement(By.xpath(advancesetup)).click();
//     const handles = await driver.getAllWindowHandles();
//     await driver.switchTo().window(handles[1]);
//     // await new Promise(resolve => setTimeout(resolve, 5000));
//     await driver.findElement(By.xpath(users)).click();
//     await driver.findElement(By.xpath(profile)).click();
//     await driver.executeScript('arguments[0].scrollIntoView();', await driver.findElement(By.xpath(sysAdmin)));
//     await driver.findElement(By.xpath(sysAdmin)).click();

//     console.log("Passed");
//   });

//   // it("Search on Google a city", async function () {
//   //   await driver.get("https://google.com");
//   //   await driver.findElement(By.name("q")).click();
//   //   await driver.findElement(By.name("q")).sendKeys("Dhaka", Key.RETURN);
//   //   await driver.wait(until.elementLocated(By.id("rcnt")), 5000);
//   //   await driver.findElement(By.name("q")).clear();

//   //   let title = await driver.getTitle();
//   //   assert.equal(title, "Dhaka - Google Search");
//   // });

//   // after(() => driver && driver.quit());
// });
