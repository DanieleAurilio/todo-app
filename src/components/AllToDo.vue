<template>
    <div class="container-all">
        <div  class="list" v-for="(todo, index) in todos" v-bind:key="index"> 
                <div class="first-container">
                    <div class="title">
                        <p> {{todo.title}} </p>
                    </div>

                    <div class="description">
                        <p> {{todo.description}} </p>
                    </div>
                </div>
                    
                <div class="second-container">
                    <div class="update">
                        <md-button class="md-raised md-accent" v-on:click="deleteToDo(todo._id)">  Delete </md-button>
                    </div>

                    <div class="remove">
                        <md-button class="md-raised" v-on:click="updateToDo(todo._id)"> Update </md-button>
                    </div>
                </div>               
        </div>

        <div v-if="!todos" class="messageError-container"> 
            <div class="message">
                <h1> {{ this.errorMsg }} </h1>
                <img src="../assets/undraw_noted_pc9f.png">
            </div>
        </div>  

    </div>    
</template>

<script>
import Switch from '../controllers/Switch';
//import axios from 'axios';
export default {
    name: 'AllToDo',   
    data () {
        return {
            todos: '',
            errorMsg:''
        }
    },
    beforeMount() {
        this.setHeaders();
    },
    mounted() {
        this.getToDo();
    },
    
    methods: {
        
        deleteToDo(removedToDo) {
            Switch.deleteTodo(removedToDo);
        },
        
        updateToDo(getId) {
            this.$router.push('/post/' + getId);
        },

        setHeaders() {
            let getToken = localStorage.getItem('token');
            if(!getToken){
                this.$router.push('/login');
            } else{
                let tokenobj = {
                headers: {
                    "token": getToken
                }
              }
              return tokenobj;
            }   
        },

        getToDo() {   
            let token = this.setHeaders();
            
            Switch.fetchToDo(token)
            .then( res => res.data.length > 0 ? this.todos = res.data : this.errorMsg = ` Ops...There isn't nothing here. Start take notes today! `);
            
        } 
    }
}
</script>

<style>

    .container-all {
        text-align: center;
    }

    .list {
        display: flex;
        width: 80%;
        margin: 0 auto;
    }

 

    .first-container{
        display: flex;
        width: 70%;
    }

    .first-container div {
        width: 50%;
    }

    .second-container {
        display: flex;
        width: 30%;
        justify-content: center;
    }


    @media screen and (max-width: 768px){
        .list {
            flex-direction: column;
            width: 100%;
        }
        .first-container{
            flex-direction: column;
            width: 100%;
        }

        .first-container div{
            margin: 0 auto
        }

        .second-container {
            width: 100%;
        }

    }
</style>