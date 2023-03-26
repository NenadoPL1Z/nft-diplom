import { User } from "@firebase/auth";
import { IUserModel } from "@/lib/models/IUserModel";

export interface IUserReducerState {
  isLoading: boolean;
  isAuth: boolean;
  userData: IUserModel | null;
}
