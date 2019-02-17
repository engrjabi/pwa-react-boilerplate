import { connectRouter } from "connected-react-router";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { configureStore } from "redux-starter-kit";
import { sampleSliceReducer } from "./sampleSlice";

export const history = createBrowserHistory();

const rootReducer: any = {
  router: connectRouter(history),
  sampleSlice: sampleSliceReducer
};

const middleware: any[] = [routerMiddleware(history)];

const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  middleware,
  reducer: rootReducer
});

export default store;
