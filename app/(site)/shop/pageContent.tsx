"use client";

import SectionHeader from "@/components/Common/SectionHeader";
import ShopCart from "@/components/Shop/Cart";
import CartItem from "@/components/Shop/CartItem";
import ProductPreview from "@/components/Shop/ProductPreview";
import ShopCard from "@/components/Shop/ShopCard";
import { Product } from "@/payload-types";
import React from "react";

export default function ShopPageContent({ products }) {
  const [previewProduct, setPreviewProduct] = React.useState(products[0]);
  const [openCart, setOpenCart] = React.useState(false);

  return (
    <>
      <div className="flex flex-row my-5 mx-20 mt-40">
        <section className="flex flex-col max-w-[300px]">
          <ProductPreview product={previewProduct} setCartState={setOpenCart}></ProductPreview>
        </section>
        <ShopCart isOpen={openCart} onOpenChange={setOpenCart} products={products}></ShopCart>
        <section className="flex flex-col ml-30">
          <h1 className="text-7xl font-serif tracking-tight text-black">
            Student Essentials
          </h1>
          <h1 className="text-2xl font-serif text-black mt-5 tracking-tight max-w-96">
            Os <span className="text-engenharia italic">merch-essentials</span>{" "}
            deste ano para viveres a tua vida académica ao máximo, com estilo.
          </h1>
          <div>
            <div className="mt-10 flex gap-2">
              {products.map((product: Product) => (
                <ShopCard
                  product={product}
                  key={product.id}
                  customClick={() => setPreviewProduct(product)}
                ></ShopCard>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
