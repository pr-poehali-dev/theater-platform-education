import { Card, CardContent } from "@/components/ui/card";

const TargetAudience = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Для кого создана платформа
          </h2>
          <p className="text-xl text-gray-600">
            Специально разработано для молодых талантов Архангельской области
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-2 border-red-100 hover:border-red-300 transition-colors duration-300 hover:shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-6">🎓</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Студенты СПО
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Для студентов в возрасте <strong>16-21 года</strong> из
                Архангельской области, интересующихся театральным искусством и
                желающих развивать свои творческие способности
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-orange-100 hover:border-orange-300 transition-colors duration-300 hover:shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-6">🏫</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Образовательные учреждения
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Для учебных заведений, которые хотят интегрировать театральное
                искусство в свою образовательную программу и развивать
                творческий потенциал студентов
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
