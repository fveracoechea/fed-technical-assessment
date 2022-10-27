import type { NextPage } from "next";
import Head from "next/head";
import ProductDetails from "components/ProductDetails";
import ProductVariations from "components/ProductVariations";
import { useEffect, useState } from "react";

const title = "RTG Frontend technical assessment";


const PDP: NextPage = () => {
  
  const [product, setProduct] = useState(null);

  useEffect( () => {
    const url = "/api/product"
    const fetchProduct = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setProduct(json);
      }
      catch ( err) {
        console.error(err);
      }
    }
    fetchProduct();
  }, []) //Should run once on first mount

  return (
  <div className="container">
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="main">
      <h1>{title}</h1>
      {product ? ( //If null has not loaded
        product.errorMessage ? ( //All errors should have error message if coming from the api
          <section>
            <div>Product not found, please try again...</div>
          </section>
        ) : (
          <section className="product">
            <div>{product.title}</div>
            <ProductDetails />
            <ProductVariations />
          </section>
        )
      ) : (
        <section className="product">
          <div>Loading...</div>
        </section>
      )}

    </main>
  </div>
)};

export default PDP;
