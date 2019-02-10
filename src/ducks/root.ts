import { configureStore } from "redux-starter-kit";
import { sampleSliceReducer } from "./sampleSlice";

const rootReducer: any = {
  sampleSlice: sampleSliceReducer
};

const middleware: any[] = [];

const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  middleware,
  reducer: rootReducer
});

export default store;
