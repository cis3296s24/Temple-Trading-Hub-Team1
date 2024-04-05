import { db, auth } from '@firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

export async function POST(request) {
  const reqBody = await request.json();
  const email = reqBody.email;
  const password = reqBody.password;

  if (email.slice(-11) !== '@temple.edu') {
    return new Response('not @temple.edu', {
      status: 500,
    });
  }

  const docRef = doc(db, 'users', `${email}`);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return new Response('email already exists', {
      status: 500,
    });
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      setDoc(doc(db, 'users', `${email}`), {
        email: email,
        userId: user.uid,
      }).catch((error) => {});
    })
    .catch((error) => {
      return new Response('Cannot create user', {
        status: 500,
      });
    });

  return new Response('email good :)', {
    status: 200,
  });
}
