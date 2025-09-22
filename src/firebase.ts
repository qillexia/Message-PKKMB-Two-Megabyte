import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  push,
  onValue,
  query,
  orderByChild,
} from "firebase/database";
import { useEffect, useState } from "react";

// Interface pesan
export interface Message {
  id?: string;
  name: string;
  text: string;
  timestamp: number;
}

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCQ-SjleQpN1xakcR6AWkVVNglSTxZ9JiA",
  authDomain: "message-pkkmb-twomegabyte.firebaseapp.com",
  databaseURL: "https://message-pkkmb-twomegabyte-default-rtdb.firebaseio.com",
  projectId: "message-pkkmb-twomegabyte",
  storageBucket: "message-pkkmb-twomegabyte.appspot.com",
  messagingSenderId: "177423676239",
  appId: "1:177423676239:web:4b0d871208c4a298ae0b3a",
  measurementId: "G-0CCYK0WN20",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

// 🔹 Submit pesan ke Firebase
export const submitMessage = async (msg: Omit<Message, "id">) => {
  await push(ref(db, "messages"), msg);
};

// 🔹 Ambil pesan real-time (dengan ID + urut timestamp)
export const useMessages = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const messagesRef = query(ref(db, "messages"), orderByChild("timestamp"));
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      const pesanArray = data
        ? Object.entries(data).map(([id, value]) => ({
            id,
            ...(value as Omit<Message, "id">),
          }))
        : [];
      setMessages(pesanArray);
    });
  }, []);

  return messages;
};
