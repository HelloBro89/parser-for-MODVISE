export const getSelectorsOfList = (checkPath) => {
    const categoryAndAmount =
        checkPath === 'main'
            ? '#spark > div.layout > div.list-page > div > div > div.header > h1'
            : '#js-mainWrapper > main > div.b-listing_categoryTitle.is-outlet > h1';

    const elementsWithNames = checkPath === 'main' ? '.offer' : '.m-offerBox_content';
    const productName = checkPath === 'main' ? '.title' : '.b-ofr_headDataTitle';
    const price = checkPath === 'main' ? '.whole' : '.m-priceBox_price';
    const availability = checkPath === 'main' ? '.text' : '#js-availability > ul > li.b-ofrBox_availabilityListItem.is-available';
    const url = checkPath === 'main' ? 'a' : '.b-ofr_headDataTitle';

    return { categoryAndAmount, elementsWithNames, productName, price, availability, url };
};

export const getSelectorsOfDetails = () => {
    const productName = 'h1.title.is-heading';
    const price = '.main-price > span';
    const availability = 'div.availability-available > div.info > div.item.availability > span';
    const checkCent = '.main-price > div > span';
    return { productName, price, availability, checkCent };
};
