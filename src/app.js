import Express from 'express';
import { getTest, getСontent } from './helpers/puppeteer.js';

const app = Express();

app.use(Express.json());
// app.use(Express.urlencoded({ extended: false }));
// app.use(cors());

app.get('/category', async (req, res) => {
    // console.log(req.body);
    console.log(req.originalUrl);

    // ******************* OUTLET
    // const url = `https://mediamarkt.pl/outlet/telefony-i-smartfony/akcesoria/zestawy-sluchawkowe`; // headphones 12 pages--------
    // const url = `https://mediamarkt.pl/outlet/rtv-i-telewizory/sluchawki`; // headphones another section 19 pages
    // const url = `https://mediamarkt.pl/outlet/rtv-i-telewizory/kino-domowe`; // home theater 13 pages
    // const url = `https://mediamarkt.pl/outlet/komputery-i-tablety/komputery-stacjonarne`; // Computers 1 pages
    // const url = `https://mediamarkt.pl/outlet/agd/plyty-grzejne`; // plate is empty!
    const url = `https://mediamarkt.pl/outlet/agd/kuchnie`; // FOR TEST
    // ******************** MAIN SALES

    // const url = `https://mediamarkt.pl/komputery-i-tablety/laptopy-laptopy-2-w-1/notebooki`; // laptops
    // const url = `https://mediamarkt.pl/foto-i-kamery/aparaty-cyfrowe/aparaty-systemowe`; // cameras 2 pages
    // const url = `https://mediamarkt.pl/agd/lodowki-i-zamrazarki/lodowki-samsung-grand`; // fridge FOR TEST 1 PAGE ----
    // const url = `https://mediamarkt.pl/konsole-i-gry/playstation-5/gry-ps5`; // Games for PS5 FOR TEST 5 PAGE
    // const url = `https://mediamarkt.pl/komputery-i-tablety/laptopy-laptopy-2-w-1/laptopy-do-gier`; // laptops for game PS5 FOR TEST 5 PAGE
    // const url = `https://mediamarkt.pl/konsole-i-gry/nintendo-3ds/2ds/gry-nintendo-3ds/2ds`; // Games for Nintendo FOR TEST 1 PAGE
    // const url = `https://mediamarkt.pl/komputery-i-tablety/laptopy-laptopy-2-w-1/notebooki`; // ALLL
    // const url = `https://mediamarkt.pl/agd-male/uzdatnianie-powietrza/klimatyzatory`; // SSOME THINGS

    // const result = await getTest(url);

    // const checkPath = 'main';
    const checkPath = 'out';
    const result = await getСontent(url, checkPath);

    // console.log(result);

    if (!result.length) {
        res.status(200).json({ message: 'This category does not have any products.' });
    } else {
        res.status(200).json(result);
    }
});

export { app };
