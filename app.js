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

server.get('/', (req, res) => {
    res.render('main');
});
    
server.post('/test', upload.none(), async (req, res) => {
  // зробить стрілочну 
  async function writeData (data) {
    console.log('live');
    const doc = await AdsModel.create({
        fill: data 
    });
    //console.log(doc);
  };
  async function readData () {
      return await AdsModel.find({});
  }
  await writeData(req.body.Name);
  const result = await readData();
  console.log(result)
  //res.send(result)
}); 

const PORT = process.env.PORT || 3000;
server.listen(PORT);