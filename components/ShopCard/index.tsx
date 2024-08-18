import { Product } from "@/payload-types";
import Image from "next/image";

type ShopCardProps = {
  product: Product;
};

const ShopCard = ({ product }: ShopCardProps) => {
  return (
    <div className="relative border border-stroke bg-white min-w-52 max-w-52 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%]">
      <Image
        src="/images/cactus.jpg"
        width={300}
        height={0}
        alt="Product image"
        className="w-full max-h-60 object-cover"
      />
      <div className="px-4 py-4">
        <h4 className="mb-2.5 text-para2 text-black dark:text-white font-serif tracking-tight">
          T-shirt oficial
        </h4>

        <button
          aria-label="Get the Plan button"
          className="bg-green-50 group/btn inline-flex items-center gap-2.5 text-xs text-primary transition-all px-3 py-2 rounded-full duration-300 dark:text-white dark:hover:text-primary"
        >
          <span className="duration-300 text-green-800 tracking-tight font-extralight">
            {product.price}$ · Compra já
          </span>
        </button>
      </div>
    </div>
  );
};

export default ShopCard;
