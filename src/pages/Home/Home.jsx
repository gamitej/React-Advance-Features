import React, { useMemo, useState } from "react";
// comp
import TreeView from "../Tree/TreeView";
// data
import Head from "../Tree/component/Head";
import { stateData } from "../../DummyData/data-set-1";
import { SearchStateData } from "../Tree/Data/func.js";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [villType, setVillType] = useState({ poor: true, rich: true });

  const handleType = (val) => {
    setVillType((prevState) => ({ ...prevState, [val]: !prevState[val] }));
  };

  const newSearchedData = useMemo(() => {
    return SearchStateData({ stateData, searchText });
  }, [stateData, searchText]);

  /**
   * JSX
   */
  return (
    <div>
      <Head
        villType={villType}
        handleType={handleType}
        setSearchText={setSearchText}
      />
      <TreeView stateData={newSearchedData} villType={villType} />
    </div>
  );
};

export default Home;
