<template>
    <div>
        <h2>
            {{ foodName }}
            <img src="../assets/img_quality.svg" v-show="isFavorite">
            <!-- img src="../assets/img_quality.svg" v-show="foodIsFavorite" -->
        </h2>
        <p>{{ foodDesc }}</p>
        <button @click="toggleFavorite">Favorite</button>
    </div>

    <!-- //hide2 -- div @click="countClicks" -->
        <!-- //hide1 -- h2>{{ name }}</h2 -->
        <!-- //hide1 -- p>{{ message }}</p -->
         <!-- //hide2 -- h2>
            {{ foodName }}
            <img src="../assets/img_quality.svg" v-show="foodIsFavorite">
         </h2>
         <p>{{ foodDesc }}</p>
        <p id="red">You clicked me {{ clicks }} times.</p>
        <button @click="toggleFavorite">Favorite</button>
    </div //End hide2 -->
</template>

<script>
export default {
    props: ['foodName','foodDesc','isFavorite'],
    emits: ['toggle-favorite'],
    //props: ['foodName', 'foodDesc', 'isFavorite'],
    // props: {
    //     foodName: {
    //         type: String,
    //         required: true
    //     },
    //     foodDesc: {
    //         type: String,
    //         required: false,
    //         default: 'This is the default description.',
    //         validator: function(value) {
    //             if( 20<value.length && value.length<50 ) {
    //                 return true;
    //             }
    //             else {
    //                 return false;
    //             }
    //         }
    //     },
    //     isFavorite: {
    //         type: Boolean,
    //         required: false,
    //         default: false
    //     }
    // },
    data() {
        return {
            name: 'Apples',
            message: 'I line apples',
            clicks: 0,
            foodIsFavorite: this.isFavorite
        }
    },
    methods: {
        countClicks() {
            this.clicks++;
        },
        toggleFavorite() {
            //this.foodIsFavorite = !this.foodIsFavorite;
            this.$emit('toggle-Favorite', this.foodName);
        }
    }
}
</script>

<style>
  #red {
    font-weight: bold ;
    color: rgb(144, 12, 12);
  }

  img {
    height: 1.5em;
    float: right;
  }
</style>