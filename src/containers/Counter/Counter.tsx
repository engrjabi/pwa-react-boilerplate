import { getCurrentPopulation, sampleSliceActions } from "@ducks/sampleSlice";
import React, { ReducerState } from "react";
import { connect } from "react-redux";
import "./style.css";

export interface IConnectedState {
  currentPopulation: number;
}

export interface IConnectedActions {
  downPopulation: () => void;
  upPopulation: () => void;
}

const Counter: React.FC<IConnectedState & IConnectedActions> = ({
  currentPopulation,
  downPopulation,
  upPopulation
}) => {
  const upAction = () => upPopulation();
  const downAction = () => downPopulation();

  return (
    <div className="counter">
      <div>
        This Component demo's the integrated react redux on this boiler plate
      </div>
      <div>See: src/containers/Counter/Counter.tsx</div>
      <div>Current Population: {currentPopulation}</div>
      <button className="counter__button--up" onClick={upAction}>
        Up
      </button>
      <button className="counter__button--down" onClick={downAction}>
        Down
      </button>
    </div>
  );
};

const mapStateToProps = (state: ReducerState<any>) => ({
  currentPopulation: getCurrentPopulation(state)
});

const mapDispatchToProps = {
  downPopulation: sampleSliceActions.downPopulation,
  upPopulation: sampleSliceActions.upPopulation
};

export default connect<IConnectedState, IConnectedActions>(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
