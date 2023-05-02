import About from "@/Components/About/About";
import Details from "@/Components/Details/Details";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import Navbar from "@/Components/Navbar/Navbar";
import Products from "@/Components/Products/Products";
import Reviews from "@/Components/Reviews/Reviews";
import Social from "@/Components/Social/Social";

export default function Home() {
  return (
    <>
    <title>Bubble Coffee</title>
    <main>
      <Navbar />
      <Header />
      <Details />
      <Products />
      <About />
      <Social />
      <Reviews />
      <Footer />
    </main>
    </>
  )
}
