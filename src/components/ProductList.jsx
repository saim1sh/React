import { useEffect, useRef, useState } from "react";

const productsPerPage = 10;

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null); //to track the loading div

  useEffect(() => {

    const fetchMoreProducts = async () => {
      const response = await fetch(
        `https://dummyjson.com/products?limit=${productsPerPage}&skip=${page * productsPerPage}`,
      );
      const data = await response.json();
      console.log(data);
      if (data.products.length === 0) {
        setHasMore(false);
      } else {
        setProducts((prevProducts) => [...prevProducts, ...data.products]);
        setPage((prevPage) => prevPage + 1);
      }
    };


    const onIntersection = (items) => {
      const loaderItems = items[0];
      if (loaderItems.isIntersecting && hasMore) {
        //fetch more products
        fetchMoreProducts();
      }
    };
    const observer = new IntersectionObserver(onIntersection);
    if (observer && loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    //cleanup for avoid create unused observer
    return () => {
      if (observer) observer.disconnect();
    };
  }, [hasMore, page]);

  return (
    <div>
      <div>Product List</div>

      {/* Render your product items here */}
      {products.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}

      {hasMore && <div ref={loaderRef}>Loading more products...</div>}
    </div>
  );
}
