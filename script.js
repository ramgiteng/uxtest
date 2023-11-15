exports.init = async({driver, webdriver, threadNum, vuserNum, helpers}) => {
	const { transactionFactory, waitForPageLoad, waitForElement } = helpers;
	const { By, until } = webdriver;
	
	const appName = 'MercuryTours';
	const transaction = await transactionFactory({appName,threadNum,vuserNum,driver});
	
	await transaction("01_LaunchMercuryTours", async() => {
		await driver.get("http://www.mercury-tours.com/");
		
		await waitForPageLoad(driver, "//*[contains(text(),'Mercury Tours Home Page')]");
	})
}

exports.main = async({driver, webdriver, threadNum, vuserNum, helpers}) => {
	const { transactionFactory, waitForPageLoad, waitForElement } = helpers;
	const { By, until } = webdriver;
	
	const appName = 'MercuryTours';
	const transaction = await transactionFactory({appName,threadNum,vuserNum,driver});
	
	await transaction("02_OurCoaches", async() => {
		await waitForElement(driver, "//*[contains(text(),'Our Coaches')]").then(el => el.click());
		
		await waitForPageLoad(driver, "//*[contains(text(),'Seat Vans')]");
	})
	
	await driver.get("http://www.mercury-tours.com/");

}

exports.end = async({driver, webdriver, threadNum, vuserNum, helpers}) => {
	const { transactionFactory, waitForPageLoad, waitForElement } = helpers;
	const { By, until } = webdriver;
	
	const appName = 'MercuryTours';
	const transaction = await transactionFactory({appName,threadNum,vuserNum,driver});
	
	console.log(`Ending thread ${threadNum}`);
	
}