import express from 'express';
import config from './config';
import serverRenderer from './renderers/server';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    const initialContent = await serverRenderer(req.url);
    res.render('index', { ...initialContent });
});


app.listen(config.port, function listenHandler() {
    console.info(`Running on port ${config.port}...`);
});