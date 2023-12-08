import CardProducts from "../components/fragments/CardProducts";

const Products = () => {
  return (
    <div className="flex justify-center gap-4 py-5">
      <CardProducts>
        <CardProducts.Header url="/images/shoes-1.jpg" alter="Shoes" />
        <CardProducts.Body title="Sepatu Baru">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus,
          earum. Officia beatae quas iste esse laborum excepturi possimus at
          incidunt, laudantium eligendi nam repellat fugiat ipsum rem
          repellendus eos sequi.
        </CardProducts.Body>
        <CardProducts.Footer price="Rp 100.000" />
      </CardProducts>
      <CardProducts>
        <CardProducts.Header url="/images/sandal-1.jpg" alter="Shoes" />
        <CardProducts.Body title="Sandal Baru">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus,
          earum. Officia beatae quas iste esse laborum excepturi possimus at
          incidunt, laudantium eligendi nam repellat fugiat ipsum rem
          repellendus eos sequi.
        </CardProducts.Body>
        <CardProducts.Footer price="Rp 5.000" />
      </CardProducts>
    </div>
  );
};

export default Products;
