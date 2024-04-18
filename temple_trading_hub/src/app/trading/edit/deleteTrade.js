import { db } from '@firebase';
import { arrayRemove, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { deleteObject, getStorage } from "firebase/storage";


export const deleteTrade = async (userid, listingid) => {
    // delete listing
    const deleteListing = await deleteDoc(doc(db, "listing", listingid));

    // delete listing from users listing arrays
    const userDocUpdate = await updateDoc(doc(db, "users", userid), {
        listings: arrayRemove(listingid)
    });

    // delete images from firestore
    const storage = getStorage();
    const folderRef = ref(storage, `listingImages/${listingid}`);
    deleteObject(folderRef).then(() => {
        console.log("deletion successful");
    }).catch((error) => {
        console.log("error deleting ")
    });
}