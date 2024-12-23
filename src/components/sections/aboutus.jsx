
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Book, Users, Trophy, Globe, ChevronDown } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const features = [
    {
      icon: Book,
      title: 'تفوق أكاديمي',
      description: 'منهاج صارم مصمم لتحدي وإلهام الطلاب للوصول إلى إمكاناتهم الكاملة من خلال أساليب تعليمية مبتكرة ونهج تعلم شخصي.',
    },
    {
      icon: Users,
      title: 'مجتمع داعم',
      description: 'تعزيز بيئة داعمة للنمو الشخصي من خلال برامج الإرشاد وشبكات الدعم بين الأقران والتعاون النشط بين الأهل والمعلمين.',
    },
    {
      icon: Trophy,
      title: 'نجاح في الأنشطة اللامنهجية',
      description: 'مجموعة واسعة من الأنشطة بما في ذلك الرياضة والفنون والروبوتات وفِرق المناظرة لتطوير أفراد متكاملين مع اهتمامات ومواهب متنوعة.',
    },
    {
      icon: Globe,
      title: 'منظور عالمي',
      description: 'إعداد الطلاب للنجاح في عالم مترابط من خلال برامج التبادل الدولي ومبادرات الوعي الثقافي وتعليم المواطنة العالمية.',
    },
  ]
  
  const stats = [
    { label: 'الطلاب', value: '1,200+', description: 'متعلمون متنوعون من خلفيات متعددة' },
    { label: 'المعلمون', value: '100+', description: 'معلمون مؤهلون تأهيلاً عالياً' },
    { label: 'متوسط حجم الفصل', value: '18', description: 'ضمان الاهتمام الشخصي' },
    { label: 'القبول الجامعي', value: '98%', description: 'من خريجينا' },
  ]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export default function AboutUs() {
  const [expandedFeature, setExpandedFeature] = useState(null)

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          عن مدرستنا
          </motion.h1>
        
        <motion.p 
          className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          تمكين العقول وتشكيل المستقبل منذ عام 1985
          </motion.p>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-600 rounded-lg transform rotate-3 -z-10" />
            <img
              src="/school.jpg"
              alt="Our vibrant school campus showing the main building and gardens"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </motion.div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-semibold mb-4 text-blue-600">مهمتنا
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                  لتقديم تجربة تعليمية تحوّلية تغذي الفضول الفكري، وتعزز النمو الشخصي، وتمكّن الطلاب ليصبحوا قادة متعاطفين في مجتمع عالمي.
                  </p>
                </motion.div>
              </CardContent>
            </Card>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  className="group"
                >
                  <Card 
                    className="cursor-pointer transform transition-all duration-200 hover:scale-[1.02]"
                    onClick={() => setExpandedFeature(expandedFeature === index ? null : index)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start">
                        <feature.icon className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-lg">{feature.title}</h3>
                            <ChevronDown 
                              className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                                expandedFeature === index ? 'rotate-180' : ''
                              }`}
                            />
                          </div>
                          <motion.p 
                            className={`text-gray-600 mt-2 ${expandedFeature === index ? '' : 'line-clamp-1'}`}
                            initial={false}
                            animate={{ height: expandedFeature === index ? 'auto' : '1.5rem' }}
                          >
                            {feature.description}
                          </motion.p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-semibold mb-8 text-center">School Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={stat.label} className="overflow-hidden">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                    <div className="text-lg font-medium mb-1">{stat.label}</div>
                    <div className="text-sm text-gray-500">{stat.description}</div>
                  </motion.div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}