<template>
    <div :class="'sidebar-container ' + sidebarClass">
        <div class="backdrop" @click="toggleSidebar()"></div>

        <div class="sidebar">
            <div class="close-btn" @click="toggleSidebar()">
                <font-awesome-icon icon="times" />
            </div>

            <h2>קטגוריות</h2>

            <ul class="category__items">
                <li class="category__item" @click="handleCategoryClick('הכל')">הכל</li>

                <li
                    class="category__item"
                    v-for="category in categories"
                    v-bind:key="category.id"
                    @click="handleCategoryClick(category.name)"
                >
                    {{ category.name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'Sidebar',
    props: {
        sidebarClass: String,
        toggleSidebar: Function,
    },
    computed: {
        categories() {
            return this.$store.getters.categories;
        },
    },
    methods: {
        ...mapActions({
            search: 'searchResultFor',
        }),
        handleCategoryClick(category) {
            this.search({ query: category, type: 'FILTER' });
        },
    },
};
</script>

<style lang="scss" scoped>
@import '../../styles/styles.scss';

.sidebar-container {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 200;

    width: 100vw;
    max-height: 0;

    overflow: hidden;

    .backdrop {
        width: 100%;
        height: 100vh;

        background-color: #2c2c2c9a;
    }

    .sidebar {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 300;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        width: 100%;
        max-width: 20rem;
        height: 100vh;
        padding: 4rem 1rem 1rem;

        background-color: $white;
        transform: translateX(400px);
        transition: all 0.5s ease-in-out;

        .close-btn {
            @extend %flex-center;

            position: absolute;
            top: 1rem;
            right: 1rem;

            width: 3rem;
            height: 3rem;

            cursor: pointer;

            svg {
                width: 2.5rem;
                height: 2.5rem;
            }
        }

        h2 {
            width: 100%;
            margin: 0;

            text-align: center;
            font-size: 2.5rem;
        }

        .category__items {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;

            list-style-type: none;
            overflow-y: scroll;

            .category__item {
                @extend %flex-center;

                width: 100%;
                min-height: 4rem;

                border-bottom: 1px solid grey;
                font-size: 1.2rem;
                color: #0d6efd;
                text-align: center;
                cursor: pointer;

                &:hover,
                &:active {
                    color: #0a58ca;
                }

                &:last-child {
                    border-bottom: none;
                }
            }
        }
    }

    &.open {
        max-height: 100vh;

        .sidebar {
            transform: translateX(0);
        }
    }
}
</style>
