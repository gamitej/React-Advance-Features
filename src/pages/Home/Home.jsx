import { stateData } from "../../DummyData/data-set-1";
import { Tree } from "react-arborist";

const Home = () => {
  return (
    <div className="">
      <Tree
        initialData={stateData}
        openByDefault={false}
        width={600}
        height={1000}
        indent={24}
        rowHeight={36}
        paddingTop={30}
        paddingBottom={10}
        padding={25 /* sets both */}
      >
        {Node}
      </Tree>
    </div>
  );
};

function Node({ node, style, dragHandle }) {
  /* This node instance can do many things. See the API reference. */
  return (
    <div style={style} ref={dragHandle} onClick={() => node.toggle()}>
      {node.isLeaf ? "🍁" : ">"}{" "}
      {node.data.state !== undefined
        ? node.data.state
        : node.data.city !== undefined
        ? node.data.city
        : node.data.village}
    </div>
  );
}

export default Home;
