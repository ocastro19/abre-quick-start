const NewsOutletsSection = () => {
  const newsOutlets = [
    { name: "CNN", logo: "📺" },
    { name: "FOX NEWS", logo: "📺" },
    { name: "NBC", logo: "📺" },
    { name: "CBS", logo: "📺" },
    { name: "ABC", logo: "📺" },
    { name: "TIME", logo: "📰" },
    { name: "USA TODAY", logo: "📰" },
    { name: "REUTERS", logo: "📰" }
  ];

  return (
    <section className="w-full max-w-4xl mx-auto px-4 mt-16 mb-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2">
          As Seen In Major News Outlets
        </h2>
        <p className="text-blue-600 font-medium">
          Trusted and featured by leading media organizations
        </p>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {newsOutlets.map((outlet, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-4 hover:bg-blue-50 rounded-lg transition-all duration-300"
            >
              <div className="text-3xl mb-2">{outlet.logo}</div>
              <div className="text-gray-600 font-bold text-sm text-center">
                {outlet.name}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-6 pt-6 border-t border-gray-100">
          <p className="text-blue-600 text-sm font-medium">
            🎬 Featured in over 50+ health segments nationwide
          </p>
          <p className="text-gray-500 text-xs mt-1">
            Join the health revolution that's making headlines
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsOutletsSection;