import { useTranslation } from '../../../lib/i18n/locales/index'

export default async function Home({ params }) {
  const { t } = await useTranslation(params.lang, 'common')
  return (
    <main>
      <div>list</div>
      <div>{ t('welcome') }</div>
    </main>
  );
}
