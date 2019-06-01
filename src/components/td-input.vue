<template id="td-input">
    <div class="columns">
        <div class="column is-one-quarter">
            <div class="field">
                <div class="control">
                    <input 
                    class="input is-rounded is-warning" 
                    type="text" placeholder="输入待办事项" 
                    v-model="newTodo" 
                    ref="val" 
                    @keyup.enter="onAddTodo"
                    >
                </div>
            </div> 
        </div> 
        <div class="column is-one-quarter">
            <a class="button is-warning" @click="onAddTodo">添加</a>
        </div> 
    </div>
</template>

<script>
export default {
    name: 'td-input',
    data () {
        return {
            newTodo: ''
        }
    },
    methods: {
        onAddTodo () {
            this.$emit('add-todo', {
                newTodo: this.newTodo
            });
            this.newTodo = '';
            this.$refs.val.focus();
        }
    }
}
</script>

<style>

</style>
