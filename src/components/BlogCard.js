import React from 'react'
import {Link} from "react-router-dom";
import "./BlogCard.css"

const BlogCard = (props) => {
	console.log(props.id);
	return (
		<div className='card'>
			<img src={props.img} alt="Images" />
			<div>
				<h1>{props.title}</h1>
				<Link to={`blog/${props.id}`} className='btn'>Details</Link>
			</div>
		</div>
	)
}

export default BlogCard
