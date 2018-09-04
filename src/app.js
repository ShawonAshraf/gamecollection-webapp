import express from 'express';
import hbs from 'hbs';
import bodyParser from 'body-parser';
import axios from 'axios';

// platform wise message templates
import messageByPlatform from './helpers/message-plat';

const app = express();
const port = process.env.PORT || 4000;
// change the API url to yours!
const apiUrl = 'http://localhost:3000';

// add middle wares
app.use(bodyParser.json());
app.set('view engine', 'hbs');
// set view path
app.set('views', `${__dirname}/views`);
// public dir path
app.use(express.static(`${__dirname}/public`));

// register partials for hbs
hbs.registerPartials(`${__dirname}/views/partials`);

// index
app.get('/', (req, res) => {
    axios.get(`${apiUrl}/games/total/all`)
        .then((response) => {
            res.render('index.hbs', {
                status: 'ok',
                code: '200',
                total: response.data.total,
            });
        });
});

// display games via platform name
// platform names are fetched from the url
app.get('/:platform', (req, res) => {
    const platform = req.params.platform;
    axios.get(`${apiUrl}/games/${platform}`)
        .then((response) => {
            // console.log(response.data);
            res.status(200).render('games.hbs', {
                games: response.data.games,
                h3: messageByPlatform[platform].h3,
                p: messageByPlatform[platform].p,
                total: response.data.games.length,
            });
        })
        .catch(e => res.status(404).send(e));
});

// start listening on port
app.listen(port, () => {
    console.log(`Server running at * ${port}`);
});