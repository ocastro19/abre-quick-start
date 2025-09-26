const NewsOutletsSection = () => {
  const newsOutlets = [{
    name: "CNN",
    logo: "📺"
  }, {
    name: "FOX NEWS",
    logo: "📺"
  }, {
    name: "NBC",
    logo: "📺"
  }, {
    name: "CBS",
    logo: "📺"
  }, {
    name: "ABC",
    logo: "📺"
  }, {
    name: "TIME",
    logo: "📰"
  }, {
    name: "USA TODAY",
    logo: "📰"
  }, {
    name: "REUTERS",
    logo: "📰"
  }];
  return (
    <div className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">As Featured In</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {newsOutlets.map((outlet, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-600">
              <span className="text-2xl">{outlet.logo}</span>
              <span className="font-semibold">{outlet.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default NewsOutletsSection;