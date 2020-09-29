<template>
    <div class="container-createTask">
        <input type="text" placeholder="Insert Title" v-model="title">
        <input type="text" placeholder="Insert Description" v-model="description">
        <button v-on:click="setterToDo()" > Add </button>
    </div>
</template>

<script>
import Switch from '../controllers/Switch';
export default {
   
   name: 'createTask',
   
   data() {
        return {
            
                title: '',
                description: ''
           
        }
    },

    methods: {
        setterToDo: function() {
           
        let   getToDo = {
                'title': this.title,
                'description': this.description
            }

            Switch.setToDo(getToDo)
        },
    }    
}
</script>

<style>
    .container-createTask {
        display: flex;
        flex-direction: column;
        width: 25%;
        margin: 0 auto;
    }

    input {
        margin-bottom: 20px;
        text-align: center;
    }
</style>