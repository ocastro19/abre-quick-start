const DoctorsSection = () => {
  const doctors = [
    {
      name: "Dr. Michael Chen",
      title: "Urologist, MD",
      hospital: "Johns Hopkins",
      image: "👨‍⚕️",
      years: "15+ years",
      quote: "Natural approach that actually works"
    },
    {
      name: "Dr. Sarah Wilson", 
      title: "Endocrinologist, MD",
      hospital: "Mayo Clinic",
      image: "👩‍⚕️",
      years: "12+ years", 
      quote: "Scientifically proven results"
    },
    {
      name: "Dr. James Rodriguez",
      title: "Internal Medicine, MD", 
      hospital: "Cleveland Clinic",
      image: "👨‍⚕️",
      years: "18+ years",
      quote: "Safe and effective solution"
    }
  ];

  return (
    <section className="w-full max-w-4xl mx-auto px-4 mt-12 mb-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2">
          Clinically Reviewed, Doctor Approved
        </h2>
        <p className="text-blue-600 font-medium">
          Endorsed by medical professionals nationwide
        </p>
      </div>

      {/* Fan Layout for Doctor Cards */}
      <div className="relative h-80 flex items-end justify-center">
        {doctors.map((doctor, index) => {
          const rotations = ['-15deg', '0deg', '15deg'];
          const translations = ['-60px', '0px', '60px'];
          const zIndexes = [10, 20, 10];
          
          return (
            <div
              key={index}
              className="absolute bg-white rounded-xl shadow-lg border border-blue-100 p-4 w-64 hover:scale-105 transition-all duration-300 hover:z-30"
              style={{
                transform: `rotate(${rotations[index]}) translateX(${translations[index]})`,
                transformOrigin: 'bottom center',
                zIndex: zIndexes[index]
              }}
            >
              {/* Doctor Image */}
              <div className="text-center mb-3">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-2">
                  {doctor.image}
                </div>
                <h3 className="font-bold text-blue-900 text-sm">{doctor.name}</h3>
                <p className="text-blue-600 text-xs">{doctor.title}</p>
                <p className="text-gray-500 text-xs">{doctor.hospital}</p>
              </div>
              
              {/* Quote */}
              <div className="bg-blue-50 rounded-lg p-3 text-center">
                <p className="text-blue-800 text-xs font-medium italic">
                  "{doctor.quote}"
                </p>
                <div className="flex items-center justify-center mt-2 text-xs text-blue-600">
                  <span>⭐⭐⭐⭐⭐</span>
                  <span className="ml-2">{doctor.years}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DoctorsSection;