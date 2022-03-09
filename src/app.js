import Express from 'express';
import { getListContent } from './handlers/list.handler.js';
import { getDetailsContent } from './handlers/details.handler.js';

const app = Express();
app.use(Express.json());

app.get('/details', async (req, res) => {
    try {
        const { urls } = req.body;
        const result = await getDetailsContent(urls);

        res.status(200).json(result);
    } catch (e) {
        console.log(`********** ${e.stack}`);
        res.status(404).json({ Message: 'Page not found or invalid selector' });
    }
});

app.get('/category ', async (req, res) => {
    console.log('test');
    try {
        const url = req.body.url;
        const checkPath = url.split('/')[3] === 'outlet' ? 'outlet' : 'main';
        const result = await getListContent(url, checkPath);

        if (!result.length) {
            res.status(200).json({ message: 'This category does not have any products.' });
        } else {
            res.status(200).json(result);
        }
    } catch (e) {
        console.log(e.stack);
        res.status(404).json({ Message: 'Page not found or invalid selector' });
    }
});

export { app };
