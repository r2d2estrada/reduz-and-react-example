import React from 'react';
import FilterLink from './FilterLink';
import { VisibilityFilters } from './../utils/store/actions';

const Filters = () => {
    return (
        <div className='Filters'>
            <span>Show: </span>
            <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Show Completed</FilterLink>
        </div>
    );
}

export default Filters;