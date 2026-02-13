import { LANGUAGES } from '~/apis/explore/language'

export const findSelectedLanguage = (lang) => {
  return LANGUAGES.find(l => l.id === lang)
}