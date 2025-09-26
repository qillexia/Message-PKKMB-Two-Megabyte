export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-6 animate-fade-up">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block bg-gray-50 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-5">
          Kelompok 2 – Two Megabyte
        </div>

        <div className="inline-block bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-medium mb-5 ml-2">
          Mentor: Haqil Abdillah
        </div>

        <h1 className="mt-10 text-4xl sm:text-5xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Pesan & Kesan <br />
          <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            Mahasiswa Baru
          </span>
        </h1>

        <p className="md:text-xl text-l text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Berbagi cerita dan kenangan indah dari perjalanan kita sebagai
          mahasiswa baru
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#form"
            className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-medium transition-all shadow-lg hover:shadow-xl"
          >
            Tulis Pesan
          </a>
          <a
            href="#gallery"
            className="bg-gray-50 hover:bg-gray-100 text-gray-900 px-6 py-3 md:px-8 md:py-4 rounded-xl font-medium border border-gray-200"
          >
            Lihat Galeri
          </a>
        </div>
      </div>
    </section>
  );
}
