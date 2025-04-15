import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = useTranslations('Dashboard');

  return (
    <div className="min-h-screen">
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/dashboard" className="text-xl font-bold">
            {t('title')}
          </Link>
          <div className="flex gap-4">
            <Link href="/dashboard/profile" className="hover:text-gray-300">
              {t('profile')}
            </Link>
            <Link href="/dashboard/settings" className="hover:text-gray-300">
              {t('settings')}
            </Link>
          </div>
        </div>
      </nav>
      <main className="container mx-auto p-4">
        {children}
      </main>
    </div>
  );
} 