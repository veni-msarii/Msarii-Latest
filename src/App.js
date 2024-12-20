import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Pagenotfound from "./pages/Pagenotfound";
import SignUpPage from "./pages/QuickSignUp";
import BlogSignUp from "./pages/BlogSignUp";
import QuickSignUp from "./pages/QuickSignUp";
import BlogDraftingPage from "./pages/BlogDraftingPage";
import Blogs from "./pages/Blogs";
// import Product from "./pages/Product";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Contact />} />
          <Route path="/blog-signup" element={<BlogSignUp />} /> {/* Add the route for Sign Up */}
          <Route path="/signup" element={<QuickSignUp />} /> {/* Add the route for Sign Up */}
          <Route path="/blog-create" element={<BlogDraftingPage />} /> {/* Add the route for Sign Up */}
          <Route path="/blogs" element={<Blogs />} /> {/* Add the route for Sign Up */}



          {/* <Route path="/store" element={<Store />} /> */}
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
