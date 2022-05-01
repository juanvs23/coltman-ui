import React from "react";
import Input from "../components/input";
import Layout from "../components/layout";

function Inputs() {
  return <Layout title="Inputs">
     {/*first row*/}
     <div className="row mb-3">
        <div className="col-3">
          <code className="mb-1" style={{ display: "block", padding: "0 5px" }}>
            {" <Input />"}
          </code>
          <Input />
        </div>
        <div className="col-3">
          <code className="mb-1" style={{ display: "block", padding: "0 5px" }}>
            {"&:hover"}
          </code>
          <Input hovered />
        </div>
        <div className="col-3">
          <code className="mb-1" style={{ display: "block", padding: "0 5px" }}>
            {"&:focus"}
          </code>
          <Input focus />
        </div>
      </div>
      
      {/*second row*/}
      <div className="row mb-3">
        <div className="col-3">
          <code className="mb-1" style={{ display: "block", padding: "0 5px" }}>
            {" <Input error />"}
          </code>
          <Input error />
        </div>
        <div className="col-3">
          <code className="mb-1" style={{ display: "block", padding: "0 5px" }}>
            {"&:hover"}
          </code>
          <Input error hovered />
        </div>
        <div className="col-3">
          <code className="mb-1" style={{ display: "block", padding: "0 5px" }}>
            {"&:focus"}
          </code>
          <Input error focus />
        </div>
      </div>
        {/*thrid row*/}
      <div className="row mb-3">
        <div className="col-3">
          <code className="mb-1" style={{ display: "block", padding: "0 5px" }}>
            {" <Input disabled />"}
          </code>
          <Input  isDisabled />
        </div>
      </div>
       {/*fourht row*/}
      <div className="row mb-3">
        <div className="col-5">
          <code className="mb-1" style={{ display: "block", padding: "0 5px" }}>
            {" <Input helperText=”Some interesting text” />"}
          </code>
          <Input helperText="Some interesting text"  />
        </div>
        <div className="col-5">
          <code className="mb-1" style={{ display: "block", padding: "0 5px" }}>
            {" <Input helperText=”Some interesting text” error />"}
          </code>
          <Input helperText="Some interesting text" error  />
        </div>
       
      </div>
       {/*fifth row*/}
      <div className="row mb-3">
        <div className="col-5">
          <code className="mb-1" style={{ display: "block", padding: "0 5px" }}>
            {" <Input startIcon='phone' />"}
          </code>
          <Input  startIcon="phone" />
        </div>
        <div className="col-5">
          <code className="mb-1" style={{ display: "block", padding: "0 5px" }}>
            {" <Input endIcon='lock' />"}
          </code>
          <Input  endIcon='lock' />
        </div>
       
      </div>
      {/* six row */}
      <div className="row mb-3">
        <div className="col-3">
          <code className="mb-1" style={{ display: "block", padding: "0 5px" }}>
            {" <Input value=”text” />"}
          </code>
          <Input  value="Text" />
        </div>
      </div>
      {/** seven row */}
      <div className="row mb-3">
        <div className="col-4">
          <code className="mb-1" style={{ display: "block", padding: "0 5px" }}>
            {' <Input size="sm" />'}
          </code>
          <Input size="sm" />
        </div>
        <div className="col-4">
          <code className="mb-1" style={{ display: "block", padding: "0 5px" }}>
            {' <Input size="md" />'}
          </code>
          <Input  size="md" />
        </div>
       
      </div>
      <div className="row mb-3">
        <div className="col-12">
          <code className="mb-1" style={{ display: "block", padding: "0 5px" }}>
            {'<Input fullWidth />'}
          </code>
          <Input fullWidth />
        </div>
       
       
      </div>
      <div className="row mb-3">
        <div className="col-12">
          <code className="mb-1" style={{ display: "block", padding: "0 5px" }}>
            {" <Input  multiline row={4} />"}
          </code>
          <Input  multiline row={4} />
        </div>
       
       
      </div>
  </Layout>;
}

export default Inputs;
