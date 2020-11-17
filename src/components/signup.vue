<template>
    <div class="container-signup">
        <md-field>
            <md-input type="text" v-model="firstname"></md-input>
            <label>Insert Firstname</label>
        </md-field>
        <md-field>
        <md-input type="text" v-model="lastname"></md-input>
            <label>Insert Lastname</label>
        </md-field>
        <md-field>
            <md-input type="text" v-model="email"></md-input>
            <label>Inser Email</label>
        </md-field>
        <md-field>  
            <md-input type="text" v-model="password"></md-input>
            <label>Insert Password</label>
        </md-field>
        
        <md-button class="md-dense md-raised md-primary" v-on:click="signup()"> Signup </md-button>
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
    beforeMount() {
        this.isUserLogged();
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
        },
        isUserLogged() {
            let getToken = localStorage.getItem('token');
            if(getToken) {
                this.$router.push('/post')
            }
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

    @media screen and (max-width: 768px) {
        .container-signup {
            width: 80%;
            padding-top: 15%;
        }
    }
</style>