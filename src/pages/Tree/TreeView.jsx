import { Tree } from "react-arborist";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CabinIcon from "@mui/icons-material/Cabin";
import { useEffect, useState, useMemo, useLayoutEffect } from "react";

const TreeView = ({ stateData, villType }) => {
  const [data, setData] = useState(stateData || []);

  const filterData = useMemo(() => {
    return stateData.map((item) => {
      const newChildren = item.children.map((city) => {
        const filteredVillages = city.children.filter(({ type }) => {
          if (type in villType && villType[type]) return true;
        });
        return { ...city, children: filteredVillages };
      });
      return { ...item, children: newChildren };
    });
  }, [stateData, villType]);

  useEffect(() => {
    setData(filterData);
  }, [filterData]);

  return (
    <div className="" key={villType}>
      <Tree
        data={data}
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
          {/* ======== STATE  ======== */}
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
          {/* ======== CITY  ======== */}
          {nodeData.state === undefined && (
            <div className="w-full flex gap-x-2 items-center  cursor-pointer bg-slate-200 p-2">
              <div>
                <span>
                  <KeyboardArrowRightIcon
                    className={`${treeIsOpen ? "rotate-90" : ""}`}
                  />
                </span>{" "}
                {nodeData.city}
              </div>
              <p className=" bg-purple-500 w-[1.5rem] rounded-full text-center text-white text-[14px]">
                {nodeData.children.length}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default TreeView;
