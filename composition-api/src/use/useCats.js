import catsData from "@/data/catsData"
import { ref } from "vue"

export default function useCats(){
    let cats = ref(catsData)

    const addCat = newCat => {
      console.log("add", newCat)
      const id = cats.value[cats.value.length-1].id+1
      const idCat = {...newCat, id, isAngry:true}
      cats.value.push(idCat)
    }
    
      const removeCat = id => {
      const index = cats.value.findIndex(cat=>cat.id==id)
      cats=cats.value.splice(index,1)
      //cats = cats.value.filter(cat => cat.id != id)
    }

  return { cats, addCat, removeCat }
}