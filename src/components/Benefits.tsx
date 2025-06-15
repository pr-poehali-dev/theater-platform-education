import { Card, CardContent } from "@/components/ui/card";

const Benefits = () => {
  const benefits = [
    {
      title: "Дистанционный формат",
      description:
        "Изучайте театральное искусство из любого места в удобное для вас время без привязки к географическому расположению",
      icon: "🌐",
      color: "from-green-500 to-green-600",
    },
    {
      title: "Развитие навыков",
      description:
        "Развивайте актерские навыки, креативность и командную работу через практические занятия и интерактивные упражнения",
      icon: "🎭",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Обмен опытом",
      description:
        "Общайтесь с единомышленниками, делитесь идеями и мыслями с другими участниками проекта в дружественной среде",
      icon: "💭",
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Преимущества платформы
          </h2>
          <p className="text-xl text-gray-600">
            Почему ProТеатр — лучший выбор для изучения театрального искусства
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="border-2 border-gray-100 hover:border-red-200 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${benefit.color} flex items-center justify-center mx-auto mb-6`}
                >
                  <span className="text-2xl">{benefit.icon}</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
