import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "First Special Book Edition",
    description: "The first book that is available for purchased",
  },
  {
    id: "p2",
    price: 7,
    title: "Second Very Special Book Edition",
    description: "The second book that is available for purchased",
  },
];

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite reads now</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
