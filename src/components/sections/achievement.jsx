'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, Book, Trophy, Users, ChevronDown, ChevronUp } from 'lucide-react'

const achievements = [
  {
    category: 'التفوق الأكاديمي',
    icon: Book,
    items: [
      '15 طالبًا تم الاعتراف بهم كعلماء متميزين على المستوى الوطني خلال العام الماضي',
      'متوسط درجات SAT: 1380، أعلى بكثير من المعدل الوطني',
      'نسبة قبول الكليات: 98%، و75% تم قبولهم في جامعات من الدرجة الأولى',
      'بطولة الأولمبياد العلمي على مستوى الولاية لمدة 3 سنوات متتالية'
    ]
  },
  {
    category: 'الإنجازات الرياضية',
    icon: Trophy,
    items: [
      'بطولة كرة السلة على مستوى الولاية (بنين) - 2023',
      'ألعاب القوى: 3 ألقاب فردية على مستوى الولاية في سباقات السرعة',
      'السباحة: طالبين تأهلا إلى البطولات الوطنية',
      'فريق كرة القدم وصل إلى نصف نهائي بطولة الولاية'
    ]
  },
  {
    category: 'الفنون والثقافة',
    icon: Award,
    items: [
      'فاز نادي الدراما بجائزة أفضل أداء في مسابقة المسرح على مستوى الولاية',
      'دعوة جوقة المدرسة للغناء في قاعة كارنيجي',
      'حصل طلاب الفن على 12 جائزة ذهبية في جوائز الفن الإقليمي',
      'حصلت فرقة المدرسة على تصنيف "ممتاز" في مهرجان الموسيقى على مستوى الولاية'
    ]
  },
  {
    category: 'المشاركة المجتمعية',
    icon: Users,
    items: [
      'أكمل الطلاب أكثر من 25,000 ساعة من الخدمة المجتمعية بشكل جماعي',
      'جمع 50,000 دولار للجمعيات الخيرية المحلية من خلال فعالية جمع التبرعات السنوية',
      'قاد نادي البيئة مبادرة إعادة التدوير على مستوى المدينة',
      'حصل فريق نموذج الأمم المتحدة على جائزة "أفضل وفد" في المؤتمر الوطني'
    ]
  }
]

export default function SchoolAchievements() {
  const [expandedCategory, setExpandedCategory] = useState(null)

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">إنجازاتنا</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
              src="https://www.charityschools.com/wp-content/uploads/2023/04/Screenshot-2023-04-23-020210.jpg"
              alt="طلاب يحتفلون بإنجازاتهم"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleCategory(achievement.category)}
                  className="flex items-center justify-between w-full p-4 text-left"
                >
                  <div className="flex items-center">
                    <achievement.icon className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-lg font-semibold">{achievement.category}</h3>
                  </div>
                  {expandedCategory === achievement.category ? (
                    <ChevronUp className="w-5 h-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-600" />
                  )}
                </button>
                <AnimatePresence>
                  {expandedCategory === achievement.category && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ul className="px-4 pb-4 space-y-2">
                        {achievement.items.map((item, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-start"
                          >
                            <span className="text-blue-600 mr-2">•</span>
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
