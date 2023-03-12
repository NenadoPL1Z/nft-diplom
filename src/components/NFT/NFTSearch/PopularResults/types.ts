import { IPopularResultModel } from "@/lib/models/IPopularResultModel";

export interface IPopularResultsProps {
  onClick: (data: IPopularResultModel) => () => void;
}
