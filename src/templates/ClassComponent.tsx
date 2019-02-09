import React, { Component } from "react";

export interface ICassComponentProps {
  someProp: boolean;
}

export interface IClassComponentState {
  someState: boolean;
}

class ClassComponent extends Component<
  ICassComponentProps,
  IClassComponentState
> {
  public render() {
    return <div>Render Me Please</div>;
  }
}

export default ClassComponent;
