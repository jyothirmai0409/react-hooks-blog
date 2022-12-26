import { firestore } from "../firebase";
import { useFormInput } from "../hooks";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";
// function CreatePost() {
//   const title = useFormInput("");
//   const subTitle = useFormInput("");
//   const content = useFormInput("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(title, subTitle, content);
//     firestore.collection("posts").add({
//       title: title.value,
//       subTitle: subTitle.value,
//       content: content.value,
//       createdAt: new Date(),
//     });
//     title.onChange();
//     subTitle.onChange();
//     content.onChange();
//     // alert("post submitted successfully");
//   };
//   return (
//     <div className="create-post">
//       <h1>Create Post</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="form-field">
//           <label>Title</label>
//           <input {...title} />
//         </div>
//         <div className="form-field">
//           <label>Sub Title</label>
//           <input {...subTitle} />
//         </div>
//         <div className="form-field">
//           <label>Content</label>

//           <textarea {...content}></textarea>
//         </div>
//         <button className="create-post-btn">submit</button>
//       </form>
//     </div>
//   );
// }

function CreatePost() {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [content, setContent] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, subTitle, content);
    firestore.collection("posts").add({
      title: title,
      subTitle: subTitle,
      content: content,
      createdAt: new Date(),
    });
    setTitle("");
    setSubTitle("");
    setContent("");
    // alert("post submitted successfully, click on OK");
    history.push("/");
  };
  return (
    <div className="create-post">
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="form-field">
          <label>Sub Title</label>
          <input
            value={subTitle}
            onChange={(e) => {
              setSubTitle(e.target.value);
            }}
          />
        </div>
        <div className="form-field">
          <label>Content</label>

          <textarea
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          ></textarea>
        </div>
        <button className="create-post-btn">submit</button>
      </form>
    </div>
  );
}

export default withRouter(CreatePost);
