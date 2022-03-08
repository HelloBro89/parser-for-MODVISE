import puppeteer from 'puppeteer';
import { runPuppeteer } from '../helpers/puppeteer.js';
import { getSelectors } from '../helpers/selectors.js';

export const getСontent = async (url, checkPath) => {
    try {
        let flag = true;
        let counter = 1;
        let listOfProfucts = [];

        const browser = await puppeteer.launch({ headless: false, slowMo: 100, devtools: true });
        const page = await browser.newPage();
        await page.waitFor(1000);
        const selectors = await getSelectors(checkPath);

        while (flag) {
            await page.goto(`${url}?page=${counter}`);

            const resFromPuppeteer = await runPuppeteer(page, selectors, listOfProfucts.length, counter);

            if (counter > resFromPuppeteer.numberOfPages - 1) flag = false;

            listOfProfucts.push(...resFromPuppeteer.data);
            counter++;
        }

        browser.close();
        return listOfProfucts;
    } catch (e) {
        console.log(e);
    }
};
