import { Tree } from "react-arborist";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CabinIcon from "@mui/icons-material/Cabin";

const TreeView = ({ stateData }) => {
  return (
    <div className="">
      <Tree
        initialData={stateData}
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
