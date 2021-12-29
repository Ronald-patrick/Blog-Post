import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import posts from '../data/posts'
import "./CreatePost.css"

const BlogDetails = () => {
	const [post, setpost] = useState({})
	const {id} = useParams();
	useEffect(() => {
		for(let i = 0;i<posts.length;i++)
		{
			if(posts[i].id == id)
			{
				setpost(posts[i]);
			}

		}
	}, [])
	return (
		<div>
			<div className='topbar'>
				<Link className='btn' to={`/delete/:${id}`}>Delete Post</Link>
				<Link className="btn" to={`/update/:${id}`}>Update Post</Link>
			</div>
			<div className='details'>
				<img src={post.img} alt="Img" />
				<h1>{post.title}</h1>
				<p>
					{post.body}
				</p>
			</div>
		</div>
	)
}

export default BlogDetails
