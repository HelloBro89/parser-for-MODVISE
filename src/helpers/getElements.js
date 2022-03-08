export const getElements = async (checkPath) => {
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
// '#spark > div.layout > div.list-page > div > div > div.layout > div.content > div.list > div.offers.is-list > div:nth-child(1) > div.pricing > div > div.info > div.item.availability > span'
//.text
