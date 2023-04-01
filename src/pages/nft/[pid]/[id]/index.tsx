import React, { useEffect } from "react";
import { useRouter } from "next/router";

const NftAddress = () => {
  const { query } = useRouter();

  useEffect(() => {
    if (Object.keys(query).length) {
      console.log(query);
    }
  }, [query]);

  return <div>address</div>;
};

export default React.memo(NftAddress);
