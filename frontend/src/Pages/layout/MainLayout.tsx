import { Outlet } from "react-router-dom"
import Header from "../../components/partials/Header"
import Footer from "../../components/partials/Footer"
import Promotions from "../utils/Promotions"
const MainLayout = () => {
  return (
    <>
        <Promotions/>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default MainLayout
