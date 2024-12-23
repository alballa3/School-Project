import AboutUs from "@/components/sections/aboutus";
import SchoolActivities from "@/components/sections/activities";
import Activities from "@/components/sections/activities";
import Hero from "@/components/sections/hero";
import PrincipalSpeech from "@/components/sections/school";
import SchoolAchievements from "@/components/sections/achievement";
import ContactUs from "@/components/sections/contactus";

export const Index = () => {
  return (
    <>
      <Hero></Hero>
      <Activities />
      <AboutUs></AboutUs>
      <SchoolAchievements></SchoolAchievements>
      <PrincipalSpeech></PrincipalSpeech>
      <ContactUs></ContactUs>
    </>
  );
};
