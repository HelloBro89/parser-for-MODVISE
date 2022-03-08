import Express from 'express';
import { /* getTest ,*/ getСontent } from './handlers/listHandler.js';

const app = Express();

app.use(Express.json());
// app.use(Express.urlencoded({ extended: false }));
// app.use(cors());

app.get('/details', async (req, res) => {
    console.log();
});

app.get('/list', async (req, res) => {
    // *******************  OUTLET
    // const url = `https://mediamarkt.pl/outlet/telefony-i-smartfony/akcesoria/zestawy-sluchawkowe`; // headphones 12 pages--------
    // const url = `https://mediamarkt.pl/outlet/rtv-i-telewizory/sluchawki`; // headphones another section 19 pages
    // const url = `https://mediamarkt.pl/outlet/rtv-i-telewizory/kino-domowe`; // home theater 13 pages
    // const url = `https://mediamarkt.pl/outlet/komputery-i-tablety/komputery-stacjonarne`; // Computers 1 pages
    // const url = `https://mediamarkt.pl/outlet/agd/plyty-grzejne`; // plate is empty!
    // const url = `https://mediamarkt.pl/outlet/agd/kuchnie`; // FOR TEST
    // const url = `https://mediamarkt.pl/outlet/dla-dzieci/karmienie`; // things for kithen

    // ******************** MAIN SALES

    // const url = `https://mediamarkt.pl/komputery-i-tablety/laptopy-laptopy-2-w-1/notebooki`; // laptops
    // const url = `https://mediamarkt.pl/foto-i-kamery/aparaty-cyfrowe/aparaty-systemowe`; // cameras 2 pages
    // const url = `https://mediamarkt.pl/agd/lodowki-i-zamrazarki/lodowki-samsung-grand`; // fridge FOR TEST 1 PAGE ----
    // const url = `https://mediamarkt.pl/konsole-i-gry/playstation-5/gry-ps5`; // Games for PS5 FOR TEST 5 PAGE
    // const url = `https://mediamarkt.pl/komputery-i-tablety/laptopy-laptopy-2-w-1/laptopy-do-gier`; // laptops for game PS5 FOR TEST 5 PAGE
    // const url = `https://mediamarkt.pl/konsole-i-gry/nintendo-3ds/2ds/gry-nintendo-3ds/2ds`; // Games for Nintendo FOR TEST 1 PAGE
    // const url = `https://mediamarkt.pl/komputery-i-tablety/laptopy-laptopy-2-w-1/notebooki`; // ALLL
    // const url = `https://mediamarkt.pl/agd-male/uzdatnianie-powietrza/klimatyzatory`; // SSOME THINGS
    // const url = `https://mediamarkt.pl/filmy/filmy-blu-ray/dramat`; // films

    // const result = await getTest(url);

    const url = req.body.url;
    console.log(url);
    const checkPath = url.split('/')[3] === 'outlet' ? 'outlet' : 'main';
    console.log(checkPath);
    const result = await getСontent(url, checkPath);

    // console.log(result);

    if (!result.length) {
        res.status(200).json({ message: 'This category does not have any products.' });
    } else {
        res.status(200).json(result);
    }
});

export { app };
