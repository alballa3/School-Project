import EnhancedSchoolHeader from '@/components/layout/header'

export default function RootLayout({
  children
}) {
  return (
    (<html lang="en">
      <body>
        <EnhancedSchoolHeader />
        {children}
      </body>
    </html>)
  );
}

