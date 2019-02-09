import React from "react";

export interface IFunctionalComponentProps {
  someProp: boolean;
}

const FunctionalComponent: React.FC<IFunctionalComponentProps> = () => {
  return <div>Render Me Please</div>;
};

export default FunctionalComponent;
