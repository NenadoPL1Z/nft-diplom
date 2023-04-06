import React from "react";
import MoralisInit from "../init/MoralisInit";
import FirebaseInit from "../init/FirebaseInit";
import FirestoreInit from "../init/FirestoreInit";

const InitLayout = () => {
  return (
    <>
      <FirebaseInit />
      <FirestoreInit />
      <MoralisInit />
    </>
  );
};

export default InitLayout;
