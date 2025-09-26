import { useState, useEffect, useRef } from "react";

interface Message {
  name: string;
  text: string;
  timestamp: number;
}

interface Props {
  messages: Message[];
}

export default function Messages({ messages }: Props) {
  const [showAll, setShowAll] = useState(false);
  const [newMessageIndex, setNewMessageIndex] = useState<number | null>(null);
  const prevLength = useRef(messages.length);

  // Animasi untuk pesan baru
  useEffect(() => {
    if (messages.length > prevLength.current) {
      setNewMessageIndex(messages.length - 1);
      setTimeout(() => setNewMessageIndex(null), 1000);
    }
    prevLength.current = messages.length;
  }, [messages]);

  const displayedMessages = showAll ? messages : messages.slice(0, 5);
  const hasMore = messages.length > 5;

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pesan Masuk</h2>
          <p className="text-gray-600">
            {messages.length} pesan dari teman-teman
          </p>
        </div>

        {/* Messages List */}
        {messages.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <p className="text-gray-500">
              Belum ada pesan. Jadilah yang pertama! ✨
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {displayedMessages.map((msg, i) => (
              <div
                key={`${msg.timestamp}-${i}`}
                className={`
                  group bg-white rounded-xl p-6 border border-gray-100 shadow-sm
                  transition-all duration-300 hover:shadow-md hover:border-gray-200
                  ${
                    newMessageIndex === i
                      ? "animate-fade-up bg-blue-50 border-blue-200"
                      : ""
                  }
                  ${showAll && i >= 5 ? "animate-fade-in-up" : ""}
                `}
                style={{
                  animationDelay:
                    showAll && i >= 5 ? `${(i - 5) * 80}ms` : "0ms",
                }}
              >
                <div className="flex gap-4">
                  {/* Avatar - Hitam Putih */}
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <span className="text-white text-sm font-semibold">
                      {msg.name.charAt(0).toUpperCase()}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">
                        {msg.name}
                      </h4>
                      <span className="text-xs text-gray-500 ml-2 flex-shrink-0">
                        {new Date(msg.timestamp).toLocaleDateString("id-ID", {
                          weekday: "short",
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{msg.text}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Show More Button */}
            {hasMore && !showAll && (
              <div className="text-center pt-6">
                <button
                  onClick={() => setShowAll(true)}
                  className="
                    group inline-flex items-center gap-2 px-8 py-4 
                    bg-gray-900 text-white rounded-xl font-semibold
                    hover:bg-gray-800 
                    transition-all duration-200 hover:shadow-lg hover:scale-105
                  "
                >
                  Lihat {messages.length - 5} pesan lainnya
                  <svg
                    className="w-4 h-4 group-hover:translate-y-0.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
            )}

            {/* Show Less Button */}
            {showAll && hasMore && (
              <div className="text-center pt-6">
                <button
                  onClick={() => setShowAll(false)}
                  className="
                    group inline-flex items-center gap-2 px-8 py-4 
                    bg-gray-500 text-white rounded-xl font-semibold
                    hover:bg-gray-600 
                    transition-all duration-200 hover:shadow-lg hover:scale-105
                  "
                >
                  <svg
                    className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                  Sembunyikan
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
