<template>
  <div>
    
    <h1>Это Новый кот</h1>
      {{newCat}}
    
    <input v-model="newCat.name" placeholder="Имя кота"/>
    <input v-model="newCat.breed" placeholder="Порода кота"/>
    <input v-model.number="newCat.weight" placeholder="Вес кота"/>

    <button @click="addCat(newCat)">Добавить кота</button>

  </div>
</template>

<script>
import useCats from '@/use/useCats'
import Cat from "@/components/Cat.vue"
import { reactive } from "vue"

export default {
  components: { Cat },
  setup(){    
    
    const newCat = reactive(
      {name:"Мурка", breed: "Беспородная", weight:4, isAngry:false}
    )

    const { addCat } = useCats()
    
    return { addCat, newCat }

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
