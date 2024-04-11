import { db } from '@firebase';
import { addDoc, doc, updateDoc, collection } from 'firebase/firestore';

import { getStorage, ref, uploadBytes } from 'firebase/storage';

export const uploadThread = async (user, description, image) => {
  const docRef = await addDoc(collection(db, 'threads'), {
    userID: user.uid,
    userEmail: user.email,
    description: description,
    images: image ? image.name : '',
  }).catch((error) => {
    console.log('adding thread error');
    return new Response('adding thread error', {
      status: 500,
    });
  });

  const storage = getStorage();
  const imageLocation = `threadImages/${docRef.id}/${image.name}`;
  const storageRef = ref(storage, imageLocation);
  uploadBytes(storageRef, image);

  await updateDoc(doc(db, 'users', user.email), {
    threads: { [docRef.id]: `${docRef.id}` },
  }).catch((error) => {
    console.log('Update User Error');
    return new Response('update user error', {
      status: 500,
    });
  });

  return new Response('Thread Posted :)', {
    status: 200,
  });
};
