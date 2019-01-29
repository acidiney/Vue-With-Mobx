<template>
  <div>
    <h2>{{title}}</h2>
    <table>
      <thead>
        <tr>
          <td>Descrição</td>
          <td>Ações</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in todo" v-bind:key="key">
          <td>{{ item.role }}</td>
          <td>
            <button @click="toogleStateTodo(todo)">Finalizar</button>
            <button @click="DeleteTask(todo)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class TodoList extends Vue {
  @Prop() private title!: string;
  @Prop() private todo!: Object[];
}
</script>