<template>
    <div>
        <h1>About page</h1>
        {{places}}
    </div>
</template>

<script>
import store from '@/store';

    export default {
        name:'About',
        computed:{
            places(){
                return store.state.about
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>