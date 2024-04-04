import { db } from '@firebase';
import { getDocs, collection } from 'firebase/firestore';

export async function POST(request) {
  const reqBody = await request.json();
  const email = reqBody.email;
  
  if(email.slice(-11) !== "@temple.edu"){
    return new Response("not @temple.edu", {
      status: 500
    });
  }

  const queryDoc = await getDocs(collection(db, "users"));
  queryDoc.forEach((doc) => {
    if(doc.email === email){
      return new Response("email already exists", {
        status: 500
      });
    }
  });


  return new Response("email good :)",{
    status: 200
  });

}
