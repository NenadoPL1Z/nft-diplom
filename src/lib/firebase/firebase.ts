import admin from "firebase-admin";
import key from "./nft-diplom-firebase-adminsdk-24crq-e9e3c7bba0.json";

try {
  admin.initializeApp({
    credential: admin.credential.cert(key as any),
  });
} catch (error) {
  console.log(error);
}

export default admin;
