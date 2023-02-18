import { configureStore } from "@reduxjs/toolkit";
import { axiosProject } from "@/lib/http";

export const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: axiosProject,
      },
    }),
});
