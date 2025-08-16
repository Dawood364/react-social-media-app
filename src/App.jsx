import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreatePost from "./components/CreatePost";
import SideBar from "./components/SideBar";
import PostList from "./components/PostList";
import PostListProvider from "./store/store-list";

const App = ({}) => {
  const [SeletedTab, SetSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="containar">
        <SideBar SeletedTab={SeletedTab} SetSelectedTab={SetSelectedTab} />

        <div className="cotent">
          <Header />

          {SeletedTab === "Home" ? <PostList /> : <CreatePost />}

          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
};

export default App;
