import puppeteer from 'puppeteer';

export const getTest = async (url) => {
    const browser = await puppeteer.launch({ headless: false, slowMo: 100, devtools: true });
    const page = await browser.newPage();
    await page.goto(url);
    const result = await page.evaluate(() => {
        const productName = document.querySelector(`h1.title.is-heading`).innerText;

        const availability = document.querySelector('div.availability-available > div.info > div.item.availability > span').innerText;

        // const cent = document.querySelector('.main-price > div > span');
        const checkCent = document.querySelector('.main-price > div > span');
        const cent = checkCent ? checkCent.innerText : '';
        const price = document.querySelector('.main-price > span').innerText + cent;
        return [productName, price, availability];
    });
    browser.close();
    return result;
};
