export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-sm border border-gray-100">
        <div className="flex items-center space-x-8 text-sm font-medium">
          <a
            href="#home"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Home
          </a>
          <a
            href="#form"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Write
          </a>
          <a
            href="#messages"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Messages
          </a>
          <a
            href="#gallery"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Gallery
          </a>
        </div>
      </div>
    </nav>
  );
}
