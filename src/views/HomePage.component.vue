<template>
    <main class="home-page">
        <SearchBar />

        <div class="items-container">
            <ProductCard
                v-for="product in products"
                v-bind:key="product.id"
                v-bind:product="product"
                @click="handleClick(product)"
            />
        </div>
    </main>
</template>

<script>
import SearchBar from '@/components/SearchBar.component.vue';
import ProductCard from '@/components/cards/ProductCard.component.vue';
import { mapState } from 'vuex';

export default {
    name: 'Home Page',
    components: {
        SearchBar,
        ProductCard,
    },

    methods: {
        handleClick(product) {
            this.$router.push(`/products/${product.id}`);
        },
    },
    computed: {
        ...mapState({
            products: 'searchResult',
        }),
    },
};
</script>

<style lang="scss" scoped>
.home-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    width: 100vw;
    min-height: calc(100vh - 5.6875rem);
    padding: 1rem;

    .items-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-wrap: wrap;
        gap: 2rem;

        width: 100%;
        max-width: 75rem;
        min-height: calc(100vh - 11.5rem);

        @media (min-width: 40rem) {
            flex-direction: row;
            justify-content: center;
        }
    }
}
</style>
