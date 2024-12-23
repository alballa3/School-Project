'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Quote, Calendar, Award, Mail } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PrincipalSpeech() {
  const [expanded, setExpanded] = useState(false);
  const [activeQuote, setActiveQuote] = useState(0);

  const principalInfo = {
    name: "الأستاذ/ محمد المازمي",
    title: "مدير المدرسة الأهلية الخيرية سمنان",
    credentials: "مدير المدرسة الأهلية الخيرية سمنان",
    yearsOfService: "أكثر من 15 عامًا في التعليم",
    email: "principal@school.edu",
    achievements: [
      "جائزة القيادة التربوية الوطنية 2023",
      "مؤلف منشور في الابتكار التربوي",
      "عضو مجلس إدارة - لجنة التميز التربوي",
    ],
  };

  const inspirationalQuotes = [
    "التعليم ليس تحضيرًا للحياة؛ التعليم هو الحياة نفسها.",
    "المستقبل ينتمي لأولئك الذين يؤمنون بجمال أحلامهم.",
    "القيادة والتعلم أمران لا غنى عن بعضهما البعض.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveQuote((prev) => (prev + 1) % inspirationalQuotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const speechParagraphs = [
    "الحمد لله على ما علّم من البيان وألهم وأرشد من الفهم والتبيان، وتمم من الجود والفضل والإحسان، واختار المتقين من عباده فوهب لهم علماً وإيمان، والصلاة والسلام الأتمان الأكملان على سيدنا محمد سيد ولد عدنان، وعلى آله وصحبه ومن والاه.",
    
    "لقد أضحت المدارس الأهلية الخيرية كالشمس في بناء الأوطان، جادة في تربية النشء ومن هنا يولد هدفنا من توظيف الطاقات وتكريس الجهود لتنشئتهم نشأة قويمة وصقل شخصيتهم بالعلم والمعرفة.",
    
    "تسعى مدارسنا الى تربية جيل قادر على مواجهة التحديات والصعوبات، جيل قادر على شق طرق نحو مستقبل زاهر وواعد، جيل لا تثنيه عثرات الزمان ولا عقبات الأوان، فهذه الغاية تتحقق يداً بيد لرفع لواء العلم والمعرفة ولشق طريق العمل، فطريقنا علم وعمل ومنهجنا هو الصدق والاعتدال.",
    
    "نربي أبناءنا على الأخلاق الإسلامية، نعودهم الخير، فكم يحتاج هذا الجيل إلى تغذية الفكر والعقل والروح، حتى لا يضيع في أمواج الانحلال، وحتى لا تجرفه رياح التطرف والغلو.",
    
    "نسعى لأن يعرف شبابنا تاريخه وثقافته ويدرك حاضره ويخطط لمستقبله وكيف لا يكون هذا ورسالتنا التربوية ترتكز على عقيدتنا الراسخة بأنّ التعليم هو أداة فاعلة في مسيرة التنمية الاجتماعية والاقتصادية.",
    
    "لنبني من الإنسان قوة منتجة قادرة على تحقيق التطلعات والتوقعات، ساعين للعمل على نقل التعليم من تحصيل المعرفة لأهداف آنية، إلى غرس حب العلم والتعلم، لكي يتمكن أبناؤنا الطلاب وبناتنا الطالبات من الوصول إلى المعرفة وإنتاجها بأنفسهم.",
    
    "مع العمل على بناء شخصياتهم، وغرس القيم الإنسانية بهم، وتعزيز روح الانفتاح الواعي لديهم، والإيمان بقيم العمل والإنتاج، وإشاعة مبدأ الحوار وروح التسامح، والتعامل الراقي والرشيد مع التطورات التكنولوجية وتطبيقاتها."
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            كلمة المدير
          </h2>
          <div className="h-16">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeQuote}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-lg text-blue-600 italic flex items-center justify-center gap-2"
              >
                <Quote className="w-5 h-5" />
                {inspirationalQuotes[activeQuote]}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>
        
        <Card className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden border-0">
          <CardContent className="p-0">
            <div className="md:flex">
              {/* Principal's Profile Section */}
              <div className="md:w-1/3 bg-gradient-to-b from-blue-100 to-blue-50 p-6">
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="aspect-square rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
                    <img
                      src="https://www.charityschools.com/wp-content/uploads/2023/04/1-21-600x600.jpg"
                      alt={principalInfo.name}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-center space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900">{principalInfo.name}</h3>
                    <p className="text-blue-600 font-medium">{principalInfo.title}</p>
                    <div className="border-t border-b border-blue-200 py-3 my-4">
                      <p className="text-sm text-gray-600">{principalInfo.credentials}</p>
                      <p className="text-sm text-gray-600">{principalInfo.yearsOfService}</p>
                    </div>
                    
                    {/* Contact and Calendar Section */}
                    <Button
                      variant="outline"
                      className="w-full mb-2 bg-white hover:bg-blue-50"
                      onClick={() => window.location.href = `mailto:${principalInfo.email}`}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      تواصل مع المدير
                    </Button>
                    
                    {/* Achievements Section */}
                    <div className="mt-6 text-right">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center justify-end">
                        <Award className="w-4 h-4 ml-2 text-blue-600" />
                        الإنجازات
                      </h4>
                      <ul className="space-y-2">
                        {principalInfo.achievements.map((achievement, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="text-sm text-gray-600"
                          >
                            • {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Speech Content */}
              <div className="md:w-2/3 p-8">
                <div className="prose prose-lg max-w-none text-right">
                  {speechParagraphs.slice(0, expanded ? speechParagraphs.length : 3).map((paragraph, index) => (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="mb-4 text-gray-700 leading-relaxed"
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>

                <motion.div 
                  className="text-center mt-8"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {!expanded ? (
                    <Button
                      onClick={() => setExpanded(true)}
                      className="px-8 py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg"
                    >
                      اقرأ الخطاب كاملًا <ChevronDown className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
                    </Button>
                  ) : (
                    <Button
                      onClick={() => setExpanded(false)}
                      variant="outline"
                      className="px-8 py-6 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-full shadow-lg"
                    >
                      طي الخطاب <ChevronUp className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
                    </Button>
                  )}
                </motion.div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
