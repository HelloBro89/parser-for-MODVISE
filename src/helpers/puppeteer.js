import puppeteer from 'puppeteer';

export const checkAmountPages = async (url) => {
    const browser = await puppeteer.launch({ headless: false, slowMo: 100, devtools: true });
    const page = await browser.newPage();
    await page.goto(url);

    const result = await page.evaluate(() => {
        // const categoryAndAmount = document.querySelector('.m-typo').textContent;
        const categoryAndAmount = document.querySelector('#js-mainWrapper > main > div.b-listing_categoryTitle.is-outlet > h1').textContent;
        const regexp = /-?\d+(\.\d+)?/g;
        const amountOfProducts = +categoryAndAmount.match(regexp)[0];
        const numberOfPages = Math.ceil(amountOfProducts / 20);
        // // ------------------------------------------ FIRST WAY
        // const categoryAndAmount = document.querySelector(
        //     '#js-mainWrapper > main > div.b-listing_categoryTitle.is-outlet.is-menuCategories > h1 > span'
        // );
        // const amountOfProducts = +categoryAndAmount.innerText.slice(1, -1);
        // const numberOfPages = Math.ceil(amountOfProducts / 20);
        // // ------------------------------------------

        return numberOfPages;
    });
    browser.close();
    console.log(typeof result);
    return result;
};

export const getСontent = async (url) => {
    let flag = true;
    let counter = 1;
    let listOfProfucts = [];

    const browser = await puppeteer.launch({ headless: false, slowMo: 100, devtools: true });
    const page = await browser.newPage();
    while (flag) {
        await page.goto(`${url}?page=${counter}`);

        const result = await page.evaluate(async () => {
            let data = [];
            const categoryAndAmount = document.querySelector(
                '#js-mainWrapper > main > div.b-listing_categoryTitle.is-outlet > h1'
            ).textContent;
            const regexp = /-?\d+(\.\d+)?/g;
            const amountOfProducts = +categoryAndAmount.match(regexp)[0];
            const numberOfPages = Math.ceil(amountOfProducts / 20);
            // const categoryAndAmount = document.querySelector(
            //     '#js-mainWrapper > main > div.b-listing_categoryTitle.is-outlet.is-menuCategories > h1 > span'
            // );
            // const amountOfProducts = +categoryAndAmount.innerText.slice(1, -1);
            // const numberOfPages = Math.ceil(amountOfProducts / 20);
            console.log(numberOfPages);
            if (numberOfPages === 0) {
                return { data: [], numberOfPages: 0 };
            }

            const elementsWithNames = document.querySelectorAll('.m-offerBox_content');
            const pageNum = document.querySelector('#js-listingForm > nav > input').value;

            elementsWithNames.forEach((item) => {
                const headerData = item.querySelector('.b-ofr_headDataTitle');
                const price = item.querySelector('.m-priceBox_price').innerText.slice(0, -2) + ' zl';
                const availability =
                    item.querySelector('#js-availability > ul > li.b-ofrBox_availabilityListItem.is-available').innerText.length > 15
                        ? false
                        : true;

                const productСontent = {
                    productName: headerData.innerText,
                    price,
                    availability,
                    position: null,
                    url: headerData.href,
                    page: pageNum,
                };

                data.push(productСontent);
            });
            return { data, numberOfPages };
        });
        console.log(`${counter} --- ${result.numberOfPages - 1}`);
        if (counter > result.numberOfPages - 1) {
            flag = false;
        }

        listOfProfucts.push(...result.data);

        console.log(listOfProfucts.length);
        counter++;
    }
    listOfProfucts.map((product, ind) => (product.position = ind + 1));
    browser.close();
    return listOfProfucts;
};
