import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CabinIcon from "@mui/icons-material/Cabin";
import { btnTypeCss } from "./Data";

export default function Node({ node, style, dragHandle }) {
  const tree = node.tree;
  const nodeData = node.data;
  const treeIsOpen = tree.isOpen(nodeData.id);

  /**
   * JSX
   */
  return (
    <div style={style} ref={dragHandle} onClick={() => node.toggle()}>
      {/* =============== LEAF NODE  ============= */}
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
          {/* =============== STATE  =============== */}
          {nodeData.state !== undefined && (
            <div className="cursor-pointer bg-blue-100 p-2 flex justify-between">
              <span>
                <KeyboardArrowRightIcon
                  className={`${treeIsOpen ? "rotate-90" : ""}`}
                />
                {nodeData.state}
              </span>

              <BtnGroup counts={nodeData.count} />
            </div>
          )}
          {/* ================= CITY  =============== */}
          {nodeData.state === undefined && (
            <div className="w-full flex justify-between gap-x-2 items-center  cursor-pointer bg-slate-200 p-2">
              <div>
                <span>
                  <KeyboardArrowRightIcon
                    className={`${treeIsOpen ? "rotate-90" : ""}`}
                  />
                </span>{" "}
                {nodeData.city}
              </div>

              <BtnGroup counts={nodeData.count} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function BtnGroup({ counts = {} }) {
  return (
    <div className="flex gap-2">
      {Object.entries(counts).map(([name, value], idx) => (
        <button key={idx} className={`rounded-md px-2 ${btnTypeCss[name]}`}>
          {value}
        </button>
      ))}
    </div>
  );
}
