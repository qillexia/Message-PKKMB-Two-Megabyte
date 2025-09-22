import { useState } from "react";

interface Props {
  onAdd: (name: string, text: string) => void;
}

export default function MessageForm({ onAdd }: Props) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    onAdd(name, text);
    setName("");
    setText("");
  };

  return (
    <section id="form" className="py-20 px-6 bg-gray-50">
      <div className="max-w-2xl mx-auto animate-fade-up">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Tulis Pesanmu
          </h2>
          <p className="text-gray-600">Bagikan kesan dan pesan yang bermakna</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Masukkan nama lengkap"
                  className="w-full p-4 bg-gray-50 border-0 rounded-xl focus:ring-2 focus:ring-gray-200"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Pesan & Kesan
                </label>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Tulis pesan dan kesan..."
                  className="w-full p-4 bg-gray-50 border-0 rounded-xl focus:ring-2 focus:ring-gray-200 resize-none"
                  rows={4}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 md:px-8 md:py-4y rounded-xl font-semibold shadow-lg"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
