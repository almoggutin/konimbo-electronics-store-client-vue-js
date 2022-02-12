<template>
    <div class="image-carousel">
        <div class="images-container">
            <img v-bind:src="currentImage" v-bind:alt="`${productName} - ${index}`"/>
        </div>

        <div class="btns-container">
            <button type="button" @click="handleNextImage">
                <font-awesome-icon icon="arrow-right" />
            </button>

            <button type="button" @click="handlePreviousImage">
                <font-awesome-icon icon="arrow-left" />
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Image Carousel",
    props: ['productName', 'images'],
    data() {
        return {
            index: 0,
        }
    },
    computed: {
        currentImage() {
            const image = this.images[this.index];

            if (image != null) return image.url;
            
            return 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1276px-Placeholder_view_vector.svg.png';
        }
    },
    methods: {
        updateIndex(directionValue) {
            const updatedIndex = this.index + directionValue;
            
            switch(updatedIndex) {
                case -1:
                    this.index = this.images.length - 1;
                    break;
                case this.images.length:
                    this.index = 0;
                    break;
                default:
                    this.index = updatedIndex;                    
            } 
        },
        handleNextImage(event) {
            event.stopPropagation();

            this.updateIndex(1);
        },
        handlePreviousImage(event) {
            event.stopPropagation();
            
            this.updateIndex(-1);
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/styles.scss';

    .image-carousel {
        width: 100%;
        height: 22rem;

        .images-container {
            width: 100%;
            height: calc(100% - 3.5rem);

            img {
                width: 100%;
                height: 100%;
            }
        }

        .btns-container {
            width: 100%;
            height: 3.5rem;

            button {
                width: 50%;
                height: 100%;

                background-color: $darkGray;
                cursor: pointer;

                &:hover {
                    background-color: #3c3d41;
                }

                svg {
                    width: 1.5rem;
                    height: 1.5rem;

                    color: $white;
                }
            }
        }
    }
</style>
