//
// make this first
// CREATE TABLE products
// (
//   id SERIAL PRIMARY KEY not null,
//   name VARCHAR(50),
//   description VARCHAR(200)
// );
//
// INSERT INTO products  (name, description) VALUES (RedWorms, One Hundred)
//
//
// CREATE TABLE prices
// (
//   id SERIAL PRIMARY KEY not null,
//   product_id INTEGER REFERENCES products(id) not null,
//   cost INTEGER
// );
//
// INSERT INTO prices (product_id, cost) VALUES (1,10);
//
//
//
// SELECT products.id, products.name, products.description, prices.cost
// FROM products
// JOIN prices ON products.id = prices.product_id;
