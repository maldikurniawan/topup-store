import { Banner, Popular, Product } from "@/pages";
import { Footer, Header } from "./components";

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Banner />
      <Popular />
      <Product />
      <Footer />
    </div>
  )
}