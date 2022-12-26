import { useEffect, useState } from "react";
import { firestore } from "../firebase";

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    firestore
      .collection("posts")
      .get()
      .then((snapshot) => {
        const posts = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        console.log("posts", posts);
        setPosts(posts);
      });
  }, []);
  return (
    <div className="home">
      <h1>TechBlog</h1>
      <div id="blog-by">Jyothi</div>
      {posts.map((post, index) => (
        <div className="post" key={`post-${index}`}>
          <a href={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </a>
          <p>{post.subTitle}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
