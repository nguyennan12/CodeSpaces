import axios from 'axios'
import { findSelectedLanguage } from '~/utils/findSelectedLanguage'

const API = axios.create({
  baseURL: 'https://emkc.org/api/v2/piston'
})

export const executeCode = async (language, srcCode) => {
  const selectedLang = findSelectedLanguage(language)
  const respone = await API.post('/execute', {
    language: selectedLang.runtime.language,
    version: selectedLang.runtime.version,
    files: [
      {
        content: srcCode
      }
    ]
  })
  return respone.data
}