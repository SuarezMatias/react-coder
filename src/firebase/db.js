import { getDocs, collection, getFirestore, query, where } from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);

export const getItems = async() => {
    debugger
    const querySnapshot = await getDocs(collection(db, "items"));
    const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return items;
};

export const getItemById = async(id) => {
    const docRef = collection(db, "items").doc(id);
    const docSnap = await getDocs(docRef);
    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
    } else {
        throw new Error("Item not found");
    }
}; 

export const getItemsByCategory = async(category) => {
    const q = query(collection(db, "items"), where("category", "==", category));
    const querySnapshot = await getDocs(q);
    const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return items;
};

export const getCategories = async() => {
    const querySnapshot = await getDocs(collection(db, "categories"));
    const categories = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return categories;
};


