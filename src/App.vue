<template>
  <div id="app">   
    <app-todo-list title="Tarefas por completar" v-bind:todo="incompletedTasks" /> 
    <div class="divisor"></div>
    <app-todo-list title="Tarefas Terminadas" v-bind:todo="completedTasks" /> 
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoList from './components/TodoList.vue';
import { observer } from 'mobx-vue';
import store from './store';

@observer
@Component({
  components: {
    'app-todo-list': TodoList,
  },
})
export default class App extends Vue {
   public data() {
    return {
      todo: store.todo,
    };
  }

  get incompletedTasks() {
    return store.getIncompletedTasks;
  }
  get completedTasks() {
    return store.getCompletedTasks;
  }
}
</script>

<style lang="scss">

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

div.divisor {
  height: 40px;
  width: 100%;
  background-color: #333;
}
</style>
