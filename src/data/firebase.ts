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

const collection = "test_reserve";
const collection_setting = "test_setting";

async function getTueData() {
  const docRef = doc(db, collection, "tue");
  const docSnap = await getDoc(docRef);
  return docSnap.data() as object;
}

async function getWedData() {
  const docRef = doc(db, collection, "wed");
  const docSnap = await getDoc(docRef);
  return docSnap.data() as object;
}

async function getThuData() {
  const docRef = doc(db, collection, "thu");
  const docSnap = await getDoc(docRef);
  return docSnap.data() as object;
}

async function addRegularReserve(names: any) {
  var data: any = {};
  data[names.time] = { names: arrayUnion(names) };

  await setDoc(doc(db, collection, names.week), data, { merge: true });
}

async function addFreeReserve(names: any) {
  var data: any = {};
  if (names.court === "A") {
    data[names.time] = { A: { names: arrayUnion(names) } };
  } else {
    data[names.time] = { B: { names: arrayUnion(names) } };
  }

  await setDoc(doc(db, collection, names.week), data, { merge: true });
}

async function logDataFree(names: any) {
  await setDoc(
    doc(db, "log_data", "free_log_data"),
    { data: arrayUnion(names) },
    { merge: true }
  );
}

async function logDataRegular(names: any) {
  await setDoc(
    doc(db, "log_data", "regular_log_data"),
    { data: arrayUnion(names) },
    { merge: true }
  );
}

async function removeRegularReserve(names: any) {
  var data: any = {};
  data[names.time] = { names: arrayRemove(names) };

  await setDoc(doc(db, collection, names.week), data, { merge: true });
}

async function removeFreeReserve(names: any) {
  var data: any = {};
  if (names.court === "A") {
    data[names.time] = { A: { names: arrayRemove(names) } };
  } else {
    data[names.time] = { B: { names: arrayRemove(names) } };
  }

  await setDoc(doc(db, collection, names.week), data, { merge: true });
}

async function resetRegularReserve() {
  await setDoc(
    doc(db, collection, "tue"),
    {
      reg_time1: { names: [] },
      reg_time2: { names: [] },
      reg_time3: { names: [] },
    },
    { merge: true }
  );
  await setDoc(
    doc(db, collection, "thu"),
    {
      reg_time1: { names: [] },
      reg_time2: { names: [] },
      reg_time3: { names: [] },
    },
    { merge: true }
  );
}

async function resetFreeReserve() {
  await setDoc(
    doc(db, collection, "tue"),
    {
      time1: { A: { names: [] }, B: { names: [] } },
    },
    { merge: true }
  );
  await setDoc(
    doc(db, collection, "thu"),
    {
      time1: { A: { names: [] }, B: { names: [] } },
    },
    { merge: true }
  );
  await setDoc(
    doc(db, collection, "wed"),
    {
      time1: { A: { names: [] }, B: { names: [] } },
      time2: {
        A: {
          names: [
            {
              name: "임원진",
              week: "wed",
              time: "time2",
              court: "A",
              pw: "960221",
              timeStamp: 11,
            },
            {
              name: "임원진",
              week: "wed",
              time: "time2",
              court: "A",
              pw: "960221",
              timeStamp: 22,
            },
          ],
        },
        B: {
          names: [],
        },
      },
      time3: { A: { names: [] }, B: { names: [] } },
      time4: { A: { names: [] }, B: { names: [] } },
    },
    { merge: true }
  );
}

async function getTrainingReserveButtonVisible() {
  const data = (await getDoc(doc(db, collection_setting, "data"))).data();
  return data as object;
}

async function setTrainigReserveButtonVisible(reserve_button_visible: boolean) {
  await setDoc(
    doc(db, collection_setting, "data"),
    {
      reserve_button_visible: reserve_button_visible,
    },
    { merge: true }
  );
}

export {
  getTueData,
  getWedData,
  getThuData,
  addRegularReserve,
  addFreeReserve,
  removeRegularReserve,
  removeFreeReserve,
  resetRegularReserve,
  resetFreeReserve,
  logDataFree,
  logDataRegular,
  getTrainingReserveButtonVisible,
  setTrainigReserveButtonVisible,
};
