"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  ChevronDown,
  ChevronUp,
  Clock,
  Calendar,
  Search,
} from "lucide-react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 24.713552,
  lng: 46.675297,
};

const faqItems = [
  {
    question: "ما هي عملية التقديم للقبول في المدرسة؟",
    answer:
      "تبدأ عملية التقديم بتعبئة نموذج الطلب عبر الإنترنت. بعد ذلك، سنقوم بمراجعة طلبك وسندعوك لزيارة المدرسة وإجراء مقابلة. سيتم إخطارك بالقرار النهائي خلال أسبوعين من المقابلة.",
    category: "القبول",
  },
  {
    question: "ما هي المستندات المطلوبة للتسجيل؟",
    answer:
      "المستندات المطلوبة تشمل: شهادة الميلاد، جواز السفر، الإقامة (للطلاب الدوليين)، السجلات الدراسية للسنتين السابقتين، وتقرير طبي حديث.",
    category: "القبول",
  },
  {
    question: "هل تقدمون منح دراسية؟",
    answer:
      "نعم، نقدم منح دراسية للطلاب المتفوقين أكاديميًا والموهوبين في المجالات الرياضية والفنية. يتم تقييم الطلبات على أساس الأداء الأكاديمي والمواهب الخاصة والاحتياجات المالية.",
    category: "المنح والمساعدات",
  },
  {
    question: "ما هي ساعات الدوام المدرسي؟",
    answer:
      "ساعات الدوام المدرسي هي من الساعة 7:30 صباحًا حتى 2:30 مساءً، من الأحد إلى الخميس.",
    category: "معلومات عامة",
  },
  {
    question: "هل توفرون خدمة النقل المدرسي؟",
    answer:
      "نعم، نوفر خدمة النقل المدرسي لجميع أحياء الرياض. يتم تحديد الرسوم بناءً على المسافة من المدرسة.",
    category: "الخدمات",
  },
  {
    question: "ما هي الأنشطة اللاصفية المتاحة؟",
    answer:
      "نقدم مجموعة واسعة من الأنشطة اللاصفية بما في ذلك الرياضة (كرة القدم، السباحة، كرة السلة)، الموسيقى، الفن، المسرح، نادي العلوم، ونادي الروبوتات.",
    category: "الأنشطة",
  },
  {
    question: "هل تقدمون برامج للطلاب ذوي الاحتياجات الخاصة؟",
    answer:
      "نعم، لدينا برامج متخصصة ومعلمين مؤهلين لدعم الطلاب ذوي الاحتياجات الخاصة. نقدم خدمات التعليم الفردي والدعم الإضافي حسب احتياجات كل طالب.",
    category: "البرامج الخاصة",
  },
  {
    question: "كيف يمكنني التواصل مع معلمي طفلي؟",
    answer:
      "يمكنك التواصل مع المعلمين من خلال بوابة الآباء الإلكترونية، أو عبر البريد الإلكتروني، أو حضور اجتماعات أولياء الأمور المنتظمة. كما يمكنك طلب موعد للقاء المعلم شخصيًا.",
    category: "التواصل",
  },
];

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [showInfoWindow, setShowInfoWindow] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setSubmitSuccess(true);
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const filteredFaqItems = faqItems.filter(
    (item) =>
      (activeCategory === "all" || item.category === activeCategory) &&
      (item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section className="py-16 bg-gray-50 rtl" dir="rtl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          اتصل بنا
        </h2>
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6">راسلنا</h3>
            {submitSuccess && (
              <div
                className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4"
                role="alert"
              >
                <strong className="font-bold">تم الإرسال بنجاح!</strong>
                <span className="block sm:inline">
                  {" "}
                  شكرًا لتواصلك معنا. سنرد عليك في أقرب وقت ممكن.
                </span>
              </div>
            )}
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-white p-6 rounded-lg shadow-md"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    الاسم
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    الهاتف (اختياري)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700"
                  >
                    الموضوع
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">اختر موضوعًا</option>
                    <option value="admission">استفسار عن القبول</option>
                    <option value="academic">سؤال أكاديمي</option>
                    <option value="extracurricular">الأنشطة اللاصفية</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  الرسالة
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  إرسال الرسالة
                  <Send
                    className="mr-2 -ml-1 h-5 w-5 transform rotate-180"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4 text-center">
                موقعنا
              </h3>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.975540677928!2d55.42565722384278!3d25.338601777620244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f594b07c08aa3%3A0x8c29cc3a8ed6fd49!2z2KfZhNmF2K_Ysdiz2Kkg2KfZhNin2YfZhNmK2Kkg2KfZhNiu2YrYsdmK2Kkg2KfZhNiu2KfYtdipINmE2YTYqNmG2YrZhiDYs9mF2YbYp9mG!5e0!3m2!1sar!2sae!4v1734952229679!5m2!1sar!2sae"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  allowFullScreen
                  title="Our Location"
                ></iframe>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
              <h3 className="text-xl font-semibold mb-4">معلومات الاتصال</h3>
              <div className="flex items-start">
                <MapPin className="flex-shrink-0 h-6 w-6 text-blue-600 mt-1 ml-3" />
                <p className="text-base text-gray-500">
                  123 شارع المدرسة، الرياض 12345
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="flex-shrink-0 h-6 w-6 text-blue-600 ml-3" />
                <p className="text-base text-gray-500">+966 11 234 5678</p>
              </div>
              <div className="flex items-center">
                <Mail className="flex-shrink-0 h-6 w-6 text-blue-600 ml-3" />
                <p className="text-base text-gray-500">info@ourschool.edu.sa</p>
              </div>
              <div className="flex items-center">
                <Clock className="flex-shrink-0 h-6 w-6 text-blue-600 ml-3" />
                <p className="text-base text-gray-500">
                  الأحد - الخميس: 7:30 صباحًا - 3:30 مساءً
                </p>
              </div>
              <div className="flex items-center">
                <Calendar className="flex-shrink-0 h-6 w-6 text-blue-600 ml-3" />
                <p className="text-base text-gray-500">الجمعة - السبت: مغلق</p>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h3 className="text-2xl font-semibold mb-6">الأسئلة الأكثر شيوعًا</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-3 py-1 rounded-full text-sm ${
                activeCategory === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              الكل
            </button>
            {Array.from(new Set(faqItems.map((item) => item.category))).map(
              (category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    activeCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {category}
                </button>
              )
            )}
          </div>
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="ابحث في الأسئلة الشائعة"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 pr-10 border border-gray-300 rounded-md"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {filteredFaqItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                  className="flex justify-between items-center w-full text-right"
                >
                  <span className="font-medium text-gray-900">
                    {item.question}
                  </span>
                  {expandedFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-blue-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-blue-500" />
                  )}
                </button>
                {expandedFaq === index && (
                  <p className="mt-2 text-gray-600">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
