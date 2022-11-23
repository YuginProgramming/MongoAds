const express = require('express');
const upload = require('multer')();
const server = express();
//підключив конфіг з'єднання з базою
const db = require('./db');
//підключив конфіг до моделі колекції
const AdsModel = require('./models/ads');
const CommentModel = require('./models/comments');

server.set('view engine', 'ejs');
server.set('views', './views');

server.use(express.static('./static'));
server.use(express.json());

server.get('/', async (req, res) => {
  let front = await getAll();
  //res.render('main', {front: front[1].fill});
  //напхати можна в об'єк функцій 
  res.render('main', {front: front});
});

server.get('/new', async (req, res) => {
let front = await getAll();
//res.render('main', {front: front[1].fill});
//напхати можна в об'єк функцій 
res.render('newad', {front: front});
});

server.get('/:id', async (req, res) => {
  const { id } = req.params;
  const adContent = await getOne(id);
  const adPlus = { title: adContent.fill, content: adContent.comment };
  res.render('ads', adPlus);
})

const getOne = async (id) => {
  let postId;
  try {
    postId = await AdsModel.findOne({_id: id});
  } catch(err) {
    console.log(err);
    postId = err;
  }
  return postId;
};

const popAds =  async () => {
  const mixComments = await CommentModel
      .findOne({comment: '2 відгук з айді'})
      .populate('ad');
      //console.log(mixComments);
};
popAds();

server.post('/ads', upload.none(), async (req, res) => {
  //console.log(data)
  
  // запис даних  
  const createComment = async () => {
    const commentDoc = await CommentModel.create({
      comment: req.body.Opinion,
      ad: req.body.Id
  });
  }
  createComment();
  
  async function writeData (data) {
    const doc = await AdsModel.create({
        fill: data 
    });
  };
  async function readData () {
      return await AdsModel.find({});
  }
  await writeData(req.body.Name);
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

const PORT = process.env.PORT || 3000;
server.listen(PORT);
console.log('server live')