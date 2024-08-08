import KakaoMap from '@/components/consultation/map/KakaoMap';
import { useTranslations } from 'next-intl';

export default function Consultation() {
  const body = useTranslations('Consultation');
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4"> {body('Text1')}</h2>
      <div className="w-[100%] h-2 bg-red-500"></div>
      <p className="mt-4 text-lg">{body('Text2')}</p>
      <div className="mt-4">
        <KakaoMap />
      </div>
      <div className="mt-4">
        <h3 className="text-xl  text-red-500 font-bold"> {body('Text3')}</h3>
        <div className="w-[60%] mt-4 mb-4 h-1 bg-red-500"></div>
        <p> {body('Text4')}</p>
        <p> {body('Text5')}</p>
      </div>
      <div className="mt-4">
        <h3 className="text-xl text-red-500 font-bold"> {body('Text6')}</h3>
        <div className="w-[60%] mt-4 mb-4 h-1 bg-red-500"></div>
        <p> {body('Text7')}</p>
        <p> {body('Text8')}</p>
        <p> {body('Text9')}</p>
      </div>
    </div>
  );
}
