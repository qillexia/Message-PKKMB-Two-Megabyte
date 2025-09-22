import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MessageForm from "./components/MessageForm";
import Messages from "./components/Messages";
import Gallery from "./components/Gallery";
import Modal from "./components/Modal";
import Footer from "./components/Footer";

interface Message {
  name: string;
  text: string;
  timestamp: number;
}

export default function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const handleAddMessage = (name: string, text: string) => {
    setMessages([{ name, text, timestamp: Date.now() }, ...messages]);
  };

  const photos = ["/img/Photo1.jpg", "/img/Photo2.jpg"];

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <MessageForm onAdd={handleAddMessage} />
      <Messages messages={messages} />
      <Gallery photos={photos} onSelect={setSelectedPhoto} />
      {selectedPhoto && (
        <Modal src={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
      )}
      <Footer />
    </div>
  );
}
