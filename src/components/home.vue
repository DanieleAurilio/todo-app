<template>
    <div class="home-container">
        <div class="first-home-container">
            <div class="image">
                <img src="../assets/undraw_Note_list_re_r4u9.png" alt="" srcset="">
            </div>
            <div class="text">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in elit sed urna sagittis consectetur. 
                Etiam faucibus porttitor bibendum. Ut luctus, risus et accumsan elementum, sapien sem tristique lacus, ac luctus dolor sapien et tortor. 
                Aliquam quis tempor ligula. Vestibulum suscipit erat odio, commodo bibendum est placerat vitae. 
                Mauris accumsan interdum turpis. Pellentesque vestibulum nisl velit, at tempus lectus euismod non.
                </p>
            </div>
        </div>

        <div class="second-home-container">
            <div class="text">
                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in elit sed urna sagittis consectetur. 
                Etiam faucibus porttitor bibendum. Ut luctus, risus et accumsan elementum, sapien sem tristique lacus, ac luctus dolor sapien et tortor. 
                Aliquam quis tempor ligula. Vestibulum suscipit erat odio, commodo bibendum est placerat vitae. 
                Mauris accumsan interdum turpis. Pellentesque vestibulum nisl velit, at tempus lectus euismod non.
                </p>
            </div>
            <div class="image">
                <img src="../assets/undraw_Taking_notes_re_bnaf.png" alt="" srcset="">
            </div>
        </div>

        <div class="go-to">
            <p>Sei già registrato</p>
            <md-button to="/login" class="md-primary"> Accedi </md-button>
            <p>oppure</p>
            <md-button to="/register" class="md-primary"> Registrati </md-button>
        </div>
    </div>
</template>

<script>

export default {
    
    name: 'home',
    data() {
        return {

        }
    }, 
    
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    * {
    font-family: 'Roboto', sans-serif;
    }
    .home-container {
    width: 80%;
    margin: 0 auto;
    }

    .first-home-container {
    display: flex;
    }

    .second-home-container {
    display: flex;
    }

    .image {
    width: 45%;
    padding: 20px;
    }

    .text {
    width: 45%;
    text-align: left;
    text-transform: uppercase;
    font-size: 20px;
    line-height: 2;
    }

    .go-to {
        display: flex;
        justify-content: center;
        padding: 40px;
    }

    @media screen and (max-width: 768px) {

    .first-home-container {
        flex-direction: column;
        padding-top: 10%;
    }

    .second-home-container {
        flex-direction: column;
    }

    .image {
        width: 100%;
        padding: 0;
    }

    .text {
        width: 100%;
        font-size: 14px;
    }

    .second-home-container .text {
        order: 1;
    }

    .go-to {
        display: none;
    }
        
    }
</style>

