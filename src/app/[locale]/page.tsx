import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Home() {
  const t = useTranslations('Home');

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">{t('title')}</h1>
      <div className="flex gap-4">
        <Link href="/dashboard" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          {t('dashboard')}
        </Link>
        <Link href="/auth" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          {t('auth')}
        </Link>
      </div>
    </main>
  );
} 