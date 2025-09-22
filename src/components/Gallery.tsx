interface Props {
  photos: string[];
  onSelect: (src: string) => void;
}

export default function Gallery({ photos, onSelect }: Props) {
  return (
    <section id="gallery" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Galeri Kenangan
          </h2>
          <p className="text-gray-600">
            Momen berharga yang telah kita lalui bersama
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-20">
          {photos.map((src, i) => (
            <div
              key={i}
              className="cursor-pointer"
              onClick={() => onSelect(src)}
            >
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <img
                  src={src}
                  alt={`Foto ${i + 1}`}
                  className="w-64 h-64 object-cover hover:scale-105 transition-transform animate-fade-in"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
