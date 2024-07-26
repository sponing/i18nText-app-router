'use client';

import { useTranslation } from '../lib/i18n/locales/index'
import { usePathname } from 'next/navigation';
import { languages, fallbackLng } from '../lib/i18n/locales/setting'
import Link from 'next/link'
 
export default async function NotFound() {
  const pathname = usePathname()
  const lang = languages.filter(item=> pathname.startsWith(`/${item}`))?.[0] || fallbackLng
  const { t } = await useTranslation(lang, 'common')
  return (
    <div>
      <h2>Not Found { t('welcome') }</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}