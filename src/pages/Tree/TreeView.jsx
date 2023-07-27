import { Tree } from "react-arborist";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CabinIcon from "@mui/icons-material/Cabin";
import { useEffect, useState, useMemo } from "react";

const TreeView = ({ stateData, villType }) => {
  const [data, setData] = useState(stateData || []);

  const filterData = useMemo(() => {
    return stateData.map((item) => {
      const newChildren = item.children.map((city) => {
        const filteredVillages = city.children.filter(
          ({ type }) => villType[type] === true
        );
        return { ...city, children: filteredVillages };
      });
      return { ...item, children: newChildren };
    });
  }, [stateData, villType]);

  useEffect(() => {
    setData(filterData);
  }, [filterData]);

  return (
    <div className="">
      <Tree
        initialData={data}
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

function Node({ node, style, dragHandle }) {
  const nodeData = node.data;
  const tree = node.tree;
  const treeIsOpen = tree.isOpen(nodeData.id);

  return (
    <div style={style} ref={dragHandle} onClick={() => node.toggle()}>
      {node.isLeaf && (
        <div
          className={`cursor-pointer ${
            nodeData.type === "poor" ? "bg-red-100" : "bg-green-100"
          } p-2`}
        >
          <CabinIcon /> {nodeData.village}
        </div>
      )}
      {!node.isLeaf && (
        <div>
          {nodeData.state !== undefined && (
            <div className="cursor-pointer bg-blue-100 p-2">
              <span>
                <KeyboardArrowRightIcon
                  className={`${treeIsOpen ? "rotate-90" : ""}`}
                />
              </span>
              {nodeData.state}
            </div>
          )}
          {nodeData.state === undefined && (
            <div className="cursor-pointer bg-slate-200 p-2">
              <span>
                <KeyboardArrowRightIcon
                  className={`${treeIsOpen ? "rotate-90" : ""}`}
                />
              </span>{" "}
              {nodeData.city}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default TreeView;
