import { useTranslation } from '../../lib/i18n/locales/index'
import { languages, fallbackLng } from '../../lib/i18n/locales/setting'
import { notFound, redirect } from 'next/navigation'

export default async function Home({ params }) {
  const isLang = languages.filter(item=>  params.lang.startsWith(`${item}`))?.[0]
  if (!isLang) {
    // http://localhost:3002/232323 重定位，也是到app根目录的not-found
    return redirect(`/${fallbackLng}/${params.lang}`)
  }
  const { t } = await useTranslation(params.lang, 'common')
  return (
    <main>
      <div>dddd</div>
      <div>{ t('welcome') }</div>
    </main>
  );
}
