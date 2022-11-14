const express = require('express');
const upload = require('multer')();
const server = express();
//підключив конфіг з'єднання з базою
const db = require('./db');
//підключив конфіг до моделі колекції
const AdsModel = require('./models/ads');

server.set('view engine', 'ejs');
server.set('views', './views');

server.use(express.static('./static'));
server.use(express.json());

server.get('/', async (req, res) => {
    let front = await getAll();
    //res.render('main', {front: front[1].fill});
    res.render('main', {front: front});
});
    
server.post('/ads', upload.none(), async (req, res) => {
  // зробить стрілочну 
  async function writeData (data) {
    console.log('live');
    const doc = await AdsModel.create({
        fill: data 
    });
  };
  async function readData () {
      return await AdsModel.find({});
  }
  await writeData(req.body.Name);
  //const getAll = await readData();
  //console.log(getAll)
}); 

const getAll = async () => {
  let posts;
  try {
    posts = await AdsModel.find({});
  } catch(err) {
    console.log(err);
    posts = err;
  }
  return posts;
  };

//server.get('/getall', getAll);

const PORT = process.env.PORT || 3000;
server.listen(PORT);