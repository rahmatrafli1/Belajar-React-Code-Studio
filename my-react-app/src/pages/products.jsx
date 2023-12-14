import { Fragment, useState } from "react";
import CardProducts from "../components/fragments/CardProducts";
import Button from "../components/elements/Button";
import Counter from "../components/fragments/Counter";

const products = [
  {
    id: 1,
    url: "/images/shoes-1.jpg",
    alter: "Shoes",
    price: 100000,
    name: "Sepatu Baru",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus,
  earum. Officia beatae quas iste esse laborum excepturi possimus at
  incidunt, laudantium eligendi nam repellat fugiat ipsum rem
  repellendus eos sequi.`,
  },
  {
    id: 2,
    url: "/images/sandal-1.jpg",
    alter: "Sandal Kuning",
    price: 15000,
    name: "Sandal Kuning",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac urna
  porttitor dolor lobortis sollicitudin non eu erat.`,
  },
  {
    id: 3,
    url: "/images/sandal-2.jpg",
    alter: "Sandal Pink",
    price: 10000,
    name: "Sandal Pink",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum pulvinar congue. Fusce sollicitudin mauris risus, id sagittis est elementum.`,
  },
];

const email = localStorage.getItem("email");

const convertToRupiah = (angka) => {
  return (
    "Rp " +
    angka.toLocaleString("id-ID", { styles: "currency", currency: "IDR" }) +
    ",-"
  );
};

const Products = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

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
      <div className="flex justify-center gap-2 p-2">
        <div className="flex flex-wrap w-4/5">
          {products.map((product) => {
            return (
              <CardProducts key={product.id}>
                <CardProducts.Header url={product.url} alter={product.alter} />
                <CardProducts.Body name={product.name}>
                  {product.description}
                </CardProducts.Body>
                <CardProducts.Footer
                  price={product.price}
                  id={product.id}
                  handleAddToCart={handleAddToCart}
                />
              </CardProducts>
            );
          })}
        </div>
        <div className="w-4/6">
          <h1 className="mx-5 mb-2 text-3xl font-bold text-blue-500">Cart</h1>
          <table className="text-left border-separate table-auto border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>{convertToRupiah(product.price)}</td>
                    <td>{item.qty}</td>
                    <td>{convertToRupiah(item.qty * product.price)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <Counter />
      </div>
    </Fragment>
  );
};

export default Products;
