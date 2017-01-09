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

// SELECT articles.*, categories.category, authors.firstname::text || ' ' || authors.lastname::text AS author, array_agg(tags.tag)
// AS tags
// FROM articles
// JOIN categories ON categories.id = articles.categoryid JOIN authors ON authors.id = articles.authorid LEFT JOIN tags on tags.articleid = articles.id  WHERE articles.published = true AND (upper(articles.title) LIKE upper($1) OR upper(articles.headline) LIKE upper($1)) GROUP BY articles.id, categories.category, authors.firstname, authors.lastname ORDER BY articles.createdat DESC LIMIT 10
