<template>
    <div>
    <ul id="nav" v-if="this.$store.state.userLogged !== ''">
        <li><router-link to="/post"><md-button class="md-raised">Your Tasks </md-button></router-link></li>
        <li><router-link to="/createTask"><md-button class="md-raised">Add New</md-button></router-link> </li>
        <li><router-link  to="#"><md-button class="md-raised" v-on:click="logout()">Logout</md-button></router-link></li>
        <li><router-link  to="#"><md-button class="md-dense md-raised md-primary">Welcome, {{ this.$store.state.username }} </md-button> </router-link></li>
    </ul>
    <button class="hamburgher" v-on:click="toggleHamburgher()" v-if="this.$store.state.userLogged !== ''"></button>
    <ul class="mobile-navbar" v-if="this.$store.state.userLogged !== ''">
        <li class="navbar-item" v-on:click="toggleHamburgher()"><router-link to="/post"><md-button class="md-dense md-raised md-primary">Your Tasks </md-button></router-link></li>
        <li class="navbar-item" v-on:click="toggleHamburgher()"><router-link to="/createTask"><md-button class="md-dense md-raised md-primary">Add New</md-button></router-link> </li>
        <li class="navbar-item"><router-link  to="#"><md-button class="md-dense md-raised md-primary" v-on:click="logout()">Logout</md-button></router-link></li>
    </ul>
    <ul id="nav" v-if="this.$store.state.userLogged ==''">
        <li><router-link to="/"><md-button class="md-raised">Home</md-button></router-link></li>
        <li><router-link  to="/signup"><md-button class="md-raised">Signup</md-button></router-link></li>
        <li><router-link  to="/login"><md-button class="md-raised">Login</md-button></router-link></li>
    </ul>
    <button class="hamburgher" v-on:click="toggleHamburgher()" v-if="this.$store.state.userLogged == ''"></button>
    <ul class="mobile-navbar" v-if="this.$store.state.userLogged == ''">
        <li class="navbar-item" v-on:click="toggleHamburgher()"><router-link to="/"><md-button class="md-dense md-raised md-primary">Home</md-button></router-link></li>
        <li class="navbar-item" v-on:click="toggleHamburgher()"><router-link  to="/signup"><md-button class="md-dense md-raised md-primary">Signup</md-button></router-link></li>
        <li class="navbar-item" v-on:click="toggleHamburgher()"><router-link  to="/login"><md-button class="md-dense md-raised md-primary">Login</md-button></router-link></li>
    </ul>               
    </div>
</template>

<script>

export default {
  name: 'navbar',
  data() {
    return {
      user: '',
      username: '',
      token: ''
    }
  },

  methods: {

        logout() {
            this.$store.state.userLogged = '';
            localStorage.clear();
            this.username = ' ';

            this.$router.push('/');

        },

        toggleHamburgher() {
            let hamburgher = document.querySelector('.hamburgher'); 
            let navbar = document.querySelector('.mobile-navbar');

            navbar.classList.toggle("showNav");
            hamburgher.classList.toggle("showClose");

        }
    }
}

</script>

<style>
body {
    background-color: white;
}

#nav {
    padding: 20px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    margin: 0;
}

#nav a {
    margin: 5px;
}

#nav li {
    list-style-type: none;
}

#nav li:last-child {
    margin-left: 70%;
}


.mobile-navbar {
    display: none;
}

.hamburgher {
    display: none;
}

@media screen and (max-width: 768px){
#nav {
    display: none;
}

.hamburgher {
  position: absolute;
  z-index: 1000;
  top: 20px;
  right: 20px;
  width: 36px;
  height: 36px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  background-image: url("https://ljc-dev.github.io/testing0/ham.svg");
  background-size: 100%;
}

.mobile-navbar {
  position: absolute;
  top: 0;
  margin: 0;
  left: 0;
  background: black;
  display: block;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
   transform: translateY(-100%);
  color: white;
  /* hide the menu above the screen by default */
  /* transition adds a little animation when sliding in and out the menu */
  transition: transform 0.2s ease;
  padding: 0;
  z-index: 999;
}

.mobile-navbar li {
    list-style-type: none;
    text-align: center;
    margin-top: 50px;
}

.hamburgher {
    display: block;
}

.showNav {
  transform: translateY(0);
}

.showClose {
  background-image: url("https://ljc-dev.github.io/testing0/ham-close.svg");
}

}
</style>