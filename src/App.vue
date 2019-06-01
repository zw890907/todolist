<template>
  <div id="app">
    <TdHeader/>
    <div class="container" style="margin-top:20px">
      <TdInput @add-todo="onAddTodo"/>
      <TdAllThing
      :todoLength="todoLength"
      :hasCompleteTodoLength="hasCompleteTodoLength"
      :unCompleteTodoLength="unCompleteTodoLength"
      />
      <nav class="panel">
        <p class="panel-heading has-background-danger">未完成事项</p>
        <div class="panel-block is-multiline columns">
          <TdCard 
          v-for="list in unCompleteTodo"
          :name="list.name" 
          :id="list.id" 
          :key="list.id" 
          :hasCompleted="list.hasCompleted"
          @toggle-complete="onToggleComplete"
          />
        </div>
      </nav>
      <nav class="panel">
        <p class="panel-heading has-background-primary">已完成事项</p>
        <div class="panel-block is-multiline columns">
          <TdCard 
          v-for="list in hasCompleteTodo"
          :name="list.name" 
          :id="list.id" 
          :key="list.id" 
          :hasCompleted="list.hasCompleted"
          @toggle-complete="onToggleComplete"
          />
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import TdHeader from './components/td-header.vue'
import TdInput from './components/td-input.vue'
import TdCard from './components/td-card.vue'
import TdAllThing from './components/td-allThing.vue'

export default {
  name: 'app',
  data () {
    return {
      todoLists: [
        {
            id: 1,
            name: '唱歌',
            hasCompleted: true
        },
        {
            id: 2,
            name: '运动',
            hasCompleted: false
        },
        {
            id: 3,
            name: '学习',
            hasCompleted: true
        }
      ]
    }
  },
  methods: {
    onAddTodo (data) {
      let len = this.todoLists.length;
      this.todoLists.push({
          id: len + 1,
          name: data.newTodo,
          hasCompleted: false
      })
    },
    onToggleComplete (data) {
      this.todoLists = this.todoLists.map(list => {
        if (list.id === data.id) {
          list.hasCompleted = !list.hasCompleted
        }
        return list;
      })
    }
  },
  components: {
    TdHeader,
    TdInput,
    TdCard,
    TdAllThing
  },
  computed: {
    // 计算属性  每次数据发生改变时都会重新计算
    // 这里的方法可以直接作为data数据使用
    unCompleteTodo () {
        // 每一个计算属性都是一个方法，return的值就是就是这个属性值
        return this.todoLists.filter(list => {
            return !list.hasCompleted;
        })
    },
    hasCompleteTodo () {
        return this.todoLists.filter(list => list.hasCompleted)
    },
    todoLength () {
        return this.todoLists.length;
    },
    hasCompleteTodoLength () {
        return this.hasCompleteTodo.length;
    },
    unCompleteTodoLength () {
        return this.unCompleteTodo.length;
    }
  }
}
</script>

<style>
  .columns {
    margin: 0;
  }
</style>


