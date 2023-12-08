import CardProducts from "../components/fragments/CardProducts";

const productslist = [
  {
    id: 1,
    url: "/images/shoes-1.jpg",
    alter: "Shoes",
    price: "Rp 100.000",
    title: "Sepatu Baru",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus,
  earum. Officia beatae quas iste esse laborum excepturi possimus at
  incidunt, laudantium eligendi nam repellat fugiat ipsum rem
  repellendus eos sequi.`,
  },
  {
    id: 2,
    url: "/images/sandal-1.jpg",
    alter: "Sandal Biru",
    price: "Rp 15.000",
    title: "Sandal Biru",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac urna
  porttitor dolor lobortis sollicitudin non eu erat.`,
  },
  {
    id: 3,
    url: "/images/sandal-2.jpg",
    alter: "Sandal Pink",
    price: "Rp 10.000",
    title: "Sandal Pink",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum pulvinar congue. Fusce sollicitudin mauris risus, id sagittis est elementum.`,
  },
];

const Products = () => {
  return (
    <div className="flex justify-center gap-4 py-5">
      {productslist.map((product) => {
        return (
          <CardProducts key={product.id}>
            <CardProducts.Header url={product.url} alter={product.alter} />
            <CardProducts.Body title={product.title}>
              {product.description}
            </CardProducts.Body>
            <CardProducts.Footer price={product.price} />
          </CardProducts>
        );
      })}
    </div>
  );
};

export default Products;
