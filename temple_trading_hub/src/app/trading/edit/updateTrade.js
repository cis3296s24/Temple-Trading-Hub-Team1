import {arrayUnion, doc, updateDoc, getDoc } from "firebase/firestore"
import { db } from '@firebase';
import { getStorage, ref, uploadBytes, getDownloadURL, listAll, deleteObject } from "firebase/storage";



export const updateTrade = async (user, itemname, description, price, category, image, productid) => {

    const docRef = doc(db, "listings" , productid);
    const docData = await getDoc(docRef);
    const updatedDoc = await updateDoc(docRef, {
        title: (itemname ? itemname : docData.data().title),
        description: (description ? description : docData.data().description),
        price: (price ? price : docData.data().price),
        category: (category ? category : docData.data().category),
        images: (image.name ? [`${docRef.id}+${image.name}`]: "no-image"),
    })

    let link = undefined;

    if(image.name){
        const storage = getStorage();
        const imageLocation = `listingImages/${docRef.id}+${image.name}`;

        // delete old image
        const listingFile = ref(storage, `listingImages/${docData.data().images[0]}`);
        await deleteObject(listingFile);

        const storageRef = ref(storage, imageLocation);
        await uploadBytes(storageRef, image);
        link = await getDownloadURL(storageRef);
        await updateDoc(docRef , {
            imageUrl: [link]
        });


    }

}