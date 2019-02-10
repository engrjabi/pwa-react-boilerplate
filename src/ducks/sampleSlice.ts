import {
  getSpecificStateKeyFactory,
  ISliceObject
} from "@utils/selectorHelper";
import { ReducerState } from "react";
import { createSlice } from "redux-starter-kit";

// SLICE = ACTIONS + REDUCER + SELECTORS

// INTERFACES
interface IInitState {
  currentPopulation: number;
}

interface IActions {
  type: string;
  payload?: any;
}

// INITIAL STATE
const initState = {
  currentPopulation: 0
};

// REDUCERS
const reducersMap = {
  downPopulation: (state: IInitState, action: IActions) => {
    return {
      ...state,
      currentPopulation: state.currentPopulation - (action.payload || 1)
    };
  },
  upPopulation: (state: IInitState, action: IActions) => ({
    ...state,
    currentPopulation: state.currentPopulation + (action.payload || 1)
  })
};

// SLICE INTEGRATION
const sampleSlice: ISliceObject = createSlice({
  initialState: initState,
  reducers: reducersMap,
  slice: "sampleSlice"
});

export const {
  reducer: sampleSliceReducer,
  actions: sampleSliceActions
} = sampleSlice;

// SPECIFIC SELECTORS
const getSpecificStateSampleSlice = getSpecificStateKeyFactory(sampleSlice);

export const getCurrentPopulation: (state: ReducerState<any>) => any = state =>
  getSpecificStateSampleSlice(state, "currentPopulation");
