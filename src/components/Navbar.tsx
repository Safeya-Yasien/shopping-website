import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="hidden lg:block ">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish ">
          <Link href="#" className="navbar_link relative uppercase">
            home
          </Link>
          <Link href="#" className="navbar_link relative uppercase">
            categories
          </Link>
          <Link href="#" className="navbar_link relative uppercase">
            men&rsquo;s
          </Link>
          <Link href="#" className="navbar_link relative uppercase">
            women&rsquo;s
          </Link>
          <Link href="#" className="navbar_link relative uppercase">
            jewelry
          </Link>
          <Link href="#" className="navbar_link relative uppercase">
            perfume
          </Link>
          <Link href="#" className="navbar_link relative uppercase">
            blog
          </Link>
          <Link href="#" className="navbar_link relative uppercase">
            hot offers
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
