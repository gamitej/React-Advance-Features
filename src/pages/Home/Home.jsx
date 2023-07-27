import React from "react";
// libs
import { orderBy } from "lodash";
// comp
import TreeView from "../Tree/TreeView";
import SearchBar from "../../component/Search/SearchBar";
// data
import { stateData } from "../../DummyData/data-set-1";

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
      <TreeView stateData={stateData} />
    </div>
  );
};

export default Home;
