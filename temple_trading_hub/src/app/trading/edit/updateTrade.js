import {arrayUnion, doc, updateDoc } from "firebase/firestore"
import { db } from '@firebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";



export const updateTrade = async (user, itemname, description, price, category, image, productid) => {

    const docRef = doc(db, "listings" , productid);
    const updatedDoc = await updateDoc(docRef, {
        title: (itemname ? itemname : null),
        description: (description ? description : null),
        price: (price ? price : null),
        category: (category ? category : null),
        images: (image.name ? arrayUnion(image.name): arrayUnion(null)),
    })

    let link = undefined;

    if(image.name){
        const storage = getStorage();
        const imageLocation = `listingImages/${docRef.id}/${image.name}`;
        const storageRef = ref(storage, imageLocation);
        await uploadBytes(storageRef, image);
        link = await getDownloadURL(storageRef);
        await updateDoc(docRef , {
            imageUrl: [link]
        });
    }

}