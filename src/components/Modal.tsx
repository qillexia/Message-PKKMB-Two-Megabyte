interface Props {
  src: string;
  onClose: () => void;
}

export default function Modal({ src, onClose }: Props) {
  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-6"
      onClick={onClose}
    >
      <div className="relative max-w-4xl w-full">
        <button
          className="absolute -top-4 -right-4 bg-white text-gray-900 w-10 h-10 rounded-full flex items-center justify-center font-medium hover:bg-gray-100 shadow-lg"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          ✕
        </button>
        <img
          src={src}
          alt="Preview"
          className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl animate-fade-in"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
}
