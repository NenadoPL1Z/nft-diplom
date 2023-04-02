import React from "react";
import { INftModel } from "@/lib/models/INftModel";
import { styled } from "@mui/material";
import NFTTopRightItem from "@/components/NFTID/NFTIdTop/NFTTopContent/NFTTopRight/NFTTopRightInfo/NFTTopRightItem/NFTTopRightItem";
import { getRusData } from "@/lib/services/services";

const NFTTopRightInfo = (props: INftModel) => {
  const {
    amount,
    block_number,
    block_number_minted,
    contract_type,
    last_metadata_sync,
    minter_address,
    name,
    owner_of,
    symbol,
    token_address,
    token_hash,
    token_id,
  } = props;

  return (
    <ContainerSC>
      {name && (
        <NFTTopRightItem
          left="Имя коллекции"
          right={name}
        />
      )}
      {symbol && (
        <NFTTopRightItem
          left="Сокращенное имя коллекции"
          right={symbol}
        />
      )}
      {contract_type && (
        <NFTTopRightItem
          left="тип контракта"
          right={contract_type}
        />
      )}
      {amount && (
        <NFTTopRightItem
          left="количество"
          right={amount}
        />
      )}
      {token_id && (
        <NFTTopRightItem
          left="ID ТОКЕНА"
          right={token_id}
        />
      )}
      {token_address && (
        <NFTTopRightItem
          left="Адресс токена"
          right={token_address}
        />
      )}
      {token_hash && (
        <NFTTopRightItem
          left="ХЭШ ТОКЕНА"
          right={token_hash}
        />
      )}
      {owner_of && (
        <NFTTopRightItem
          left="владелец"
          right={owner_of}
        />
      )}
      {last_metadata_sync && (
        <NFTTopRightItem
          left="Последняя дата синхронизации метадаты"
          right={getRusData(last_metadata_sync)}
        />
      )}
      {minter_address && (
        <NFTTopRightItem
          left="minter address"
          right={minter_address}
        />
      )}
      {block_number && (
        <NFTTopRightItem
          left="номер блока"
          right={block_number}
        />
      )}
      {block_number_minted && (
        <NFTTopRightItem
          left="block_number_minted"
          right={block_number_minted}
        />
      )}
    </ContainerSC>
  );
};

const ContainerSC = styled("ul")`
  & > *:last-child {
    margin-bottom: 0;
  }
`;

export default React.memo(NFTTopRightInfo);
