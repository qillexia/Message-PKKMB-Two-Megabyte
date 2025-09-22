import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { ref, push, onValue } from "firebase/database";
import { useEffect, useState } from "react";

export interface Message {
  name: string;
  text: string;
  timestamp: number;
}

// Ganti konfigurasi di bawah ini dengan data dari Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyCQ-SjleQpN1xakcR6AWkVVNglSTxZ9JiA",
  authDomain: "message-pkkmb-twomegabyte.firebaseapp.com",
  databaseURL: "https://message-pkkmb-twomegabyte-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "message-pkkmb-twomegabyte",
  storageBucket: "message-pkkmb-twomegabyte.appspot.com",
  messagingSenderId: "177423676239",
  appId: "1:177423676239:web:4b0d871208c4a298ae0b3a",
  measurementId: "G-0CCYK0WN20"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

// Fungsi submit pesan
export const submitMessage = async (msg: Message) => {
  await push(ref(db, "messages"), msg);
};

// Ambil pesan real-time
export const useMessages = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const messagesRef = ref(db, "messages");
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      const pesanArray = data ? Object.values(data) : [];
      setMessages(pesanArray as Message[]);
    });
  }, []);

  return messages;
};
