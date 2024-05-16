import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
const locales = ['jp', 'ko', 'en'];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  // 위치 확인
  try {
    const messages = (await import(`./messages/${locale}.json`)).default;
    return { messages };
  } catch (error) {
<<<<<<< HEAD
    console.error(`Failed to load messages for locale ${locale}:`, error);
=======
    console.error(`Failed to load messages for locale (kim)${locale}:`, error);
>>>>>>> e625b140d311a009887b45c4e2e893ce75723929
    notFound(); // 또는 다른 에러 처리 방식을 사용할 수 있습니다.
  }
});
