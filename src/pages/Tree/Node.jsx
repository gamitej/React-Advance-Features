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
            <div className="cursor-pointer bg-blue-100 p-2">
              <span>
                <KeyboardArrowRightIcon
                  className={`${treeIsOpen ? "rotate-90" : ""}`}
                />
              </span>
              {nodeData.state}
            </div>
          )}
          {/* ================= CITY  =============== */}
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
