<template>
  <div>
    
    <h1>Это список котов</h1>
  
    <div v-for="cat in cats" :key="cat.id">
      <Cat :cat="cat"/>
    </div>
    <cat-edit/>
  </div>
</template>

<script>
import useCats from '@/use/useCats'
import Cat from "@/components/Cat.vue"
import CatEdit from './CatEdit.vue'

export default {
  components: { Cat, CatEdit },
  setup(){    
    
    const { cats } = useCats()
    /*
    const {total, liked, remained, likeCat} = useCats()

    const searchInput = ref("");
    const results = ref(0)

    const callAPI = (val) =>{
      setTimeout(() =>{
        const i=Math.random()
        console.log(i)
        results.value = val.length+Math.round((i*10))
      }, 500)
    }

    watchEffect(() => {
      results.value = callAPI(searchInput.value);
    });

    watch(searchInput, (newValue, oldValue)=>{
        console.log("watch", newValue, oldValue)

    })

    return {total, liked, remained, likeCat, callAPI, results, searchInput}
    */

   return { cats }

  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
