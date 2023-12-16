require("chromedriver");
const assert = require("assert");
const { Builder, By, Key, until, Browser } = require("selenium-webdriver");

// async function test() {
//   let driver = await new Builder().forBrowser("chrome").build();

//   await driver.manage().window().maximize();
//   await driver.get("https://google.com");

//   await driver.findElement(By.name("q")).click();
//   await driver.findElement(By.name("q")).sendKeys("Dhaka", Key.RETURN);

//   console.log("Passed");
//   await driver.quit();
// }
// test();

describe("Searching for a country and her capital", function () {
  let driver;

  before(async function () {
    
    driver = await new Builder().forBrowser("chrome").build();
  });

  it("Search on Google a Country", async function () {
    await driver.manage().window().maximize();
    await driver.get("https://google.com");
    await driver.findElement(By.name("q")).click();
    await driver.findElement(By.name("q")).sendKeys("Bangladesh", Key.RETURN);
    
    await driver.wait(until.elementLocated(By.id("rcnt")), 5000);
    await driver.findElement(By.name("q")).clear();

    let title = await driver.getTitle();
    assert.equal(title, "Bangladesh - Google Search");
  });

  it("Search on Google a city", async function () {
    // await driver.get("https://google.com");
    await driver.findElement(By.name("q")).click();
    await driver.findElement(By.name("q")).sendKeys("Chattogram", Key.RETURN);
    await driver.wait(until.elementLocated(By.id("rcnt")), 10000);
    await driver.findElement(By.name("q")).clear();

    let title = await driver.getTitle();
    assert.equal(title, "Chattogram - Google Search");
  });

  after(() => driver && driver.quit());
});
