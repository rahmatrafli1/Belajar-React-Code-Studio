import { Fragment } from "react";
import CardProducts from "../components/fragments/CardProducts";
import Button from "../components/elements/Button";
import Counter from "../components/fragments/Counter";

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

const email = localStorage.getItem("email");

const Products = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/";
  };
  return (
    <Fragment>
      <div className="flex items-center justify-end h-16 px-10 text-white bg-blue-600">
        {email}
        <Button
          type="button"
          variant="bg-black"
          text="Logout"
          variant_ring_1="ring-black"
          text_1="text-black"
          mb=""
          wfull=""
          ml="ml-5"
          bg_hover="bg-white"
          onClick={handleLogout}
        />
      </div>
      <div className="flex justify-center gap-2 py-5">
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
      <div className="flex justify-center w-100">
        <Counter />
      </div>
    </Fragment>
  );
};

export default Products;
