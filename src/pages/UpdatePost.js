import React, { useState,useEffect } from "react";
import "./CreatePost.css";
import posts from "../data/posts";
import { useNavigate, useParams } from "react-router-dom";

const UpdatePost = () => {
  const navigate = useNavigate();

  const [edited, setedited] = useState(false);
  const [title, settitle] = useState("");
  const [img, setimg] = useState("");
  const [body, setbody] = useState("");
  const { id } = useParams();

  useEffect(() => {
	  let obj = posts.find(e=> e.id == id);
	  settitle(obj.title);
	  setimg(obj.img);
	  setbody(obj.body)
  }, []);

  const addPost = (e) => {
    e.preventDefault();
    if (title === "" || img === "" || body === "") return;

   	posts.map((post)=>{
		if(post.id==id)
		{
			post.title = title;
			post.img = img;
			post.body = body;
		}
	});

    localStorage.setItem("posts", JSON.stringify(posts));
    navigate("/");
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
            onChange={(e) => {
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
            onChange={(e) => {
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
            onChange={(e) => {
              setbody(e.target.value);
            }}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
		{edited && <h1>Post edited</h1>}
      </form>
    </div>
  );
};

export default UpdatePost;
