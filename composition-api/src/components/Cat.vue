<template>
  <div>
    <h1>Это один кот</h1>
    {{cat}}
    <button @click="removeCat(cat.id)">Удалить кота</button>
  </div>
</template>

<script>
import useCats from '@/use/useCats'

export default {
    props:["cat"],
    setup(props){
        const { removeCat } = useCats()

        return {removeCat}
    }
}
</script>

<style>

</style>