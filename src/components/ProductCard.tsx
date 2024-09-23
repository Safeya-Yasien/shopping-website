import Image from "next/image";
import React from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

interface IProductProps {
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: string;
}

const ProductCard = ({ img, title, desc, rating, price }: IProductProps) => {
  const generateRating = (rating: number) => {
    switch (rating) {
      case 1:
        return (
          <div className="flex gap-1 text-[20px] text-[#ff9529]">
            <FaStar />
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
          </div>
        );
      case 2:
        return (
          <div className="flex gap-1 text-[20px] text-[#ff9529]">
            <FaStar />
            <FaStar />
            <CiStar />
            <CiStar />
            <CiStar />
          </div>
        );
      case 3:
        return (
          <div className="flex gap-1 text-[20px] text-[#ff9529]">
            <FaStar />
            <FaStar />
            <FaStar />
            <CiStar />
            <CiStar />
          </div>
        );
      case 4:
        return (
          <div className="flex gap-1 text-[20px] text-[#ff9529]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <CiStar />
          </div>
        );
      case 4:
        return (
          <div className="flex gap-1 text-[20px] text-[#ff9529]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="px-4 border border-gray-200 rounded-xl max-w-[400px]">
      <div>
        <Image
          className="w-full h-auto "
          src={img}
          width={200}
          height={300}
          alt={title}
        />
      </div>

      <div className="space-y-2 py-2 ">
        <h2 className="text-accent font-medium uppercase">{title}</h2>
        <p className="text-gray-500 max-w-[150px]">{desc}</p>
        <div> {generateRating(rating)}</div>
        <div className="font-bold flex gap-4 ">
          ${price}
          <del className="text-gray-500 font-normal ">${parseInt(price) + 50}.00</del>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
