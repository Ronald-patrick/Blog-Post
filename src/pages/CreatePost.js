import React, { useState } from "react";
import posts from "../data/posts";
import { useNavigate } from 'react-router-dom';
import "./CreatePost.css"

const CreatePost = () => {
	const navigate = useNavigate();
const [title, settitle] = useState("")
const [img, setimg] = useState("")
const [body, setbody] = useState("")
  const addPost = (e) => {
	e.preventDefault();
	if(title==="" || img==="" || body==="")
	return;
	posts.unshift({
		id : Math.floor(1000 + Math.random() * 9000),
		title, 
		img,
		body
	})
	localStorage.setItem("posts",JSON.stringify(posts));
	navigate('/');
  };

  return (
    <div className="container">
      <form onSubmit={addPost}>
        <div class="form-group">
          <label>Title</label>
		  <br />
          <input
            type="text"
            class="form-input"
            placeholder="Enter title"
			value={title}
			onChange={(e)=>{
				settitle(e.target.value);
			}}
          />
        </div>

		<div class="form-group">
          <label>Blog Preview Image</label>
		  <br />
          <input
            type="text"
            class="form-input"
            placeholder="Enter URL"
			value={img}
			onChange={(e)=>{
				setimg(e.target.value);
			}}
          />
        </div>

		<div class="form-group">
          <label></label>
          <textarea
            type="text"
            class="form-input"
            placeholder="Enter blog body"
			value={body}
			onChange={(e)=>{
				setbody(e.target.value);
			}}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
