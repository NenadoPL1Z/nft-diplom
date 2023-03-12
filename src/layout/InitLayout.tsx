import React from "react";
import UserInit from "../init/UserInit";
import FirebaseInit from "../init/FirebaseInit";

const InitLayout = () => {
  return (
    <>
      <FirebaseInit />
      <UserInit />
    </>
  );
};

export default InitLayout;
