import React, {Component} from 'react';
import { connect } from 'react-redux';
import './sass/App.scss';
import { pickColor, newTodo, addTodo, completeTodo, removeTodo} from './actions/todoList';



class App extends Component {

pickColor = (rgb) => {
    this.props.pickColor(rgb);
}
newTodo = (e) => {
    this.props.newTodo({todo: e.target.value, completed: false});
}
addTodo = (e) => {
    e.preventDefault();
    if (document.getElementById('todo_input').value !== '') {
        this.props.addTodo();
    }
    document.getElementById('todo_input').value = '';
}
completeTodo = (index) => {
    this.props.completeTodo(index);
}
removeTodo = (index) => {
    this.props.removeTodo(index);
}

render() {
    const {todos, todoColor} = this.props;
    const todo = todos.map((element, index) => {
        return  (
            <div key={index} style={{backgroundColor: element.color}} className="todo">
                <h2 style={{textDecoration: element.completed ? 'line-through' : 'none'}} onClick={() => this.completeTodo(index)}> {element.todo} </h2>
                {element.completed ? <img alt="check box" src="https://img.icons8.com/ios/100/000000/checked-checkbox.png"/> : <img alt="unchecked box" src="https://img.icons8.com/ios/100/000000/unchecked-checkbox.png"/>}
                <img onClick={() => this.removeTodo(index)} alt="delete button" src="https://img.icons8.com/android/24/000000/trash.png"/>
            </div> )});
    return (
        <div>
            <div id="header"><h1><span className="green">.</span><span className="pink">.</span><span className="yellow">.</span> Office Notes <span className="yellow">.</span><span className="pink">.</span><span className="green">.</span></h1></div>
            <div id="todo_board">
                <div id="color_picker">
                    <div onClick={() => this.pickColor('#f8da79')} className={todoColor === '#f8da79' ? "selected" : ''} id="yellow_paper"/>
                    <div onClick={() => this.pickColor('#f899d1')} className={todoColor === '#f899d1' ? "selected" : ''} id="pink_paper"/>
                    <div onClick={() => this.pickColor('#6eeb89')} className={todoColor === '#6eeb89' ? "selected" : ''} id="green_paper"/>
                </div>
                {todo}
                <form>
                    <input id="todo_input" type="text" name="todo" placeholder="next todo" onChange={(e) => this.newTodo(e)}/>
                    <input type="submit" style={{display: 'none'}} onClick={(e) => this.addTodo(e)}/>
                </form>
            </div>
        </div>
        )
    }
}

// Mapping state, from the store, to this components props. 
// Mapping the relevant state that this component needs. 
const mapStateToProps = storeState => storeState.todoReducer;

export default connect(mapStateToProps, {pickColor, newTodo, addTodo, completeTodo, removeTodo})(App);