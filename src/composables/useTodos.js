import { reactive, toRefs } from 'vue'

export default function() {
    const data = reactive ({
        todo: null,
        todos: []
    })

    const addTodo = () => {
        if (data.todo.length > 1) {
            data.todos.push(data.todo)
        }
    }
}