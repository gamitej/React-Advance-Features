import React, { useState } from "react";
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
  const [type, setType] = useState({ poor: true, rich: true });

  const handleType = (val) => {
    setType((prevState) => ({ ...prevState, [val]: !prevState[val] }));
  };

  return (
    <div>
      <div className="flex w-[18rem] justify-around  items-center h-[5rem]">
        <button
          className={`${
            type.poor ? "bg-red-100" : "border-2 border-red-300 bg-white"
          } p-2 w-[7rem] rounded-md h-[3rem]`}
          onClick={() => handleType("poor")}
        >
          poor
        </button>
        <button
          className={`${
            type.rich ? "bg-green-100" : "border-2 border-green-300 bg-white"
          } p-2 w-[7rem] rounded-md h-[3rem]`}
          onClick={() => handleType("rich")}
        >
          rich
        </button>
      </div>

      {/* <SearchBar searchList={searchList} /> */}
      <TreeView stateData={stateData} />
    </div>
  );
};

export default Home;
