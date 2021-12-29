import React, { useEffect } from 'react'
import posts from "../data/posts";
import { useNavigate, useParams } from 'react-router-dom';
import "./CreatePost.css"

const DeletePost = () => {
	const navigate = useNavigate();
	let {id} = useParams();
	let currid = parseInt(id);

	useEffect(() => {

		for(let i=0;i<posts.length;i++)
		{
			if(posts[i].id===currid)
			{
				posts.splice(i,1);
			}
		}
		localStorage.setItem("posts",JSON.stringify(posts));

	}, [])


	return (
		<div>
		Post Deleted
		</div>
	)
}

export default DeletePost
