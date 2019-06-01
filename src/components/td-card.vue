<template id="td-card">
    <div class="column is-one-quarter">
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">事项名称</p>
                <a href="javascript:;" class="card-header-icon" aria-label="more options">
                    <span class="icon">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </a>
            </header>
            <div class="card-content">
                <div class="content">{{name}}</div>
            </div>
            <footer class="card-footer">
                <a href="javascript:;" class="card-footer-item has-text-primary" :class="{'has-text-danger': hasCompleted}">{{hasCompleted ? '已' : '未'}}完成</a>
                <a 
                href="javascript:;" 
                class="card-footer-item has-text-primary"
                :class="{'has-text-danger': !hasCompleted}" 
                @click="onToggleComplete"
                >标记{{hasCompleted ? '未' : '已'}}完成</a>
            </footer>
        </div>  
    </div>
</template>

<script>
export default {
    name: 'td-card',
    props: {
        id: Number,
        name: String,
        hasCompleted: Boolean
    },
    methods: {
        onToggleComplete () {
            this.$emit('toggle-complete', {
                id: this.id
            })
        }
    }
}
</script>

<style>

</style>
