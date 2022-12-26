import Home from "./Home";
import CreatePost from "./CreatePost";
import PostDetail from "./PostDetail";
import Navbar from "./Navbar";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/post/:postId" component={PostDetail} />
        <Route path="/create-post" component={CreatePost} />
      </Switch>
    </div>
  );
}

export default App;
