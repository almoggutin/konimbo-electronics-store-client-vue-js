<template>
    <header class="main-header">
        <div class="main-header-container">
            <h1 @click="redirectToHome()">חנות אלקטרוניקה</h1>

            <button class="toggle-btn" v-if="isHomePage()" @click="toggleSidebar()">
                <font-awesome-icon icon="bars" />
            </button>
        </div>

        <Sidebar v-if="isHomePage()" :sidebarClass="sidebarClass" :toggleSidebar="toggleSidebar" />
    </header>
</template>

<script>
import Sidebar from './Sidebar.component.vue';

export default {
    name: 'Header',
    components: {
        Sidebar,
    },
    data() {
        return {
            sidebarClass: '',
        };
    },
    methods: {
        isHomePage() {
            const currentRoute = this.$route.name;

            return currentRoute === 'Home';
        },
        redirectToHome() {
            this.$router.push('/');
        },
        toggleSidebar() {
            this.sidebarClass = this.sidebarClass === '' ? 'open' : '';
        },
    },
};
</script>

<style lang="scss">
@import '../../styles/styles.scss';

.main-header {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 100;
    padding: 1rem;

    width: 100vw;
    min-height: 5rem;

    background-color: $darkGray;

    .main-header-container {
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 100%;
        height: 100%;
        margin: auto;

        @media (min-width: 90rem) {
            width: 90rem;
        }

        h1 {
            width: 90%;
            margin: 0;

            color: $lightGrey;
            font-size: 1.8rem;
            cursor: pointer;

            @media (min-width: 40rem) {
                width: 100%;

                font-size: 2.5rem;
            }
        }

        .toggle-btn {
            @extend %flex-center;

            width: 3rem;
            height: 3rem;
            padding: 0;

            background-color: transparent;
            border: 1px solid #868686;
            border-radius: 5px;

            &:hover,
            &:active {
                background-color: #444444;
            }

            svg {
                width: 1.8rem !important;
                height: 1.8rem;

                color: $lightGrey;
                cursor: pointer;
            }
        }
    }
}
</style>
