import ClientMenuPage from "./client"

const MenuPage = async () => {

   const ESTABLISHMENT_ID = 15;
   const UBASE_RL = "http://ementas.sas.up.pt:3000/api/"
   const URL = `${UBASE_RL}establishments/${ESTABLISHMENT_ID}`

   const items = await (await fetch(`${URL}/permanent-menus`)).json()
   const categories = await (await fetch(`${URL}/permanent-menus/categories`)).json()
   const dayMenusLink = URL + "/day-menus?period=LUNCH" // &year=2024&weekNumber=48" // to test
   const dayMenus = await (await fetch(dayMenusLink)).json()

   return <ClientMenuPage categories={categories} items={items} dayMenus={dayMenus} />
}

export default MenuPage