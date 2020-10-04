import services from './services';


export default  {
    fetchToDo() {
        return services().get('/post');
    },
    fetchSingleToDo(todo) {
        return services().get('/post/' + todo.id, todo);
    },
    setToDo(getTodo) {
        return services().post('/createTask', getTodo);
    },
    deleteTodo(idToDo) {
        return services().delete('/post/' + idToDo);
    },
    updateSingleTodo(todo){
        return services().put('/post/' + todo.id, todo);
    },
    createUser(user) {
        return services().post('/signup', user);
    }
}