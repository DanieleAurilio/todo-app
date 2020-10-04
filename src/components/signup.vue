<template>
    <div class="container-signup">
        <input type="text" placeholder="insert firstame" v-model="firstname">
        <input type="text" placeholder="insert lastame" v-model="lastname">
        <input type="text" placeholder="insert email" v-model="email">
        <input type="text" placeholder="insert password" v-model="password">
        <button v-on:click="signup()"> Signup </button>
    </div>
</template>

<script>
import Switch from '../controllers/Switch';
export default {

    name: 'signupUser',

    data() {
        return {
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        }
    },

    methods: {
        signup() {
            let user = {
                firstname: this.firstname,
                lastname: this.lastname,
                email: this.email,
                password: this.password
            }  
            
            Switch.createUser(user);
        }
    }    
}
</script>

<style>
    .container-signup {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        width: 25%;
    }
</style>