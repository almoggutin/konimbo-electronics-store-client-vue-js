<template>
    <main class="product-page">
        <ProductCard v-if="product" v-bind:product="product" />

        <ContactFormComponent />
    </main>
</template>

<script>
import ProductCard from '@/components/cards/ProductCard.component.vue';
import ContactFormComponent from '@/components/forms/ContactForm.component.vue';

export default {
    name: 'Product Page',
    components: {
        ProductCard,
        ContactFormComponent,
    },
    data() {
        return {
            product: null,
        };
    },
    async created() {
        const id = this.$route.params.id;

        const product = await this.$store.getters.product(id);
        if (!product) return this.$router.push('/');

        this.product = product;
    },
};
</script>

<style lang="scss" scoped>
@import '../styles/styles.scss';

.product-page {
    @extend %flex-center;
    flex-wrap: wrap;

    gap: 2rem;

    width: 100vw;
    min-height: calc(100vh - 5.6875rem);
    padding: 2rem;
}
</style>
