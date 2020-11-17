import services from './services';


export default  {
    isLogged(token) {
        return services().get('*', token);
    },
    fetchToDo(token) {
        return services().get('/post', token);
    },
    fetchSingleToDo(todo) {
        return services().get('/post/' + todo.id, todo);
    },
    setToDo(getTodo,token) {
        return services().post('/createTask', getTodo,token);
    },
    deleteTodo(idToDo) {
        return services().delete('/post/' + idToDo);
    },
    updateSingleTodo(todo){
        return services().put('/post/' + todo.id, todo);
    },
    createUser(user) {
        return services().post('/signup', user);
    },
    loginUser(user) {
        return services().post('/login', user);
    }
}