const NoFiltersSection = () => {
  const realResults = [{
    before: "Struggled for years",
    after: "Back to my prime at 52",
    name: "Tom W.",
    timeframe: "3 months"
  }, {
    before: "Lost all confidence",
    after: "Feel like I'm 25 again",
    name: "Mark D.",
    timeframe: "6 weeks"
  }, {
    before: "Relationship suffering",
    after: "Stronger than ever",
    name: "Steve R.",
    timeframe: "2 months"
  }];
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Real Results</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {realResults.map((result, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
              <h3 className="font-bold text-lg mb-2">{result.name}</h3>
              <p className="text-gray-600 mb-2">Before: {result.before}</p>
              <p className="text-green-600 font-semibold mb-2">After: {result.after}</p>
              <p className="text-sm text-gray-500">In just {result.timeframe}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default NoFiltersSection;