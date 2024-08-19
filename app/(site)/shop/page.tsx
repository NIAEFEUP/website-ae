"use server";

import ShopCard from "components/Shop/ShopCard";
import ProductPreview from "components/Shop/ProductPreview";
import { getPayload } from "payload";
import config from "payload.config";
import React from "react";
import SectionHeader from "@/components/Common/SectionHeader";
import ShopPageContent from "./pageContent";

export default async function ShopPage() {
  const payload = await getPayload({ config });

  const result = await payload.find({
    collection: "product",
  });

  return <ShopPageContent products={result.docs} />;
}
