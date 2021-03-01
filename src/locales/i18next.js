
import i18next from 'i18next'


fetch('http://localhost:8081/api/lang/es')
  .then(res=>res.json())
  .then(data=>{
    i18next.addResources('es','translation',data)
  })

export default i18next.init({
  lng: 'en',
  fallbackLng: ["es","fr"],
  debug: true,  
  resources: {
    en:{
      translation:{}
    },  
    es:{
      translation:{}
    },
    fr:{
      translation:{}
    }
  }
})
