import { AuthType, IUserModel } from "@/lib/models/IUserModel";

export interface IUserReducerState {
  isAuth: AuthType;
  userData: IUserModel;
}
