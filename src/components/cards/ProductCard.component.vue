<template>
    <div class="product-card">
        <h3 class="title">{{product.title}}</h3>

        <ImageCarousel v-bind:productName="product.title" v-bind:images="product.images"/>

        <h4 class="price">{{product.price}} שקלים</h4>

        <p class="description">תיאור: {{product.desc}}</p>
    </div>
</template>

<script>
import ImageCarousel from '@/components/ImageCarousel.component.vue';

export default {
    name: "Product Card",
    components: {
        ImageCarousel
    },
    props: ['product'],
    methods: {}
}
</script>

<style lang="scss" scoped>
@import '../../styles/styles.scss';

.product-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    width: 100%;
    max-width: 23rem;
    height: 40rem;
    padding: 1rem;

    background-color: rgb(223, 223, 223);
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    cursor: pointer;

    .title {
        width: 100%;
        height: 5rem;
        margin: 0;

        text-align: center;
        font-size: 1.3rem;
    }

    .carosel {
        width: 100%;
        height: 100%;
    }

    .price {
        @extend %flex-center;

        width: 100%;
        height: 3rem;
        margin: 0;
    }

    .description {
        width: 100%;
        height: 5rem;
        margin: 0;

        text-align: center;
    }
}
</style>