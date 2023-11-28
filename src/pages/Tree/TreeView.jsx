import { useMemo } from "react";
import { Tree } from "react-arborist";
import Node from "./Node";
import { FilteredStateData } from "./Data/func";

const TreeView = ({ stateData, villType }) => {
  // =============== FILTER LOGIC ================
  const filterData = useMemo(() => {
    // return stateData.map((item) => {
    //   const newChildren = item.children.map((city) => {
    //     const filteredVillages = city.children.filter(({ type }) => {
    //       if (type in villType && villType[type]) return true;
    //     });
    //     return { ...city, children: filteredVillages };
    //   });
    //   return { ...item, children: newChildren };
    // });
    return FilteredStateData({ stateData, villType });
  }, [stateData, villType]);

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
