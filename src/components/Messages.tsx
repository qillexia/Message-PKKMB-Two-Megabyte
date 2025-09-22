import React, { useEffect, useRef, useState } from "react";
import type { Message } from "../firebase";


interface Props {
  messages: Message[];
}

export default function Messages({ messages }: Props) {
  const [animatedIndex, setAnimatedIndex] = useState<number | null>(null);
  const prevMessagesLength = useRef(messages.length);

  useEffect(() => {
    if (messages.length > prevMessagesLength.current) {
      setAnimatedIndex(messages.length - 1);
      setTimeout(() => setAnimatedIndex(null), 1000);
    }
    prevMessagesLength.current = messages.length;
  }, [messages]);

  return (
    <section id="messages" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pesan Masuk</h2>
          <p className="text-gray-600">Kumpulan pesan dari teman-teman</p>
        </div>

        <div className="space-y-4">
          {messages.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">💭</span>
              </div>
              <p className="text-gray-500 text-lg">
                Belum ada pesan, jadilah yang pertama!
              </p>
            </div>
          ) : (
            messages.map((msg, i) => (
              <div
                key={msg.id || i}
                className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100
                  ${animatedIndex === i ? "fade-slide-up" : ""}
                `}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-semibold">
                    {msg.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{msg.name}</h3>
                    <span className="text-xs text-gray-500">
                      {new Date(msg.timestamp).toLocaleTimeString("id-ID", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </div>
                <p className="text-gray-700">{msg.text}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
