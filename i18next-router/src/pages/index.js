import Image from "next/image";
import { Inter } from "next/font/google";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  const { t } = useTranslation('common');
  return (
    <main>
      <h1>{t('welcome')}</h1>
      <h1>{t('title', { ns: 'header' })}</h1>
    </main>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'header'])),
    },
  };
}
