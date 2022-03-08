export const runPuppeteer = async (page, selectors, positionOnList, counter) => {
    return page.evaluate(
        (selectors, counter, positionOnList) => {
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
        selectors,
        counter,
        positionOnList
    );
};
