import React from "react";
import Button from "../Button/Button";

function App() {
  return (
    <>
      <div>
        <h2
          style={{
            textAlign: "center",
            color: "hsla(198, 18%, 33%, 0.8)",
            marginBottom: "3rem",
          }}
        >
          Button Preview
        </h2>
        <div className="btn-wrapper">
          <div className="row">
            <Button>Default</Button>
            <Button variant="outline">Default</Button>
            <Button variant="text">Default</Button>
          </div>
          <div className="row">
            <Button disableShadow={true}>Default</Button>
            <Button disabled={true}>Default</Button>
          </div>
          <div className="row">
            <Button startIcon="search">Default</Button>
            <Button endIcon="local_grocery_store">Default</Button>
          </div>
          <div className="row">
            <Button variant="outline" size="sm" color="danger">
              Default
            </Button>
            <Button variant="text" size="md" color={"secondary"}>
              Default
            </Button>
            <Button size="lg">Default</Button>
          </div>
          <div className="row">
            <Button color="default">Default</Button>
            <Button color="primary">Default</Button>
            <Button color="secondary">Default</Button>
            <Button color="danger">Default</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
