import Express from 'express';
// import puppeteer from 'puppeteer';
import { checkAmountPages, getСontent } from './helpers/puppeteer.js';
// const puppeteer = require('puppeteer');
// import { routerUser } from './resources/users/user.router';

const app = Express();

app.use(Express.json());
// app.use(Express.urlencoded({ extended: false }));
// app.use(cors());

app.get('/category', async (req, res) => {
    // console.log(req.body);
    // const url = `https://mediamarkt.pl/outlet/telefony-i-smartfony/akcesoria/zestawy-sluchawkowe`; // headphones
    // const url = `https://mediamarkt.pl/outlet/rtv-i-telewizory/sluchawki`; // headphones another section
    // const url = `https://mediamarkt.pl/outlet/rtv-i-telewizory/kino-domowe`; // home theater
    // const url = `https://mediamarkt.pl/outlet/agd/plyty-grzejne`; // plate is empty!
    const url = `https://mediamarkt.pl/outlet/rtv-i-telewizory/telewizory`; // TV
    // console.log(req.path);

    // const result = await checkAmountPages(url);
    const result = await getСontent(url);
    if (result.length === 0) {
        res.status(200).json({ message: 'This category does not have any products.' });
    } else {
        res.status(200).json(result);
    }
    // console.log(result);
});
// app.use('/users', routerUser);

export { app };

// import Express from 'express';
// import puppeteer from 'puppeteer';
// // const puppeteer = require('puppeteer');
// // import { routerUser } from './resources/users/user.router';

// const app = Express();

// app.use(Express.json());
// // app.use(Express.urlencoded({ extended: false }));
// // app.use(cors());

// app.get('/category', async (req, res) => {
//     // console.log(req.path);
//     const scrape = async () => {
//         const browser = await puppeteer.launch({ headless: true });
//         const agent = await browser.userAgent();
//         // console.log(agent);
//         const page = await browser.newPage();
//         await page.setUserAgent(`${page}`);

//         await page.goto('https://mediamarkt.pl/rtv-i-telewizory/telewizor-lg-65up77003lb-8');

//         // const content = await page.content();
//         // console.log(content);

//         const result = await page.evaluate(() => {
//             let data = [];
//             let elements = document.querySelector('.info').firstChild;
//             let title = elements.textContent;
//             data.push({ title });

//             return data;
//         });

//         browser.close();
//         return result;
//     };

//     const value = await scrape();
//     res.status(200).json(value);
// });
// // app.use('/users', routerUser);

// export { app };
