# Temple Trading Hub

Trading application for the Temple Community, by the Temple Community. Find, and trade a variety of items and post about events on campus! We provide a safe and secure experince for Temple Students so you dont have to worry about bad actors.

![image](https://github.com/cis3296s24/Temple-Trading-Hub-Team1/assets/91856253/506aac1e-54db-45f2-af37-0b60e31a19af)


# App Overview

An app for Temple University students and staff to safely trade items and post about events

## Sign Up

Sign up to use the Temple Trading Hub App by using a temple.edu email!

## Trade With Users

Find something you like? Trading is easy!
Click on the Contact User button to email the trader to set up a meeting to exchange items

Sort Items based on many different categories
<img width="1680" alt="Screenshot 2024-04-18 at 6 39 48 PM" src="https://github.com/cis3296s24/Temple-Trading-Hub-Team1/assets/91856253/a637bcab-e307-4ada-ae44-97c2ebe918d4">

# How To Run
## dependencies

-firebase configuration https://console.firebase.google.com
```// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'YOUR API KEY HERE',
  authDomain: 'YOUR AUTH DOMAIN HERE',
  projectId: 'YOUR PROJECT ID HERE',
  storageBucket: 'YOUR STORAGE BUCKET HERE',
  messagingSenderId: 'MESSAGE SENDER ID',
  appId: 'YOUR APP ID HERE',
  measurementId: 'MEASUREMENT ID HERE',
  databaseURL: 'DATABASE URL HERE',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
```

- Install the latest node from https://nodejs.org/en/download
- To install dependencies, cd to the actual project `cd temple_trading_hub` and run the command `sudo npm i` on Mac or `npm i`on other machines you must allow npm to have permissions or you will get an error

## running

- When installation is finished please run the command `sudo npm run dev`on Mac or `npm run dev`on other machines you must allow npm to have permissions or you will get an error
- When server initializes you can head to your browser and view the project at`localhost:3000/` by default or use the specified url.

**documentataion:**

- https://nodejs.org/en/download

## Want to Contribute?

Follow this repo at https://github.com/cis3296s24/Temple-Trading-Hub-Team1/

