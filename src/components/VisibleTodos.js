import { connect } from 'react-redux';
import { toggleTodo, VisibilityFilters } from './../utils/store/actions';
import TodoList from './TodoList';

const getVisibleTodos = (todos, filter) => {
    switch(filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        default: throw new Error('Unknown filter ' + filter);
    }
}

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = (dispatch) => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(TodoList);