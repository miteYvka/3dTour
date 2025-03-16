import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { MainPage } from "./pages/MainPage";

export default function Home() {
  return (
    <div>
      <Header/>
      <MainPage/>
      <Footer/>
    </div>
  );
}
