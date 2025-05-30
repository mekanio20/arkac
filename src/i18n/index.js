import { createI18n } from 'vue-i18n'
import tm from './locales/tm'
import en from './locales/en'
import ru from './locales/ru'
import tr from './locales/tr'

const i18n = createI18n({
  locale: localStorage.getItem('selectedLanguage') || 'TK',
  fallbackLocale: 'TK',
  messages: {
    TK: tm,
    EN: en,
    RU: ru,
    TR: tr
  }
})

export default i18n 