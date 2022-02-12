<template>
    <Header />

    <router-view></router-view>
</template>

<script>
import Header from '@/components/shared/Header.component.vue';

export default {
    name: 'App',
    components: {
        Header,
    },
    created() {
        this.$store.dispatch('initStore');
    },
    errorCaptured(err) {
        alert(err.message);
        return false;
    },
};
</script>

<style lang="scss">
@import './styles/styles.scss';
</style>
