<template>
    <div class="search-bar">
        <font-awesome-icon icon="search" />

        <input type="text" v-model.trim="searchInput" @input="handleSearch" />
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'Search Bar',
    data() {
        return {
            searchInput: '',
        };
    },
    methods: {
        ...mapActions({
            search: 'searchResultFor',
        }),
        handleSearch() {
            this.search({ query: this.searchInput, type: 'SEARCH' });
        },
    },
};
</script>

<style lang="scss" scoped>
@import '../styles/styles.scss';

.search-bar {
    display: flex;
    align-items: center;
    gap: 1rem;

    width: 60%;
    min-width: 20rem;
    max-width: 40rem;
    height: 3.5rem;
    padding: 5px 1rem;

    background-color: $darkGray;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;

    svg {
        color: $white;
    }

    input {
        width: 100%;
        height: 100%;
        padding: 0 10px;

        border: none;
        background-color: transparent;
        color: $white;
        font-size: 1rem;
    }
}
</style>
