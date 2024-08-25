<template>
<<<<<<< HEAD

  <!-- //exercise 04 -->
  <h3>Todo List</h3>
  <p>In this example, the style attribute falls through from App.vue into the li element which is the components root element.</p>
  <ul>
    <todo-item 
    v-for="x in items"
    :key="x"
    :item-name="x"
    style="background-color: lightgreen;"
    />
  </ul>
  <input type="text" v-model="newItem">
  <button @click="addItem">Add</button>
  <!-- //END exercise 04 -->

  <!-- //exercise 03 -->
  <!-- h1>Food</h1>
  <p>Food items are generated with v-for from the 'foods' array.</p>
  <button @click="removeItem">Remove Item</button>
  <div id="wrapper">
    <food-item 
      v-for="x in foods"
      :key="x.name"
      :food-name="x.name" 
      :food-desc="x.desc"
      :is-favorite="x.favorite" 
      @toggle-favorite="receveEmit"/>
  </div -->
  <!-- //END exercise 03 -->

  <!-- //exercise 02 -->
  <!-- //hide2 -- food-item 
    food-name="Apples" 
    food-desc="Apples are a type of fruit that grow on trees." 
    v-bind:is-favorite="true"/>
  <food-item 
    food-name="Pizza" 
    food-desc="Pizza has a bread base with tomato sauce, cheese, and toppings on top." 
    v-bind:is-favorite="false"/>
  <food-item 
    food-name="Rice" 
    
    v-bind:is-favorite="false" //Endhide2 -- />
    !-- // hide1 food-desc="Rice is a type of grain that people like to eat." -->
  <!-- //END exercise 02 -->

  <!-- //exercise 01 -->
  <!-- h1>Hello simple vue world!</h1>
  <h2>{{ message }}</h2 -->
  <!-- //END exercise 01 -->
</template>

<script>
export default {
  data() {
    return {
      message: 'This is a simple text',
      // for exercise 04 used with TodoItem.vue
      newItem: '',
      items: ['Buy apples','Make pizza','Mow the lawn'],
      //for exercise 02 & 03 used with FoodItem.vue
      foods: [
        { name: 'Apples',
          desc: 'Apples are a type of fruit that grow on trees.',
          favorite: true
        },
        { name: 'Pizza',
          desc: 'Pizza has a bread base with tomato sauce, cheese, and toppings on top.',
          favorite: false
        },
        { name: 'Rice',
          desc: 'Rice is a type of grain that people like to eat.',
          favorite: false
        },
        { name: 'Fish',
          desc: 'Fish is an animal that lives in water.',
          favorite: true
        },
        { name: 'Cake',
          desc: 'Cake is something sweet that tastes good.',
          favorite: false
        }
      ]
    }
  },
  methods: {
    removeItem() {
        this.foods.splice(1,1);
    },
    receveEmit(foodId) {
      const foundFood = this.foods.find(
        food => food.name === foodId
      );
      foundFood.favorite = !foundFood.favorite;
      
      //alert( "You clicked: " + foodId );
    },

    // exercise 04 TodoItem.vue
    addItem() {
      this.items.push(this.newItem);
      this.newItem = '';
    }
=======
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
>>>>>>> 44c470e (simple-web-01 2nd commit)
  }
}
</script>

<style>
<<<<<<< HEAD
  /* #app > div {
    border: dashed black 1px;
    display: inline-block;
    width: 120px;
    margin: 10px;
    padding: 10px;
    background-color: lightgreen;
  }
  #app > div:hover {
    cursor: pointer;
  } */

  #wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  #wrapper > div {
    border: dashed black 1px;
    flex-basis: 120px;
    margin: 10px;
    padding: 10px;
    background-color: lightgreen;
  }

/* for exercise 4 TodoItems.vue */
ul {
    width: 150px;
    list-style-type: none;
  }
=======
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
>>>>>>> 44c470e (simple-web-01 2nd commit)
</style>
