'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname?.split('/')[1] || 'en';

  const switchLanguage = (locale: string) => {
    const currentPath = pathname || '/';
    const newPath = currentPath.replace(/^\/[a-z]{2}/, `/${locale}`);
    router.push(newPath);
    // Force a page refresh to ensure all translations are updated
    window.location.href = newPath;
  };

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={() => switchLanguage('en')}
        className={`transition-transform hover:scale-110 ${
          currentLocale === 'en' ? 'ring-2 ring-blue-500 rounded-full' : ''
        }`}
      >
        <Image
          src="/flags/en.svg"
          alt="English"
          width={24}
          height={24}
          className="rounded-full"
        />
      </button>
      <button
        onClick={() => switchLanguage('tr')}
        className={`transition-transform hover:scale-110 ${
          currentLocale === 'tr' ? 'ring-2 ring-blue-500 rounded-full' : ''
        }`}
      >
        <Image
          src="/flags/tr.svg"
          alt="Türkçe"
          width={24}
          height={24}
          className="rounded-full"
        />
      </button>
    </div>
  );
};

export default LanguageSwitcher; 