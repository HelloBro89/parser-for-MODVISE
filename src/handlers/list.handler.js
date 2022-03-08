import puppeteer from 'puppeteer';
import { puppeteerList } from '../helpers/puppeteerList.js';
import { getSelectorsOfList } from '../helpers/selectors.js';

export const getListContent = async (url, checkPath) => {
    let flag = true;
    let counter = 1;
    let listOfProfucts = [];
    const browser = await puppeteer.launch({ headless: false, slowMo: 100, devtools: true });
    try {
        const page = await browser.newPage();
        await page.waitFor(1000);
        const selectors = getSelectorsOfList(checkPath);

        while (flag) {
            await page.goto(`${url}?page=${counter}`);

            const resFromPuppeteer = await puppeteerList(page, selectors, listOfProfucts.length, counter);

            if (counter > resFromPuppeteer.numberOfPages - 1) flag = false;

            listOfProfucts.push(...resFromPuppeteer.data);
            counter++;
        }

        browser.close();
        return listOfProfucts;
    } catch (e) {
        browser.close();
        throw e;
    }
};
