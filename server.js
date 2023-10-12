const jsonServer = require('json-server');
const server = jsonServer.create();
//const routerCategory = jsonServer.router('category.json');
//const routerSubcategory = jsonServer.router('subcategory.json');
const routerProducts = jsonServer.router('products.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Create separate routes for each JSON file

server.use(routerProducts);

server.listen(3000, () => {
  console.log('JSON Server is running');
});
