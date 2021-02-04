<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <todo-list />
    <hr />
    <simple-counter-composition-api />
    <hr />
    <watch-multi-counter />
    <hr />
    <watch-counter />
    <hr />
    <reactive-counter />
    <hr />
    <simple-counter />
    <hr />
    <hello-world />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/00HelloWorld";
import SimpleCounter from '../components/01SimpleCounter.vue';
import ReactiveCounter from '../components/02ReactiveCounter';
import WatchCounter from '../components/03WatchCounter';
import WatchMultiCounter from '../components/031WatchCounter';
import SimpleCounterCompositionApi from '../components/04SimpleCounterCompositionApi';
import TodoList from '../components/05TodoList';
export default {
  name: 'Home',
  components: {
    HelloWorld,
    SimpleCounter,
    ReactiveCounter,
    WatchCounter,
    WatchMultiCounter,
    SimpleCounterCompositionApi,
    TodoList
}
}
</script>
