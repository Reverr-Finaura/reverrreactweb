import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {
  doc,
  getDocs,
  updateDoc,
  query,
  where,
  setDoc,
  collection,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore(app);

export const updateUserInDatabse = async (uid, collection, data) => {
  try {
    return await updateDoc(doc(db, `${collection}`, uid), data);
  } catch (err) {
    console.log("Err: ", err);
  }
};

export const updateMentorInDatabse = async (email, collection, data) => {
  try {
    return await updateDoc(doc(db, `${collection}`), email);
  } catch (err) {
    console.log("Err: ", err);
  }
};

// getUser

export const getUserFromDatabase = async (email) => {
  let User;
  await (
    await getDocs(
      query(collection(db, "Users"), where("email", "==", `${email}`))
    )
  ).forEach((doc) => {
    User = { ...doc.data() };
  });
  return User;
};

export const getMentorFromDatabase = async (email) => {
  let Mentor;
  await (
    await getDocs(
      query(collection(db, "Users"), where("email", "==", `${email}`))
    )
  ).forEach((doc) => {
    Mentor = { ...doc.data() };
  });
  return Mentor;
};

export const addPaymentInDatabase = async (uid, data) => {
  try {
    return await setDoc(doc(db, "Payments", uid), {
      ...data,
    });
  } catch (err) {
    console.log("Err: ", err);
  }
};

export { app, auth, db, analytics };
