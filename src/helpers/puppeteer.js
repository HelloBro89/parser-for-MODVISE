import puppeteer from 'puppeteer';
import { getElements } from './getElements.js';

export const getСontent = async (url, checkPath) => {
    console.log(url);
    try {
        let flag = true;
        let counter = 1;
        let listOfProfucts = [];

        const browser = await puppeteer.launch({ headless: false, slowMo: 100, devtools: true });
        const page = await browser.newPage();
        const selectors = await getElements(checkPath);

        while (flag) {
            await page.goto(`${url}?page=${counter}`);

            const result = await page.evaluate(
                async (positionOnList, counter, selectors) => {
                    try {
                        let data = [];

                        const categoryAndAmount = document.querySelector(`${selectors.categoryAndAmount}`).innerText;
                        const regexp = /\(([^)]+)\)/;
                        const amountOfProducts = +categoryAndAmount.match(regexp)[1];
                        const numberOfPages = Math.ceil(amountOfProducts / 20);

                        if (!numberOfPages) return { data: [], numberOfPages: 0 };

                        const elementsWithNames = document.querySelectorAll(`${selectors.elementsWithNames}`);
                        const page = counter;

                        elementsWithNames.forEach((item, ind) => {
                            const productName = item.querySelector(`${selectors.productName}`).innerText;
                            const price = item.querySelector(`${selectors.price}`).textContent.match(/-?\d+(\.\d+)?/g)[0] + ' zl';
                            const availability =
                                item.querySelector(`${selectors.availability}`).innerText.trim().split('\n')[0].length > 15 ? false : true;
                            const url = item.querySelector(`${selectors.url}`).href;

                            const productСontent = {
                                productName,
                                price,
                                availability,
                                position: positionOnList + ind + 1,
                                url,
                                page,
                            };

                            data.push(productСontent);
                        });
                        return { data, numberOfPages };
                    } catch (e) {
                        throw e;
                    }
                },
                listOfProfucts.length,
                counter,
                selectors
            );
            // console.log(`${counter} --- ${result.numberOfPages - 1}`);
            if (counter > result.numberOfPages - 1) flag = false;

            listOfProfucts.push(...result.data);
            // console.log(listOfProfucts.length);
            counter++;
        }

        browser.close();
        return listOfProfucts;
    } catch (e) {
        console.log(e);
    }
};
