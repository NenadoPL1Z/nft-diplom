import { IUserModel } from "@/lib/models/IUserModel";
import { User } from "@firebase/auth";

export interface IUserReducerState {
  isLoading: boolean;
  isAuth: boolean;
  userData: User | null;
}
