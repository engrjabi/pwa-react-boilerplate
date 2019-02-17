import { getCurrentPopulation } from "@ducks/sampleSlice";
import _forEach from "lodash/forEach";
import _random from "lodash/random";
import _times from "lodash/times";
import React, { Component, ReducerState } from "react";
import { connect } from "react-redux";
import logo from "../../assets/images/logo.svg";
import "./style.css";

export interface IConnectedState {
  currentPopulation: number;
}

class ReactWaterMark extends Component<IConnectedState> {
  public timerId: number = 0;

  public componentDidMount() {
    this.timerId = window.setInterval(() => {
      const reactLogo: any = window.document.getElementsByClassName(
        "water-mark-header__logo"
      );

      _forEach(reactLogo, currentLogo => {
        const randomXPoint = _random(-500, 500, false);
        const randomYPoint = _random(-500, 500, false);
        const randomDegree = _random(0, 360, false);

        currentLogo.style.transform = `translate(${randomXPoint}%, ${randomYPoint}%) rotate(${randomDegree}deg)`;
      });
    }, 2000);
  }

  public componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  public render() {
    const { currentPopulation } = this.props;
    const imageAtom = (key: number) => (
      <img
        src={logo}
        className="water-mark-header__logo"
        alt="logo"
        key={key}
      />
    );

    return (
      <header className="water-mark-header">
        <div className="water-mark-header__logo-wrapper">
          {_times(currentPopulation, imageAtom)}
        </div>
        <p className="water-mark-header__text">
          See src/containers/ReactWaterMark/ReactWaterMark.tsx
        </p>
        <a
          className="water-mark-header__link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    );
  }
}

const mapStateToProps = (state: ReducerState<any>) => ({
  currentPopulation: getCurrentPopulation(state)
});

export default connect<IConnectedState>(mapStateToProps)(ReactWaterMark);
