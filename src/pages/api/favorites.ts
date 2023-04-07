import { NextApiRequest, NextApiResponse } from "next";
import admin from "@/lib/firebase/firebase";
import { IFavoritesItemModel } from "@/lib/models/IFavoritesItemModel";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    // connect db
    const db = admin.firestore();

    // { [key: string]: IFavoritesItemModel[] }[]
    const favoritesData: { [key: string]: any }[] = [];

    // get user info in db
    const userRef = db
      .collection("favorites")
      .doc("ak8TUHj7L5WlozKWFwV36XAYlNJ2");

    // get user collection
    const userCollections = await userRef
      .listCollections()
      .then((collections) => collections);

    if (!userCollections.length) {
      res.status(404).json({ error: "Empty" });
      return;
    }

    for (const collection of userCollections) {
      const collectionItem = await collection.get();
      const collectionDataArr = collectionItem.docs.map((doc) =>
        doc.data(),
      ) as IFavoritesItemModel[];

      favoritesData.push({ [collection.id]: collectionDataArr });
    }

    res.status(200).json({ favorites: favoritesData });
  } catch (e) {
    res.status(400).json({ error: "Error" });
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
