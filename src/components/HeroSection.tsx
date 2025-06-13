import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-red-900 to-slate-800 text-white py-20 px-6 overflow-hidden">
      {/* Театральный фон */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-8xl">🎭</div>
        <div className="absolute bottom-20 right-20 text-6xl">🎪</div>
        <div className="absolute top-1/2 left-1/4 text-4xl">✨</div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
          ProТеатр
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Формируем среду, где приобщаем подрастающее поколение к
          общечеловеческим ценностям посредством стимулирования развития
          школьных театров в образовательных учреждениях
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg"
          >
            Начать обучение 🎭
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-3 text-lg"
          >
            Узнать больше
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
