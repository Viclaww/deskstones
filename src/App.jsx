import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetails from "./components/BlogDetails";
import Programs from "./pages/Programs";
import Consulting from "./pages/Consulting";
import Mentorsship from "./pages/Mentorship";
import Media from "./pages/Media";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:blogId" element={<BlogDetails />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/consulting" element={<Consulting />} />
            <Route path="/media" element={<Media />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentors" element={<Mentorsship />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
