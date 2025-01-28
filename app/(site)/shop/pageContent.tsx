"use client";

import SectionHeader from "@/components/Common/SectionHeader";
import ShopCart from "@/components/Shop/Cart";
import ShopCard from "@/components/Shop/ShopCard";
import { Product } from "@/payload-types";
import { cartProduct } from "@/types/cartProduct";
import React from "react";

export default function ShopPageContent({ products }) {
  const [openCart, setOpenCart] = React.useState(false);
  const [cartProducts, setCartProducts] = React.useState<cartProduct[]>([]);

  React.useEffect(() => {
    const savedOrder = localStorage.getItem("currentOrder");
    if (savedOrder) {
      setCartProducts(JSON.parse(savedOrder).order.products);
    }
  }, []);

  const isProductInCart = (product: cartProduct) => {
    return cartProducts.some(
      (cartProduct) =>
        product.product.id == cartProduct.product.id &&
        product.size == cartProduct.size
    );
  };

  const addToCart = (item: cartProduct) => {
    setCartProducts((prevCardProducts) => {
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
    setCartProducts((prevCardProducts) =>
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
        cartProducts={cartProducts}
        setCartProducts={setCartProducts}
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
                isProductInCart={isProductInCart}
                addToCart={addToCart}
              ></ShopCard>
            </>
          ))}
        </section>

        <button
          className="mx-auto flex mt-5 bg-black rounded-lg text-sm p-2 text-white"
          onClick={() => setOpenCart(true)}
        >
          Open Cart
        </button>
      </main>
    </>
  );
}
