"use server";

import ShopCard from "components/ShopCard";
import { getPayload } from "payload";
import config from "payload.config";
import Image from "next/image";

export default async function ShopPage() {
  const payload = await getPayload({ config });

  const result = await payload.find({
    collection: "product",
  });

  return (
    <>
      <div className="flex flex-row my-40 mx-20">
        <section className="flex flex-col max-w-[300px]">
          <Image
            src="/images/cactus.jpg"
            alt="hero"
            width={300}
            height={300}
            className="rounded-t-full"
          ></Image>
          <div className="flex items-center mt-4">
            <h1 className="text-5xl text-black tracking-tight font-thin font-serif">
              Sweatshirt
            </h1>
            <span className="bg-yellow-500 rounded-full text-xs py-1 px-2 ml-3 text-yellow-100 h-6 text-center">
              bestseller
            </span>
          </div>
          <h1 className="text-xs mt-4 text-gray-500 flex-wrap">
            A nossa nova sweathshirt clássica feita com algodão de melhor
            qualidade. Apropriada para verão e inverno para estares sempre
            confortável a representar a melhor faculdade do país.
          </h1>
          <button className="bg-engenharia mt-6 max-w-36 items-center gap-2.5 text-sm text-primary transition-all py-2 rounded-full duration-300 dark:text-white dark:hover:text-primary">
            <span className="duration-300 text-white font-extralight tracking-tight">
              23$ · Compra já
            </span>
          </button>
        </section>
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
              <ShopCard product={result.docs[0]} />
              <ShopCard product={result.docs[0]} />
              <ShopCard product={result.docs[0]} />
              <ShopCard product={result.docs[0]} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
