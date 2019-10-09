import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './../utils/store/actions';

const AddTodo = ({ dispatch }) => {
    let input;

    const handleChange = (node) => input = node;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.value.trim()) {
            return;
        }
        dispatch(addTodo(input.value));
        input.value = '';
    }

    return (
        <div className='AddTodo'>
            <form onSubmit={handleSubmit}>
                <input type='text' ref={handleChange}/>
                <button type='submit'>Add Todo</button>
            </form>
        </div>
    );
}

export default connect()(AddTodo);