<template id="td-allThing">
    <p style="margin-bottom:10px">
        你共有<b class="has-text-success">{{todoLength}}</b>件事项，
        已处理<b class="has-text-primary">{{hasCompleteTodoLength}}</b>件事项，
        还有<b class="has-text-danger">{{unCompleteTodoLength}}</b>件待办事项哟！
    </p>
</template>

<script>
export default {
    name: 'td-allThing',
    props: {
        todoLength: String,
        hasCompleteTodoLength: String,
        unCompleteTodoLength: String
    }
}
</script>

<style>

</style>
