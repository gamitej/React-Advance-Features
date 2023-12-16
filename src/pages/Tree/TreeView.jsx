import { useMemo } from "react";
import { Tree } from "react-arborist";
import Node from "./Node";
import { FilteredStateData, SearchStateData } from "./Data/func";

const TreeView = ({ searchText = "", stateData = [], villType = {} }) => {
  // =============== SEARCH LOGIC ================
  const searchedResult = useMemo(() => {
    return SearchStateData({ stateData, searchText });
  }, [stateData, searchText]);

  // =============== FILTER LOGIC ===============
  const filterData = useMemo(() => {
    return FilteredStateData({ stateData: searchedResult, villType });
  }, [searchedResult, villType]);

  if (filterData.length === 0) {
    return <div className="text-center  text-xl mt-5">No Data Available</div>;
  }

  /**
   * JSX
   */
  return (
    <div className="" key={villType}>
      <Tree
        data={filterData || []}
        openByDefault={false}
        width={"100%"}
        height={1000}
        indent={24}
        rowHeight={45}
        paddingTop={30}
        paddingBottom={10}
        padding={25}
      >
        {Node}
      </Tree>
    </div>
  );
};

export default TreeView;
