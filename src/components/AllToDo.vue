<template>
    <div class="container-all">
        <h1> Benvenuto </h1>
        <div class="list"> 
            <ul>
                <li class="list" v-for="(todo, index) in todos" v-bind:key="index" > 
                    <p> {{todo.title}} - {{todo.description}} </p> 
                    <button v-on:click="deleteToDo(todo._id)">  Delete </button> 
                    <button v-on:click="updateToDo(todo._id)"> Update </button> </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Switch from '../controllers/Switch';
export default {
    name: 'AllToDo',   
    data () {
        return {
            todos: ''
        }
    },
    mounted() {
        this.getToDo();
    },
    methods: {
        
        async getToDo() {
            const response = await Switch.fetchToDo();
            this.todos = response.data;
        },
        
        deleteToDo(removedToDo) {
            Switch.deleteTodo(removedToDo);
        },
        
        updateToDo(getId) {
            this.$router.push('/post/' + getId);
        }
    
    }
}
</script>

<style>
    ul {
        margin: 0;
        padding: 0;
    }
    ul .list {
        list-style-type: none;
        display: flex;
        justify-content: center;
    }

    .list button{
        background: none;
        border: none;
        margin-left: 10px;
    }
</style>