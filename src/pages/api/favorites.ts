import { NextApiRequest, NextApiResponse } from "next";
import admin from "@/lib/firebase/firebase";
import {
  FavoritesItemObjectType,
  IFavoritesItemModel,
} from "@/lib/models/IFavoritesItemModel";
import { ErrorFavoritesUnion } from "@/types/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const userUid = req.headers.authorization as string;
    // connect db
    const db = admin.firestore();

    // success api data
    const favoritesData: FavoritesItemObjectType = [];

    // get user info in db
    const userRef = db.collection("favorites").doc(userUid);

    // get user collection
    const userCollections = await userRef
      .listCollections()
      .then((collections) => collections);

    // check empty
    if (!userCollections.length) {
      res.status(404).json({ error: "empty" as ErrorFavoritesUnion });
      return;
    }

    for (const collection of userCollections) {
      // collection item
      const collectionItem = await collection.get();

      // collection arr
      const collectionDataArr = collectionItem.docs.map((doc) =>
        doc.data(),
      ) as IFavoritesItemModel[];

      favoritesData.push({ [collection.id]: collectionDataArr });
    }

    res.status(200).json({ favorites: favoritesData });
  } catch (e) {
    res.status(400).json({ error: "error" as ErrorFavoritesUnion });
  }
}

// userRef.listCollections().then((collections) => {
//   // map collection
//   collections.forEach((collection) => {
//     // get doc item in collection
//     collection.get().then((collectionItem) => {
//       // map doc items to normal data
//       const docItemsArr = collectionItem.docs.map((doc) =>
//         doc.data(),
//       ) as IFavoritesItemModel[];
//
//       data.push({
//         [collection.id]: docItemsArr,
//       });
//     });
//   });
//   console.log(data);
// });
