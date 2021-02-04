<template>
    <div>
        <h2>Hola mundo</h2>
        <p>{{message}}</p>
        <label for="message">Mensaje</label><br/>
        <input id="message" type="text" v-model="message" size="50">
    </div>
</template>
<script>
// Para hacer databinding utilizamos: ref
import {ref} from 'vue' 
export default {
    name: 'HelloWorld',
    setup() {
        const message = ref('Mensaje desde el componente HelloWorld')
        return {message}
    }
}
</script>