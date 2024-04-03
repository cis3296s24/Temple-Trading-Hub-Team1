import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import { APIResponse } from "@/types";
import firebase from "@firebase";

export async function POST(request: NextRequest) {
  const reqBody = (await request.json()) as { email: string, password: string };
  const email = reqBody.email;
  const password = reqBody.password;

  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
  return NextResponse.json<APIResponse<string>>({ success: true, data: "Signed up successfully." });
}