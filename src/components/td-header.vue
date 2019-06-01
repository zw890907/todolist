<template id="td-header">
    <section class="hero is-success">
        <div class="hero-body">
            <div class="container">
                <img src="../assets/logo.png" alt="" class="logo">
                <div class="word">
                    <h1 class="title">
                        我的待办事项
                    </h1>
                    <h3 class="subtitle">
                        快来处理吧！你的待办事项有点多哟！
                    </h3>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'td-header'
}
</script>

<style>
    .logo{
        width: 50px;
        height: 60px;
        float: left;
    }
    .word{
        float: left;
        margin-left: 20px;
    }
</style>
