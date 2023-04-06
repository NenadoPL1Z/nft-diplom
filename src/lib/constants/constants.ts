import { EvmChainUnion } from "@/store/reducers/nftSlice/types";

export const BASE_URL = "";
export const TIMEOUT = 5000;
export const NFT_API_KEY = process.env.NEXT_PUBLIC_NFT_API_KEY;
export const FIREBASE_API_KEY = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
export const FIREBASE_AUTH_DOMAIN =
  process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN;
export const FIREBASE_PROJECT_ID = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
export const FIREBASE_STORAGE_BUCKET =
  process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET;
export const FIREBASE_SENDER_ID =
  process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID;
export const FIREBASE_APP_ID = process.env.NEXT_PUBLIC_FIREBASE_APP_ID;

export const PAGE_LIMIT = 100;

export const DEFAULT_ADDRESS = "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D";

export const DEFAULT_CHAIN: EvmChainUnion = "ETHEREUM";

export const NFT_FAVORITES_MOCK_COLLECTION = "QWE";

export const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_SENDER_ID,
  appId: FIREBASE_APP_ID,
};
