import { User } from "@firebase/auth";

export interface IUserReducerState {
  isLoading: boolean;
  isAuth: boolean;
  userData: Pick<User, "metadata" | "email"> | null;
}
