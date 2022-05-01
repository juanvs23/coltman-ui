import React from "react";
import Input from "../components/input";
import Layout from "../components/layout";

function Inputs() {
  return <Layout title="Inputs">
     <div className="row mb-3">
        <div className="col-3">
          <code className="mb-1" style={{ display: "block", padding: "0 5px" }}>
            {"<Button />"}
          </code>
          <Input />
        </div>
        <div className="col-3">
          <code className="mb-1" style={{ display: "block", padding: "0 5px" }}>
            {"&:hover, &:focus"}
          </code>
          <Input hovered />
        </div>
      </div>
  </Layout>;
}

export default Inputs;
