import {
  getDocs,
  getDoc,
  collection,
  getFirestore,
  query,
  where,
  doc,
  addDoc,
} from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);

export const getItems = async () => {
  const querySnapshot = await getDocs(collection(db, "items"));
  const items = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return items;
};

export const getItemById = async (id) => {
  const docRef = doc(db, "items", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    throw new Error("Item not found");
  }
};

export const getItemsByCategory = async (category) => {
  const q = query(collection(db, "items"), where("category", "==", category));
  const querySnapshot = await getDocs(q);
  const items = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return items;
};

export const getCategories = async () => {
  const querySnapshot = await getDocs(collection(db, "categories"));
  const categories = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return categories;
};

export const createOrder = async (orderDetails) => {
  const ordersCollection = collection(db, "orders");
  const docRef = await addDoc(ordersCollection, orderDetails);
  return docRef.id;
};
