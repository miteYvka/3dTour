import { Banner } from "../components/MainPage/Banner"
import { Info } from "../components/MainPage/Info"
import { Styles } from "../components/MainPage/Slyles/Styles"
import { Working } from "../components/MainPage/Working"

export const MainPage = () => {
  return (
    <>
      <Banner/>
      <Working/>
      <Styles/>
      <Info/>
    </>
  )
}