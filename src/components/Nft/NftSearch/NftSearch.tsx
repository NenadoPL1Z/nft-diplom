import React, { FormEvent, useState } from "react";
import { Button, styled } from "@mui/material";
import TFSearchUI from "@/UI/TextFieldUI/TextFields/TFSearchUI/TFSearchUI";
import SearchPopularResults from "@/components/Nft/NftSearch/SearchPopularResults/SearchPopularResults";

const NftSearch = () => {
  const [search, setSearch] = useState<string>("");
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(search);
  };

  return (
    <section>
      <SearchContainerSC onSubmit={onSubmit}>
        <TFSearchUI
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onClickRightIcon={() => setSearch("")}
        />
        {search && <CustomButton>ПОИСК</CustomButton>}
      </SearchContainerSC>
      <SearchPopularResults />
    </section>
  );
};

const SearchContainerSC = styled("form")`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
`;

const CustomButton = styled(Button)`
  margin-left: 15px;
`;

export default React.memo(NftSearch);
