import React from "react";
import TreeView from "../Tree/TreeView";
import SearchBar from "../../component/Search/SearchBar";

const searchList = [
  "amitej",
  "bag",
  "cat",
  "dog",
  "elephant",
  "frog",
  "girl",
  "hello",
  "irish",
];

const Home = () => {
  return (
    <div>
      <SearchBar searchList={searchList} />
      <TreeView />
    </div>
  );
};

export default Home;
