import React from "react";
import FirebaseInit from "../init/FirebaseInit";
import MoralisInit from "../init/MoralisInit";

const InitLayout = () => {
  return (
    <>
      <FirebaseInit />
      <MoralisInit />
    </>
  );
};

export default InitLayout;
