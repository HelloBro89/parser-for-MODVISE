import Express from 'express';

const app = Express();

app.use(Express.json());

app.get('/category', async (req, res) => {
    console.log(req.path);

    res.status(200).json({});
});

export { app };
