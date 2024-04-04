import { db, auth } from '@firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

export async function POST(request) {
  const reqBody = await request.json();
  const email = reqBody.email;

  
}
