import {
	BrowserRouter,
	Routes,
	Route
  } from "react-router-dom";
  import Home from "./pages/Home"
  import CreatePost from "./pages/CreatePost"
  import DeletePost from "./pages/DeletePost"
  import UpdatePost from "./pages/UpdatePost"
  import BlogDetails from "./pages/BlogDetails"
  import Navbar from "./components/Navbar";

function App() {
  return (
	  <>
		<BrowserRouter>
		<Navbar/>
	  <Routes>
		<Route path="/" element={<Home/>}/>
		<Route path="/addBlog" element={<CreatePost/>}/>
		<Route path="/blog/:id" element={<BlogDetails/>}/>
		<Route path="/delete/:id" element={<DeletePost/>}/>
		<Route path="/update/:id" element={<UpdatePost/>}/>
	  </Routes>
  </BrowserRouter>
	  </>
  );
}

export default App;
