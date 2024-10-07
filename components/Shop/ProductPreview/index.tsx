import { Product } from "@/payload-types";
import Image from "next/image";
import SizePicker from "../SizePicker";
import { cartProduct } from "@/types/cartProduct";

type ProductPreviewProps = {
  product: Product,
  setCartState: (bool: boolean) => void,
  addToCart: (product: cartProduct) => void,
};

const buildCartProduct = (product: Product): cartProduct => ({
  id: product.id,
  name: product.name,
  price: product.price,
  quantity: 1,
  size: 'XS',
  color: 'Green',
  description: product.description,
});

const ProductPreview = ({ product, setCartState, addToCart }: ProductPreviewProps) => {
  return (
    <>
      <Image
        src="/images/cactus.jpg"
        alt="hero"
        width={300}
        height={300}
        className="rounded-t-full"
      ></Image>
      <div className="flex items-center mt-4">
        <h1 className="text-5xl text-black tracking-tight font-thin font-serif">
          {product.name}
        </h1>
        <span className="bg-yellow-500 rounded-full text-xs py-1 px-2 ml-3 text-yellow-100 h-6 text-center">
          bestseller
        </span>
      </div>
      <h1 className="text-xs mt-4 text-gray-500 flex-wrap">
        {product.description}
      </h1>
      <div className="flex items-center mt-6 gap-2.5">
        <button className="bg-engenharia max-w-36 items-center text-sm text-primary transition-all p-3 rounded-full duration-300 dark:text-white dark:hover:text-primary" onClick={() => { setCartState(true); addToCart(buildCartProduct(product)) }}>
          <span className="duration-300 text-white font-extralight tracking-tight">
            {product.price}$ · Compra já
          </span>
        </button>
        <SizePicker></SizePicker>
      </div>
    </>
  );
};

export default ProductPreview;
