import "./App.css";
import Banner from "./components/Banner";
import Counter from "./components/Counter";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";
import TopHeader from "./components/TopHeader";

function App() {
  // Common Component
  // Reusable Component
  return (
    <>
      <TopHeader />
      <Navbar/>
      <Banner/>
      <Courses/>
      <Counter/>
      <Testimonial/>
      <Footer/>
    </>
  );
}

export default App;
