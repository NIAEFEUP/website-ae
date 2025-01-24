"use client";

import SectionHeader from "@/components/Common/SectionHeader";
import ShopCart from "@/components/Shop/Cart";
import ShopCard from "@/components/Shop/ShopCard";
import { Product } from "@/payload-types";
import { cartProduct } from "@/types/cartProduct";
import React from "react";

export default function ShopPageContent({ products }) {
  const [openCart, setOpenCart] = React.useState(false);
  const [cartProducts, setCardProducts] = React.useState<cartProduct[]>([]);

  const addToCart = (item: cartProduct) => {
    setCardProducts((prevCardProducts) => {
      if (
        prevCardProducts.some(
          (p) => p.product.id === item.product.id && p.size === item.size
        )
      ) {
        return prevCardProducts;
      }
      return [...prevCardProducts, item];
    });
  };

  const removeFromCart = (itemCart: cartProduct) => {
    setCardProducts((prevCardProducts) =>
      prevCardProducts.filter(
        (item) =>
          item.product.id !== itemCart.product.id ||
          (item.product.id === itemCart.product.id &&
            item.size !== itemCart.size)
      )
    );
  };

  return (
    <>
      <ShopCart
        isOpen={openCart}
        onOpenChange={setOpenCart}
        products={cartProducts}
        removeFromCart={removeFromCart}
      ></ShopCart>

      <main className="py-20 lg:py-25 xl:py-30">
        <SectionHeader
          headerInfo={{
            title: "Loja",
            subtitle: "",
            description: "Aqui podes comprar cenas e ser mesmo cool",
          }}
        />

        <section className="flex flex-wrap px-24 mt-5 gap-8 justify-center">
          {products.map((product: Product) => (
            <>
              <ShopCard
                product={product}
                key={product.id}
                setCartState={setOpenCart}
                addToCart={addToCart}
              ></ShopCard>
            </>
          ))}
        </section>
      </main>
    </>
  );
}
