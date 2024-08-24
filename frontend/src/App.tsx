import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Blog } from "./pages/Blog.js";
import { Signin } from "./pages/Signin.js";
import { Signup } from "./pages/Signup.js";
import { Blogs } from "./pages/Blogs.js";
import { Publish } from "./pages/Publish.js";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/publish" element={<Publish />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
