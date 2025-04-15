import { useTranslations } from 'next-intl';

export default function DashboardPage() {
  const t = useTranslations('Dashboard');

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{t('welcome')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">{t('stats')}</h2>
          <p className="text-gray-600">{t('statsDescription')}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">{t('recentActivity')}</h2>
          <p className="text-gray-600">{t('activityDescription')}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">{t('quickActions')}</h2>
          <p className="text-gray-600">{t('actionsDescription')}</p>
        </div>
      </div>
    </div>
  );
} 