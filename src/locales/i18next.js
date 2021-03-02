
import i18next from 'i18next'
import es from './es.json'
import en from './en.json'
import fr from './fr.json'

/*fetch('http://localhost:8081/api/lang/es')
  .then(res=>res.json())
  .then(data=>{
    i18next.addResources('es','translation',data)
  })*/

export default i18next.init({
  lng: 'en',
  fallbackLng: ["es","fr"],
  debug: false,  
  resources: {
    en,  
    es,
    fr
  }
})
