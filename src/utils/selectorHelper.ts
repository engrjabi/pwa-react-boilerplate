import { Reducer } from "react";

export interface ISliceObject {
  slice: string;
  reducer: Reducer<any, any>;
  actions: any;
  selectors: any;
}

export const getSpecificStateKeyFactory: (
  sliceObject: ISliceObject
) => (state: object, keyName: string) => any = sliceObject => {
  const sliceName = sliceObject.slice;
  return (state, keyName) =>
    sliceObject.selectors[
      `get${sliceName.charAt(0).toUpperCase()}${sliceName.slice(1)}`
    ](state)[keyName];
};
