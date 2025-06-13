import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Создание профиля",
      description:
        "Участники регистрируются и создают индивидуальные профили для персонализированного обучения",
      icon: "👤",
      color: "from-red-500 to-red-600",
    },
    {
      number: "02",
      title: "Обучающие материалы",
      description:
        "Доступ к видеоурокам, мастер-классам и материалам, которые можно изучать в удобное время",
      icon: "📚",
      color: "from-orange-500 to-orange-600",
    },
    {
      number: "03",
      title: "Онлайн-вебинары",
      description:
        "Живые вебинары с профессионалами театра, где можно задавать вопросы и получать обратную связь",
      icon: "🎥",
      color: "from-purple-500 to-purple-600",
    },
    {
      number: "04",
      title: "Общение и форумы",
      description:
        "Форумы и чаты для общения между участниками проекта, обмена опытом и поддержки",
      icon: "💬",
      color: "from-blue-500 to-blue-600",
    },
  ];

  return (
    <section className="py-16 px-6 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Как это работает
          </h2>
          <p className="text-xl text-gray-300">
            Простой путь к освоению театрального мастерства
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mx-auto mb-4 text-2xl font-bold`}
                >
                  {step.number}
                </div>

                <div className="text-4xl mb-4">{step.icon}</div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors cursor-pointer">
            <span>Присоединиться к ProТеатр</span>
            <span className="text-xl">🎭</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
