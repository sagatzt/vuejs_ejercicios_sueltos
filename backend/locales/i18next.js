
import i18next from 'i18next'
import Backend from 'i18next-fs-backend'

import en from './en.json'
import es from './es.json'
import fr from './fr.json'

export default i18next.use(Backend).init({
  lng: 'es',
  fallbackLng: ["en","fr"],
  debug: true,  
  /*resources: {
    en,  
    es,
    fr
  }*/
  backend: {
    loadPath: './{{lng}}.json',
    //addPath: '/locales/{{lng}}/{{ns}}.missing.json',
  }  
})
