<template>
    <div>
        <h2>Reactive counter</h2>
        <h3>{{ counter }}</h3>
        <h3>{{ counterComputed }}</h3>
        <button @click="increment">Incrementar</button>
        <button @click="decrement">Decrementar</button>
    </div>
</template>
<script>
import {reactive, computed, toRefs} from 'vue'
export default {
    name: 'ReactiveCounter',
    setup() {
        const data = reactive({
            counter: 0,
            counterComputed: computed(() => {
                return `El valor de counter es ${data.counter}`
            })
        })

        const increment = () => {
            data.counter ++
        }

        const decrement = () => {
            data.counter --
        }
        // Retornar data convertido en referencias para poder utilizar sus valores
        return { ...toRefs(data), increment, decrement}
    }
    
}
</script>
