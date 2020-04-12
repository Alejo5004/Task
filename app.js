const app = new Vue({
    el: '#app',
    data: {
        tasks: [],
        status: '',
        name: '',
    },
    methods: {
        addTask(){
            this.tasks.push({
                name: this.name,
                status: false,
                edit: false
            })
            this.name = '';
            localStorage.setItem('tasks-vue', JSON.stringify(this.tasks));
        },
        changeStatus(index){
            this.tasks[index].status = true;
            localStorage.setItem('tasks-vue', JSON.stringify(this.tasks));
        },
        editTask(index){
            this.tasks[index].edit = true;
            localStorage.setItem('tasks-vue', JSON.stringify(this.tasks));
        },
        updateTask(index){
            this.tasks[index].name = this.tasks[index].name;
            this.tasks[index].edit = false;
            localStorage.setItem('tasks-vue', JSON.stringify(this.tasks));
        },
        deleteTask(index){
            this.tasks.splice(index, 1);
            localStorage.setItem('tasks-vue', JSON.stringify(this.tasks));
        },
    },
    created() {
        let dataDB = JSON.parse(localStorage.getItem('tasks-vue'));
        if(dataDB === null){
            this.tasks = [];
        }else{
            this.tasks = dataDB;
        }
    },
})