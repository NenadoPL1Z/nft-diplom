import { AuthType, IUserModel } from "@/lib/models/IUserModel";

export interface IUserReducerState {
  isLoading: boolean;
  isAuth: AuthType;
  userData: IUserModel;
}
