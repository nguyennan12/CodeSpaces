let apiRoot = ''

if (import.meta.env.MODE === 'development') {
  apiRoot = 'http://localhost:8011'
}

if (import.meta.env.MODE === 'production') {
  apiRoot = ''
}

export const API_ROOT = apiRoot