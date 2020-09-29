<template>
    <div class="container-updater">
        <h1> UPDATE YOUR TASK </h1>
        <input type="text" name="title" placeholder="title" v-model="title">
        <input type="text" name="description" placeholder="description" v-model="description">
        <button v-on:click="updateTask()">Edit Task</button>
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

</style>