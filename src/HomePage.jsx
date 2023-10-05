import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(function () {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:9000/products");

        const clothesData = await res.json();
        console.log(clothesData);
        setProducts(clothesData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <main className="homepage">
      <h1>Homepage of my Dummy Product Page</h1>
      <div className="products__list">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product?id=${product.id}`}
            className="product__item"
          >
            <img loading="lazy" src={product.imageUrl} alt="" />
            <h2>{product.itemName}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
}
