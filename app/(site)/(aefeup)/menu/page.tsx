"use client"

import SectionHeader from "@/components/Common/SectionHeader"
import DayMenuCard from "./DayMenuCard"
import { useState } from "react"
import ClientMenuPage from "./client"

const MenuPage = () => {

   const categories = ["Cafetaria", "Bar", "Restaurante", "Takeaway"]
   const [selectedCategory, setSelectedCategory] = useState(categories[0]);

   const items = [{
      name: "Café",
      price: "0.60€"
   }, {
      name: "Café com leite",
      price: "0.70€"
   }, {
      name: "Galão",
      price: "1.00€"
   }, {
      name: "Chá",
      price: "0.50€"
   }, {
      name: "Sumo",
      price: "1.00€"
   }, {
      name: "Água",
      price: "0.60€"
   }, {
      name: "Cerveja",
      price: "1.00€"
   }, {
      name: "Imperial",
      price: "1.50€"
   }, {
      name: "Vinho",
      price: "1.00€"
   }, {
      name: "Vinho do Porto",
      price: "1.50€"
   }, {
      name: "Whisky",
      price: "1.50€"
   }, {
      name: "Gin",
      price: "1.50€"
   }, {
      name: "Vodka",
      price: "1.50€"
   }, {
      name: "Caipirinha",
      price: "1.50€"
   }, {
      name: "Mojito",
      price: "1.50€"
   },
   ]

   return <ClientMenuPage categories={categories} items={items} dayMenu={[]} />

}

export default MenuPage