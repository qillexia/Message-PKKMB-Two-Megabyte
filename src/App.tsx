import { useState } from "react";
import { submitMessage, useMessages, type Message } from "./firebase"; // ✅ Import fungsi Firebase
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MessageForm from "./components/MessageForm";
import Messages from "./components/Messages";
import Gallery from "./components/Gallery";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import TeamMembers from "./components/TeamMembers";

export default function App() {
  const messages = useMessages(); // ✅ Ambil pesan dari Firebase real-time
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const handleAddMessage = async (name: string, text: string) => {
    // ✅ Submit ke Firebase, bukan ke state lokal
    await submitMessage({
      name,
      text,
      timestamp: Date.now(),
    });
  };

  const photos = [
    "/img/Photo5.jpg",
    "/img/Photo2.jpg",
    "/img/Photo3.jpg",
    "/img/Photo4.jpg",
    "/img/Photo1.jpg",
    "/img/Photo6.jpg",
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <MessageForm onAdd={handleAddMessage} />
      <Messages messages={messages} />
      <TeamMembers />
      <Gallery photos={photos} onSelect={setSelectedPhoto} />
      {selectedPhoto && (
        <Modal src={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
      )}
      <Footer />
    </div>
  );
}
