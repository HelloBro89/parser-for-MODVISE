export const puppeteerDetails = async (page, selectors) => {
    return page.evaluate((selectors) => {
        try {
            const productName = document.querySelector(selectors.productName).innerText;
            const availability = document.querySelector(selectors.availability).innerText.length > 15 ? false : true;
            const checkCent = document.querySelector(selectors.checkCent);
            const cents = checkCent ? checkCent.innerText : '';
            const price = document.querySelector(selectors.price).innerText + cents + ' zl';
            return {
                productName,
                price,
                availability,
            };
        } catch (e) {
            throw e;
        }
    }, selectors);
};
