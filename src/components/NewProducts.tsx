import React from "react";
import ProductCard from "./ProductCard";

const productsData = [
  {
    img: "/camera.png",
    title: "Sports",
    desc: "Trekking & Running Shoes - Black",
    rating: 2,
    price: "58.00",
  },
  {
    img: "/product-1.webp",
    title: "Sports",
    desc: "Trekking & Running Shoes - Black",
    rating: 3,
    price: "58.00",
  },

  {
    img: "/watch-1.png",
    title: "Sports",
    desc: "Trekking & Running Shoes - Black",
    rating: 5,
    price: "58.00",
  },

  {
    img: "/makup-1.png",
    title: "Shirts",
    desc: "Trekking & Running Shoes - Black",
    rating: 4,
    price: "50.00",
  },
];

const NewProducts = () => {
  return (
    <div className="">
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4 ">New Products</h2>

        <div
          className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
gap-10 xl:gap-x-20 xl:gap-y-10"
        >
          {productsData.map((product, index) => (
            <ProductCard
              key={index}
              img={product.img}
              title={product.title}
              desc={product.desc}
              rating={product.rating}
              price={product.price}
            />
          ))}
        </div>



      </div>
    </div>
  );
};

export default NewProducts;
