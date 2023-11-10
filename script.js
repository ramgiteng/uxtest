export.init = async({driver, webdriver, threadNum, vuserNum, helpers}) => {
	const { transactionFactory, waitForPageLoad, waitForElement } = helpers;
	const { By, until } = webdriver;
	
	const appName = 'Google';
	const transaction = await transactionFactory({appName,threadNum,vuserNum,driver});
	
	await transaction("01_LaunchGoogle", async() => {
		await driver.get("http://google.ca");
		
		await waitForPageLoad(driver, "//*[@text='Google Search']);
	})
}

export.main = async({driver, webdriver, threadNum, vuserNum, helpers}) => {
	const { transactionFactory, waitForPageLoad, waitForElement } = helpers;
	const { By, until } = webdriver;
	
	const appName = 'Google';
	const transaction = await transactionFactory({appName,threadNum,vuserNum,driver});
	
	await transaction("01_LaunchGoogle", async() => {
		await driver.navigate().refresh();
		
		await waitForPageLoad(driver, "//*[@text='Google Search']);
	})
}

export.end = async({driver, webdriver, threadNum, vuserNum, helpers}) => {
	const { transactionFactory, waitForPageLoad, waitForElement } = helpers;
	const { By, until } = webdriver;
	
	const appName = 'Google';
	const transaction = await transactionFactory({appName,threadNum,vuserNum,driver});
	
}