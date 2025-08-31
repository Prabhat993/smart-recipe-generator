export default function Hero() {
  return (
    <div className="relative bg-cover bg-center min-h-[60vh] flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/hero-background.jpg')", // Replace with your actual image path
      }}
    >
      <div className="bg-black/50 p-8 rounded-xl text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          🍽️ Discover Recipes From Your Ingredients
        </h1>
        <p className="text-lg md:text-xl text-gray-200">
          Enter what you have in your kitchen, and we'll suggest delicious recipes you can make right now!
        </p>
      </div>
    </div>
  );
}
