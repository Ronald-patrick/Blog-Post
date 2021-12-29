import React, { useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard';
import posts from "../data/posts"
import "../components/BlogCard.css"
const Home = () => {
	return (
		<div>
			<div className='card-wrapper'>
				{posts.map((post)=>(
					<BlogCard id={post.id} img={post.img} title={post.title} />
				))}
			</div>	
		</div>
	)
}

export default Home
