import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  arrayUnion,
  arrayRemove,
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

async function addRegularReserve(names: any, week: string, time: string) {
  var data: any = {};
  data[time] = { names: arrayUnion(names) };

  await setDoc(doc(db, "recent-reserve", week), data, { merge: true });
}

async function addFreeReserve(names: any, week: string, time: string) {
  var data: any = {};
  if (names.court === "A") {
    data[time] = { A: { names: arrayUnion(names) } };
  } else {
    data[time] = { B: { names: arrayUnion(names) } };
  }

  await setDoc(doc(db, "recent-reserve", week), data, { merge: true });
}

async function removeRegularReserve(names: any) {
  var data: any = {};
  data[names.time] = { names: arrayRemove(names) };

  await setDoc(doc(db, "recent-reserve", names.week), data, { merge: true });
}

async function removeFreeReserve(names: any) {
  var data: any = {};
  if (names.court === "A") {
    data[names.time] = { A: { names: arrayRemove(names) } };
  } else {
    data[names.time] = { B: { names: arrayRemove(names) } };
  }

  await setDoc(doc(db, "recent-reserve", names.week), data, { merge: true });
}

export {
  getTueData,
  getWedData,
  getThuData,
  addRegularReserve,
  addFreeReserve,
  removeRegularReserve,
  removeFreeReserve,
};
