const NoFiltersSection = () => {
  const realResults = [
    {
      before: "Struggled for years",
      after: "Back to my prime at 52",
      name: "Tom W.",
      timeframe: "3 months"
    },
    {
      before: "Lost all confidence", 
      after: "Feel like I'm 25 again",
      name: "Mark D.",
      timeframe: "6 weeks"
    },
    {
      before: "Relationship suffering",
      after: "Stronger than ever",
      name: "Steve R.", 
      timeframe: "2 months"
    }
  ];

  return (
    <section className="w-full max-w-4xl mx-auto px-4 mt-16 mb-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2">
          No Filters. Just Real Results.
        </h2>
        <p className="text-blue-600 font-medium">
          Authentic transformations from men just like you
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {realResults.map((result, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
            {/* Before/After */}
            <div className="space-y-4 mb-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <div className="text-red-600 text-xs font-bold mb-1">BEFORE</div>
                <p className="text-red-800 text-sm font-medium">{result.before}</p>
              </div>
              
              <div className="flex justify-center">
                <div className="w-8 h-0.5 bg-gradient-to-r from-red-400 to-green-400"></div>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <div className="text-green-600 text-xs font-bold mb-1">AFTER</div>
                <p className="text-green-800 text-sm font-medium">{result.after}</p>
              </div>
            </div>

            {/* User Info */}
            <div className="text-center border-t border-gray-100 pt-4">
              <p className="font-semibold text-blue-900 text-sm">{result.name}</p>
              <p className="text-blue-600 text-xs">Results in {result.timeframe}</p>
              <div className="mt-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                📸 Real Photo • Real Story
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <p className="text-gray-600 text-sm">
          * Individual results may vary. These are real customer experiences.
        </p>
      </div>
    </section>
  );
};

export default NoFiltersSection;