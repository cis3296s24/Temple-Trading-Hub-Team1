import { db } from '@firebase';
import { getDocs, collection } from 'firebase/firestore';

export async function POST(request) {
  const reqBody = await request.json();
  const email = reqBody.email;

}
