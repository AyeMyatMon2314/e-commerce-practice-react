import "./App.css";
import Header from "./components/Header";
import ProductImage from "./components/ProductImage";
import products from "../product.json";
import { useState } from "react";
import ProdcutDes from "./components/ProdcutDes";

function App() {
  const [id, setId] = useState(1);
  const sneakerInfo = products[id - 1];
  return (
    <>
      <div className="pt-10 bg-white w-full min-h-screen">
        <div className="mx-auto max-w-4xl">
          <Header />
          <hr class="h-px my-8 border-grayish-blue border" />
          <h2>MT</h2>
          <div className=" pt-8 flex gap-8 flex-row items-center justify-between">
            <ProductImage products={products} sneaker={id} setSneaker={setId} />
            <ProdcutDes sneaker={sneakerInfo} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
