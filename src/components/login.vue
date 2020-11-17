<template>
    <div class="container-input">
        <div class="input-field">
            <md-field> 
                <md-input type="text" id="email" name="email" v-model="email"></md-input>
                <label for="email">Insert our email</label>
            </md-field>
        </div>

        <div class="input-field">
            <md-field>
                <md-input type="password" name="password" v-model="password"></md-input>
                <label for="email">Insert our Password</label>
            </md-field>
        </div>        
        
        <md-button class="md-dense md-raised md-primary" v-on:click="login()">Login</md-button>
           
    </div>
</template>

<script>
import Vue from 'vue';
import { MdField, MdButton } from 'vue-material/dist/components/';
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import Switch from '../controllers/Switch';

Vue.use(MdField);
Vue.use(MdButton);

export default {
    name: 'login',
    data () {
        return {
            email: '',
            password: ''
        }
    },
    beforeMount() {
        this.isUserLogged();
    },
    methods: {
        
         login() {
            let userCredential = {
                email: this.email,
                password: this.password
            }
         
        Switch.loginUser(userCredential)
        .then(res => { 
                localStorage.setItem('token', res.data);
                this.$store.state.userLogged = res.data;
                
            let tokenobj = {
                headers: {
                    "token": this.$store.state.userLogged
                }
            }
          
            
            if(tokenobj.headers.token) {
                Switch.isLogged(tokenobj).then(res => this.$store.state.username = res.data[0].firstname);
               
            }
                this.$router.push('/post');
            }); 
        },

      isUserLogged() {
        let getToken = localStorage.getItem('token');
        if(getToken) {
            this.$router.push('/post');
        }    
      }
    }
}
</script>

<style>
    .container-input {
        display: flex;
        flex-direction: column;
        width: 25%;
        margin: 0 auto;
    }

    @media screen and (max-width: 768px) {
        .container-input {
            width: 80%;
            padding-top: 15%;
        }
    }
</style>