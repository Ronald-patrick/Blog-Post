import React from 'react'
import {Link} from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {
	return (
		<nav class="navbar">
  <h1 class="navbar-brand">Ronald's Blog</h1>
  <div class="navmain">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/addBlog">Add Blog</Link>
      </li>
    </ul>
  </div>
</nav>
	)
}

export default Navbar
