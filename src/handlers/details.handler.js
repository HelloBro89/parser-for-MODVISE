import puppeteer from 'puppeteer';
import { puppeteerDetails } from '../helpers/puppeteerDetails.js';
import { getSelectorsOfDetails } from '../helpers/selectors.js';

export const getDetailsContent = async (urls) => {
    let flag = true;
    let counter = 0;
    let listOfProfucts = [];
    const browser = await puppeteer.launch({ headless: false, slowMo: 100, devtools: true });
    try {
        // const browser = await puppeteer.launch({ headless: false, slowMo: 100, devtools: true });
        const page = await browser.newPage();
        await page.waitFor(1000);
        const selectors = getSelectorsOfDetails();
        while (flag) {
            await page.goto(`${urls[counter]}`);

            const resFromPuppeteer = await puppeteerDetails(page, selectors, counter);

            if (counter > urls.length - 2) flag = false;

            listOfProfucts.push(resFromPuppeteer);
            counter++;
        }

        browser.close();
        return listOfProfucts;
    } catch (e) {
        browser.close();
        throw e;
    }
};
