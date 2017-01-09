const app = require('./index'),
      db = app.get('db');


module.exports = {
  getProducts: function(req, response) {

    db.run("SELECT products.id, products.name, products.description, prices.cost FROM products JOIN prices ON products.id = prices.product_id", (err, res) => {
      if (err) {
        console.log('error here1')
        return res.status(500).send(err);
      }
      // console.log(res);

      // res.send('work?');
      response.status(200).send(res);
    });
  }
}
