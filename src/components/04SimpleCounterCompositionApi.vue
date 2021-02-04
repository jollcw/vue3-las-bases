<template lang="">
    <div>
        <h2>Simple Counter Composition Api</h2>
        <h3>{{ counter }}</h3>
        <h3>{{ counterComputed }}</h3>
        <button @click="increment">Incrementar</button>
        <button @click="decrement">Decrementar</button>
    </div>
</template>
<script>
import useCounter from '../composables/useCounter'
export default {
    name: 'SimpleCounterCompositionApi',
    setup() {
        const {counter, counterComputed, increment, decrement} = useCounter()
        return {counter, counterComputed, increment, decrement}
    }
    
}
</script>
<style lang="">
    
</style>