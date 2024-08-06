import React from "react";
import { Material } from "@/types/material";

const SingleMaterial= ({ material }: { material: Material }) => {
  const { name,quantity } = material;

  return (
    <>
        <div 
          className="rounded-lg border bg-white p-2 shadow-solid-3 hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-2"
        >
          <div className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle flex p-2">
            <h3 className="flex-grow">
              {name}
            </h3>
            <h3>
              {quantity}
            </h3>
          </div>
        </div>
    </>
  );
};

export default SingleMaterial;
