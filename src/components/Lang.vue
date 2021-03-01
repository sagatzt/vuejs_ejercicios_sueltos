<template>
  <div class="prueba">
    <h1>MultiLang</h1>
    <select v-model="currentLang">
      <option v-for="(l,i) in langs" :key="i">
        {{l}}
      </option>
    </select>
    <hr />
    <p><b>Clave 'hello': </b>{{lang.hello}}</p>
    <p><b>Clave 'bye': </b>{{lang.bye}}</p>
    <p><b>Clave 'parrafo1': </b>{{lang.parrafo1}}</p>
  </div>
</template>
<script>
import { ref, reactive, computed, onMounted } from 'vue'
import i18next from 'i18next'

export default {
    name:'Lang',
    props:{

    },
    setup(){

      console.log(i18next)
      let langs=reactive(i18next.languages)
      let currentLang=ref(i18next.language)
      let lang=computed(()=>{
        return i18next.getDataByLanguage(currentLang.value).translation
      })

      return {
        lang,
        langs,
        currentLang
      }
    }
}

</script>

<style lang="scss" scoped>

</style>