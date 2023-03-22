import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDaUJKU6YkdJXqu30tgSLN6TTfltJoVj6U",
  authDomain: "omicron-reserve-system.firebaseapp.com",
  projectId: "omicron-reserve-system",
  storageBucket: "omicron-reserve-system.appspot.com",
  messagingSenderId: "1075794297673",
  appId: "1:1075794297673:web:a545b457a2391a13dd1098",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getTueData() {
  const docRef = doc(db, "recent-reserve", "tue");
  const docSnap = await getDoc(docRef);
  return docSnap.data() as object;
}

async function getWedData() {
  const docRef = doc(db, "recent-reserve", "wed");
  const docSnap = await getDoc(docRef);
  return docSnap.data() as object;
}

async function getThuData() {
  const docRef = doc(db, "recent-reserve", "thu");
  const docSnap = await getDoc(docRef);
  return docSnap.data() as object;
}

export { getTueData, getWedData, getThuData };
