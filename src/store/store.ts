import { configureStore } from "@reduxjs/toolkit";
import { axiosProject } from "@/lib/http";
import { rootReducer } from "@/store/reducers/rootReducer";

const extraArgument = axiosProject;

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument,
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface IStore {
  dispatch: AppDispatch;
  state: RootState;
  extra: typeof extraArgument;
}
