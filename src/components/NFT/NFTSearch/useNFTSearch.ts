import { FormEvent, useState } from "react";
import { IPopularResultModel } from "@/lib/models/IPopularResultModel";

export const useNFTSearch = () => {
  const [search, setSearch] = useState<string>("");
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(search);
  };

  const onClick = ({ title, address }: IPopularResultModel) => {
    return () => {
      console.log(title, address);
    };
  };

  return {
    search,
    onClick,
    setSearch,
    onSubmit,
  };
};
