const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      massive = require('massive'),
      config = require('./config'),
      cookieParser = require('cookie-parser'),
      session = require('express-session');
// console.log('1here?')
const app = module.exports = express();
app.use(express.static('public'));
// console.log('2here');
// const corsOptions = {
//   origin: 'http://localhost:3000'
// };

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());


const massiveInstance = massive.connectSync({
  connectionString: config.connectionString
})

app.set('db', massiveInstance);
const db = app.get('db');
const mainCtrl = require('./mainCtrl');



// console.log('here');
app.get('/api/getProducts', mainCtrl.getProducts);

app.listen(3000, function() {
  console.log('listening on 3000')
});
