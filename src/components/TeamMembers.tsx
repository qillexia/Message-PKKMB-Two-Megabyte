export default function TeamMembers() {
  const members = [
    "Abhijjata Dwi Prasetyo",
    "Arvi Sechandika Kurnia",
    "Faaza Fauzan Adzima",
    "Jasmine Rameyza Putri Danita",
    "Muhamad Reyhan",
    "Paril Gusliwa Pratama",
    "Akbar Fauzi",
    "Enggar Bintang Maha Putra",
    "Lea Iqbal Meicca Putra",
    "Nabil Hilmi Mubarak",
    "Agatha Intan Jatiningsih",
    "Khansa Aulia Syahidah",
    "Putri Nadhifa",
    "Alif Fadillah Aziz",
    "Rika Firmawan Hardani",
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Anggota Tim</h2>
          <p className="text-gray-600">Kelompok 2 - Two Megabyte</p>
        </div>

        {/* Names Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {members.map((name, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm 
                         hover:shadow-md transition-shadow duration-200 animate-fade-up"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-semibold">
                    {name.charAt(0)}
                  </span>
                </div>

                {/* Name */}
                <span className="text-gray-900 font-medium">{name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Total Count */}
        <div
          className="text-center mt-8 animate-fade-up"
          style={{ animationDelay: `${members.length * 100}ms` }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium mt-7">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
              />
            </svg>
            {members.length} Anggota
          </span>
        </div>
      </div>
    </section>
  );
}
