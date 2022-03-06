import puppeteer from 'puppeteer';

export const checkAmountPages = async (url) => {
    const browser = await puppeteer.launch({ headless: false, slowMo: 100, devtools: true });
    const page = await browser.newPage();
    await page.goto(url);

    const result = await page.evaluate(() => {
        const categoryAndAmount = document.querySelector(
            '#js-mainWrapper > main > div.b-listing_categoryTitle.is-outlet.is-menuCategories > h1 > span'
        );
        const amountOfProducts = +categoryAndAmount.innerText.slice(1, -1);
        const numberOfPages = Math.ceil(amountOfProducts / 20);

        return numberOfPages;
    });
    browser.close();
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

            // !!!!!!! подумать над этим блоком
            const checkPage = document.querySelector('#js-listingForm > nav > input');
            if (!checkPage) return 'Product not found';
            // ------------------------------------------------------
            const elementsWithNames = document.querySelectorAll('.m-offerBox_content');
            const pageNum = checkPage.value;

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
            return data;
        });
        // console.log(result);
        if (counter > 3) {
            flag = false;
        }

        await listOfProfucts.push(...result);

        // console.log(position);
        console.log(listOfProfucts.length);
        counter++;
    }
    listOfProfucts.map((product, ind) => (product.position = ind + 1));
    browser.close();
    return listOfProfucts;
};
