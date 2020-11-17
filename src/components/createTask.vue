<template>
    <div class="container-createTask">
        <h1>CREATE NEW TASK</h1>
        <md-field> 
            <md-input type="text" v-model="title"></md-input>
            <label>Insert Title</label>
        </md-field>
        <md-field> 
            <md-textarea type="textarea" v-model="description"></md-textarea>
            <label>Insert description</label>
        </md-field>

        <md-button class="md-dense md-raised md-primary" v-on:click="setterToDo()"> Add </md-button>
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
    mounted() {
        this.getToken();
    },
    methods: {
        
        getToken() {
            let getToken = localStorage.getItem('token');
            if(!getToken){
                this.$router.push('/login');
            }
            let tokenobj = {
                headers: {
                    "token": getToken
                }
            }

            return tokenobj;
           
        },

        setterToDo: async function() {
            var header = this.getToken();
            
            let getToDo = {
                'title': this.title,
                'description': this.description
            }

            Switch.setToDo(getToDo,header);

            this.$router.push('/post')
        }
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

    @media screen and (max-width: 768px){
        .container-createTask {
            width: 80%;
            padding-top: 15%;
        }
    }
</style>