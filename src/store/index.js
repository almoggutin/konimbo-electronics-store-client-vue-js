import { createStore } from 'vuex';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const API_URL = process.env.VUE_APP_API_URL;

const store = createStore({
    state() {
        return { products: [], catagories: new Set(), searchResult: [] };
    },
    mutations: {
        initStore(state, data) {
            state.products = data;
            state.searchResult = data;
            state.products.forEach((product) => state.catagories.add(product.store_category_title));
        },
        updateSearchResult(state, products) {
            state.searchResult = products;
        },
        resetSearchResult(state) {
            state.searchResult = state.products;
        },
    },
    actions: {
        async initStore({ commit }) {
            try {
                const result = await axios.get(API_URL);

                commit('initStore', result.data);
            } catch (err) {
                commit('initStore', []);
            }
        },
        searchResultFor({ dispatch, state }, { query, type }) {
            const update = productsValidation(type, query);
            const searchProducts = update ? state.products.filter(productsFilterFunction(type, query)) : null;
            dispatch('handleSearchResult', { searchProducts, update });
        },
        handleSearchResult({ commit }, { searchProducts, update }) {
            if (update) commit('updateSearchResult', searchProducts);
            else commit('resetSearchResult');
        },
    },
    getters: {
        categories(state) {
            return [...state.catagories]
                .sort((a, b) => b.localeCompare(a))
                .map((category) => ({ id: uuidv4(), name: category }));
        },
        product: () => async (id) => {
            try {
                const result = await axios.get(`${API_URL}?id=${id}`);

                const product = result.data[0];

                return product;
            } catch (err) {
                return null;
            }
        },
    },
});

const productsFilterFunction = (type, query) => {
    switch (type) {
        case 'FILTER':
            return (product) => product.store_category_title === query;
        case 'SEARCH':
            return (product) => product.title.includes(query);
        default:
            throw new Error('Store Filter Function Error: Invalid Type');
    }
};

const productsValidation = (type, query) => {
    switch (type) {
        case 'FILTER':
            return query != null && query !== 'הכל';
        case 'SEARCH':
            return query != null;
        default:
            throw new Error('Store Filter Function Error: Invalid Type');
    }
};

export default store;
