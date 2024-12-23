import React, { useState, useCallback } from "react";
import {
  Music,
  Book,
  ClubIcon as Football,
  Microscope,
  Palette,
  Globe,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const activities = [
  {
    id: 1,
    name: "نادي الموسيقى",
    icon: Music,
    description: "طور مواهبك الموسيقية في غرف الموسيقى الحديثة لدينا.",
    category: "الفنون",
    schedule: "الإثنين والأربعاء",
    spots: "متاح",
    location: "غرفة الموسيقى 101",
    instructor: "الأستاذة سارة جونسون",
    requirements: "لا حاجة لتجربة مسبقة",
  },
  {
    id: 2,
    name: "نادي الكتاب",
    icon: Book,
    description: "استكشف الأدب وشارك أفكارك في مناقشات الكتاب الأسبوعية لدينا.",
    category: "أكاديمي",
    schedule: "الثلاثاء",
    spots: "محدود",
    location: "المكتبة",
    instructor: "الأستاذ روبرت تشين",
    requirements: "يجب إكمال قراءات شهرية محددة",
  },
  {
    id: 3,
    name: "فرق الرياضة",
    icon: Football,
    description: "انضم إلى فرقنا الرياضية التنافسية وشارك في بطولات المدرسة.",
    category: "الرياضة",
    schedule: "يوميًا",
    spots: "متاح",
    location: "الصالة الرياضية الرئيسية",
    instructor: "المدرب تومسون",
    requirements: "يتطلب فحصًا طبيًا",
  },
  {
    id: 4,
    name: "نادي العلوم",
    icon: Microscope,
    description: "قم بإجراء التجارب واستكشاف عجائب العلوم في مختبراتنا.",
    category: "أكاديمي",
    schedule: "الخميس",
    spots: "ممتلئ",
    location: "مختبر العلوم 203",
    instructor: "الدكتورة إميلي مارتينيز",
    requirements: "يتطلب تدريبًا على السلامة",
  },
  {
    id: 5,
    name: "ورشة الفنون",
    icon: Palette,
    description: "عبر عن إبداعك من خلال أشكال وتقنيات فنية متنوعة.",
    category: "الفنون",
    schedule: "الجمعة",
    spots: "متاح",
    location: "استوديو الفنون",
    instructor: "الأستاذ ديفيد لي",
    requirements: "تُطبق رسوم المواد",
  },
  {
    id: 6,
    name: "نموذج الأمم المتحدة",
    icon: Globe,
    description:
      "طور مهارات القيادة والدبلوماسية في برنامج نموذج الأمم المتحدة لدينا.",
    category: "القيادة",
    schedule: "الأربعاء",
    spots: "محدود",
    location: "الغرفة 304",
    instructor: "الأستاذة أندريا ويلسون",
    requirements: "يتطلب إجراء مقابلة",
  },
];

const categoryColors = {
  Arts: "bg-purple-100 text-purple-800",
  Academic: "bg-blue-100 text-blue-800",
  Athletics: "bg-green-100 text-green-800",
  Leadership: "bg-orange-100 text-orange-800",
};

const spotStatusColors = {
  Open: "bg-green-100 text-green-800",
  Limited: "bg-yellow-100 text-yellow-800",
  Full: "bg-red-100 text-red-800",
};

const ActivityCard = React.memo(({ activity }) => {
  const Icon = activity.icon;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="group hover:shadow-lg transition-shadow duration-300 cursor-pointer">
          <CardHeader>
            <div className="flex items-center justify-between mb-2">
              <Icon className="w-8 h-8 text-blue-600" />
              <Badge
                variant="secondary"
                className={categoryColors[activity.category]}
              >
                {activity.category}
              </Badge>
            </div>
            <CardTitle>{activity.name}</CardTitle>
            <CardDescription>{activity.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <img
              src={`https://www.charityschools.com/wp-content/uploads/2023/04/%D9%85%D8%AD%D8%AA%D9%88%D9%89-%D9%85%D8%AF%D8%B1%D8%B3%D8%A9-%D8%B3%D9%85%D9%86%D8%A7%D9%86-1-4.jpg`}
              alt={`${activity.name} activity`}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              <span className="font-medium">Schedule:</span> {activity.schedule}
            </div>
            <Badge className={spotStatusColors[activity.spots]}>
              {activity.spots}
            </Badge>
          </CardFooter>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Icon className="w-6 h-6 text-blue-600" />
            {activity.name}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-1">Description</h4>
            <p className="text-gray-600">{activity.description}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-1">Location</h4>
              <p className="text-gray-600">{activity.location}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Schedule</h4>
              <p className="text-gray-600">{activity.schedule}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Instructor</h4>
              <p className="text-gray-600">{activity.instructor}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Requirements</h4>
              <p className="text-gray-600">{activity.requirements}</p>
            </div>
          </div>
          <div className="flex justify-end">
            <Button disabled={activity.spots === "Full"}>
              {activity.spots === "Full" ? "Currently Full" : "Join Activity"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
});

ActivityCard.displayName = "ActivityCard";

export default function SchoolActivities() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = [
    "All",
    ...new Set(activities.map((activity) => activity.category)),
  ];

  const filteredActivities = useCallback(
    () =>
      selectedCategory === "All"
        ? activities
        : activities.filter(
            (activity) => activity.category === selectedCategory
          ),
    [selectedCategory]
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            اكتشف حياة مدرستنا النابضة بالحياة
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            استكشف مجموعة متنوعة من الأنشطة اللامنهجية المصممة لتنمية المواهب
            وبناء صداقات تدوم طويلاً.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
              aria-pressed={selectedCategory === category}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredActivities().map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="rounded-full">
            View All Details
          </Button>
        </div>
      </div>
    </section>
  );
}
