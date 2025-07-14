import { Metadata } from "next"
import ClientMenuPage from "./client"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Ementa Bar",
  description: "Ementa diária do Bar AEFEUP",
}

const MenuPage = async () => {

  const ESTABLISHMENT_ID = 15;
  const UBASE_RL = "http://ementas.sas.up.pt:3000/api/"
  const URL = `${UBASE_RL}establishments/${ESTABLISHMENT_ID}`

  const items = await (await fetch(`${URL}/permanent-menus`)).json()
  const categories = await (await fetch(`${URL}/permanent-menus/categories`)).json()
  const dayMenusLink = URL + "/day-menus?period=LUNCH&" //year=2024&weekNumber=50" // to test and remove filter
  const dayMenus = await (await fetch(dayMenusLink)).json()
  const filteredDayMenus = dayMenus.filter(dayMenu => new Date(dayMenu.day) >= new Date()).sort((a, b) => a.day - b.day)

  return <ClientMenuPage categories={categories} items={items} dayMenus={filteredDayMenus} />
}

export default MenuPage;
