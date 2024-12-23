'use client'

import { Link, Outlet } from "react-router"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { GraduationCap, Menu, Phone, Mail } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white flex flex-col min-h-screen">
      {/* شريط علوي مع اسم المدرسة ومعلومات الاتصال */}
      <div className="bg-blue-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
          <span className="text-lg font-semibold mb-2 sm:mb-0">أكاديمية إيفرجرين</span>
          <div className="flex items-center space-x-4">
            <a href="tel:+1234567890" className="flex items-center text-sm sm:text-base">
              <Phone className="w-4 h-4 mr-2" />
              <span>123-456-7890</span>
            </a>
            <a href="mailto:info@evergreenacademy.edu" className="hidden sm:flex items-center text-sm sm:text-base">
              <Mail className="w-4 h-4 mr-2" />
              <span>info@evergreenacademy.edu</span>
            </a>
          </div>
        </div>
      </div>

      {/* رأس الصفحة الرئيسية */}
      <header className="border-b z-50 border-gray-200 sticky top-0 bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6 md:py-8">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <img src="/icon.jfif" alt="أكاديمية إيفرجرين" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-bold text-gray-900">مدرسة الاهلية الخيرية</span>
                <span className="text-xs text-blue-600 hidden sm:inline-block">رعاية العقول، تشكيل المستقبل</span>
              </div>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <NavItem href="/" text="الرئيسية" />
              <NavItem href="/academics" text="الدراسات" />
              <NavItem href="/admissions" text="التسجيل" />
            </nav>
            <div className="flex items-center space-x-4">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 px-4 py-2 text-sm sm:text-base rounded-full shadow-md hover:shadow-lg w-full sm:w-auto">
                قدم الآن
              </Button>
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">تبديل القائمة</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col space-y-4 mt-6">
                    <MobileNavItem href="/" text="الرئيسية" onClick={() => setIsOpen(false)} />
                    <MobileNavItem href="/academics" text="الدراسات" onClick={() => setIsOpen(false)} />
                    <MobileNavItem href="/admissions" text="التسجيل" onClick={() => setIsOpen(false)} />
                  </nav>
                  <Button className="mt-6 w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 rounded-full">
                    قدم الآن
                  </Button>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">اتصل بنا</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-600 mr-2" />
                  <span>123-456-7890</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-2" />
                  <span>info@evergreenacademy.edu</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
              <ul className="space-y-2">
                <li><Link href="/academics" className="hover:text-blue-600 transition-colors">الدراسات</Link></li>
                <li><Link href="/admissions" className="hover:text-blue-600 transition-colors">التسجيل</Link></li>
                <li><Link href="/campus-life" className="hover:text-blue-600 transition-colors">الحياة الجامعية</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">تابعنا</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <span className="sr-only">فيسبوك</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <span className="sr-only">إنستغرام</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.428.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.332 2.525c.636-.247 1.363-.416 2.427-.465 1.067-.048 1.407-.06 3.808-.06zm0-2C9.88 0 9.58 0 8.917.007a6.198 6.198 0 00-2.36.518A7.43 7.43 0 003.58 2.92a7.43 7.43 0 00-2.075 2.075 6.198 6.198 0 00-.517 2.36C0 9.58 0 9.88 0 12s.007 2.42.06 3.376c.049 1.064.218 1.791.465 2.427a4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123 0 2.643.012 2.987.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-3.808.06-2.43 0-2.784-.013-3.808-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.067-.06-1.407-.06-4.123s.012-2.987.06-4.043c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772c.636-.247 1.363-.416 2.427-.465 1.067-.048 1.407-.06 3.808-.06z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function NavItem({ href, text }) {
  return (
    <Link href={href} className="text-sm sm:text-base font-medium text-gray-700 hover:text-blue-600 transition-colors">
      {text}
    </Link>
  )
}

function MobileNavItem({ href, text, onClick }) {
  return (
    <Link href={href} onClick={onClick} className="text-lg font-semibold text-gray-900">
      {text}
    </Link>
  )
}
