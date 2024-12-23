import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useAnimation,
  useMotionValue,
} from "framer-motion";
import {
  ChevronDown,
  Book,
  GraduationCap,
  Users,
  Globe,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const BACKGROUND_IMAGE = "https://www.khda.gov.ae/SchoolImage/2L.jpg";

const stats = [
  {
    icon: Book,
    label: "الدورات",
    value: "100+",
    color: "from-blue-500/20 to-blue-600/20",
    description: "برامج أكاديمية متنوعة",
  },
  {
    icon: Users,
    label: "الطلاب",
    value: "5000+",
    color: "from-green-500/20 to-green-600/20",
    description: "متعلمين نشطين",
  },
  {
    icon: GraduationCap,
    label: "الخريجون",
    value: "15000+",
    color: "from-purple-500/20 to-purple-600/20",
    description: "قصص نجاح",
  },
  {
    icon: Globe,
    label: "الدول",
    value: "50+",
    color: "from-orange-500/20 to-orange-600/20",
    description: "انتشار عالمي",
  },
];

const MouseTracker = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="relative" onMouseMove={handleMouseMove}>
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,.1), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
};

const ParallaxText = ({ children, className }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const speed = 0.3;
      setPosition(window.scrollY * speed);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{ transform: `translateY(${position}px)` }}
    >
      {children}
    </div>
  );
};

const InteractiveButton = ({ href, primary, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={href}
      className={`
        group relative inline-flex items-center justify-center px-8 py-4 
        overflow-hidden rounded-full font-semibold transition-all duration-300 
        ease-out hover:scale-105 focus:ring-2 focus:ring-offset-2
        ${
          primary
            ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400"
            : "border-2 border-white text-white hover:bg-white hover:text-blue-900 focus:ring-white"
        }
      `}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer" />
      <span className="relative flex items-center gap-2">
        {children}
        <motion.span
          animate={{ x: isHovered ? 5 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <ArrowRight className="w-4 h-4" />
        </motion.span>
      </span>
    </motion.a>
  );
};

const StatCard = ({ stat, index }) => {
  const controls = useAnimation();

  return (
    <motion.div
      className={`
        relative flex flex-col items-center rounded-xl 
        backdrop-blur-sm p-6 overflow-hidden
        bg-gradient-to-br ${stat.color} border border-white/10
        hover:border-white/20 transition-all duration-300
      `}
      whileHover={{ scale: 1.05, y: -5 }}
      onHoverStart={() => controls.start({ opacity: 1, scale: 1 })}
      onHoverEnd={() => controls.start({ opacity: 0, scale: 0.8 })}
    >
      <div className="relative z-10">
        <stat.icon className="w-10 h-10 mb-3 text-white" />
        <span className="text-4xl font-bold mb-2 text-white">{stat.value}</span>
        <span className="text-sm uppercase tracking-wide text-gray-200 block">
          {stat.label}
        </span>
        <span className="text-xs text-gray-300 mt-2 block">
          {stat.description}
        </span>
      </div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0"
        animate={controls}
        initial={{ opacity: 0, scale: 0.8 }}
      />
    </motion.div>
  );
};

export default function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MouseTracker>
<div className="relative  lg:h-[90vh] sm:h-auto md:h-[75vh] flex items-center justify-center overflow-hidden">
{/* خلفية بتأثير المنظر المتحرك */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${BACKGROUND_IMAGE})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            y: useMotionValue(scrollProgress * 100),
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg width="20" height="20" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="1" cy="1" r="1" fill="%23FFFFFF"%2F%3E%3C%2Fsvg%3E")',
              backgroundSize: "30px 30px",
              opacity: 0.05,
            }}
          />
        </motion.div>

        {/* المحتوى الرئيسي */}
        <div className="relative z-20 container mx-auto px-4">
          <div className="text-center max-w-5xl mx-auto">
            <ParallaxText className="mb-6">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl sm:text-6xl md:text-7xl font-bold"
              >
                <span className="block bg-gradient-to-r from-white via-white to-gray-300 text-transparent bg-clip-text">
                  تمكين العقول
                </span>
                <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-transparent bg-clip-text">
                  تشكيل المستقبل
                </span>
              </motion.h1>
            </ParallaxText>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-10"
            >
              تجربة التميز في التعليم في مؤسستنا المرموقة
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16"
            >
              <InteractiveButton href="/apply-now" primary>
                قدّم الآن
              </InteractiveButton>
              <InteractiveButton href="/virtual-tour">
                قراءة المزيد{" "}
              </InteractiveButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
            >
              {stats.map((stat, index) => (
                <StatCard key={index} stat={stat} index={index} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* مؤشر تقدم التمرير */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
          style={{ scaleX: scrollProgress }}
        />

        {/* مؤشر التمرير */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{
            y: [0, 10, 0],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <ChevronDown className="w-10 h-10 text-white sm:hidden" />
        </motion.div>

        {/* التأثيرات التزيينية */}
        <Sparkles
          key="sparkles"
          className="absolute inset-0 pointer-events-none"
          color="white"
          count={15}
          speed={0.5}
          size={1}
        />
      </div>
      <motion.div
        className="absolute top-20 left-10 sm:top-24 sm:left-20 lg:top-32 lg:left-40 bg-white rounded-full p-3 sm:p-4 shadow-lg z-10"
        animate={{ y: [0, 20, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      >
        <Book className="text-blue-900 w-6 h-6 sm:w-8 sm:h-8" />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 sm:bottom-40 sm:right-20 lg:bottom-48 lg:right-40 bg-white rounded-full p-3 sm:p-4 shadow-lg z-10"
        animate={{ y: [0, -20, 0], rotate: [0, -10, 10, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
      >
        <GraduationCap className="text-blue-900 w-6 h-6 sm:w-8 sm:h-8" />
      </motion.div>
    </MouseTracker>
  );
}

// Add these styles to your global CSS
const styles = `
  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  .animate-shimmer {
    animation: shimmer 2s infinite;
  }
`;
