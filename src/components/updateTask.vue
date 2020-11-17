<template>
    <div class="container-updater">
        <h1> UPDATE YOUR TASK </h1>
        <md-field> 
            <label>Task's Title</label>
            <md-input type="text" name="title"  v-model="title">{{title}}</md-input>
        </md-field>
        <md-field>    
            <label>Task's Description</label>
            <md-textarea type="text" name="description" v-model="description">{{description}}</md-textarea>
        </md-field>
        

        <md-button class="md-dense md-raised md-primary" v-on:click="updateTask()">Edit Task</md-button>
    </div>
</template>ù

<script>
import Switch from '../controllers/Switch';
export default {
    name: "updateTask",
    data () {
        return {
            title: '',
            description: ''
        }
    },
    mounted() {
        this.getTodo();
    },
    components: {

    },
    methods: {
         getTodo: async function() {
            const response = await Switch.fetchSingleToDo({
                id: this.$route.params.id
            });
            
            this.title = response.data.title;
            this.description = response.data.description;

            },
        updateTask: function() {
            let updatedTask = {
                id: this.$route.params.id,
                title: this.title,
                description: this.description
            } 
            
            Switch.updateSingleTodo(updatedTask);

            this.$router.push('/post');
        }
    }
}
</script>

<style>
    .container-updater {
        display: flex;
        flex-direction: column;
        width: 25%;
        margin: 0 auto
    }

    @media screen and (max-width: 768px){
        .container-all {
            padding-top: 15%;
        }
        .container-updater {
            width: 80%;
            padding-top: 15%;
        }

        h1 {
            line-height: 1;
        }
    }
</style>