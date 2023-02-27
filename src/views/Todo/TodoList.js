import React from "react";
import './TodoList.scss';
import AddTodo from "./AddTodo";
import { ToastContainer, toast } from 'react-toastify';

class TodoList extends React.Component {

    // create a state variable
    state = {
        listTodo: [
            { id: 'todo1', title: 'To do homework' },
            { id: 'todo2', title: 'Clean the room' },
            { id: 'todo3', title: 'learn ReactJs' }
        ],
        editTodo: {

        }

    }
    // AddNewto do function
    addNewTodo = (todo) => {
        this.setState({
            listTodo: [...this.state.listTodo, todo]
        })
        toast.success("Added success!");
    }
    // Delele Todo function
    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.listTodo;
        currentTodos = currentTodos.filter(item => item.id !== todo.id)
        this.setState({
            listTodo: currentTodos
        })
        toast.success("Deleted success!");
    }
    // Edit Todo Function
    handleEditTodo = (todo) => {
        let { listTodo, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0

        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listTodoCopy = [...listTodo];
            let objIndex = listTodoCopy.findIndex((item => item.id === todo.id));
            listTodoCopy[objIndex].title = editTodo.title;
            this.setState({
                listTodo: listTodoCopy,
                editTodo: {}
            })
            toast.success("Update todo success!");
            return;
        }
        this.setState({
            editTodo: todo
        })
    }

    handleOnChangeEditTodo = (event) => {
        let editTotoCopy = { ...this.state.editTodo };
        editTotoCopy.title = event.target.value;
        this.setState({
            editTodo: editTotoCopy
        })
    }
    // render function
    render() {
        let { listTodo, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0
        console.log('>>>check empty object', isEmptyObj)
        return (
            <div className="todo-list-container">
                <AddTodo
                    // Send to Child
                    addNewTodo={this.addNewTodo}

                />
                <div className="todo-list-content">
                    {listTodo && listTodo.length > 0 &&
                        listTodo.map((item, index) => {
                            return (
                                <div className="todo-child">
                                    {isEmptyObj === true ?
                                        <span>{index + 1} - {item.title}</span>
                                        :
                                        <>
                                            {editTodo.id === item.id ?
                                                <span>
                                                    {index + 1} - <input value={editTodo.title}
                                                        onChange={(event) => this.handleOnChangeEditTodo(event)}


                                                    />
                                                </span>
                                                :
                                                <span>
                                                    {index + 1} - {item.title}
                                                </span>
                                            }
                                        </>
                                    }
                                    <button className="edit"
                                        onClick={() => this.handleEditTodo(item)}
                                    >
                                        {isEmptyObj === false && editTodo.id === item.id ?
                                            'Save' : 'Edit'

                                        }
                                    </button>
                                    <button className="delete"
                                        onClick={() => this.handleDeleteTodo(item)}
                                    >Delete</button>
                                </div>
                            )

                        })
                    }

                </div>
            </div>
        )

    }

}

export default TodoList;