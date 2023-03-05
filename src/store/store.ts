import { configureStore } from "@reduxjs/toolkit";
import { axiosProject } from "@/lib/http";
import { rootReducer } from "@/store/reducers/rootReducer";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: axiosProject,
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
