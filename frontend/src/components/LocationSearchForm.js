
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchForm = (props) => {
    
    const [title, setTitle] = useState('');
    
    const onFormSubmit = (event) => {
        event.preventDefault();
        if (title !== '') {
            props.onSubmitCallback(title);
            setTitle('');
        }
    }
    const onTitleChange = (event) => {
        setTitle(event.target.value)
    }
    
    return (
        <form
        id="search-form"
        onSubmit={onFormSubmit}>
        <label htmlFor="text"></label>
        <input
            name="text"
            onChange={onTitleChange}
        />
        <input type="submit"
        value="Search"
        />
        </form>
        );
    }
SearchForm.propTypes = {
    onSubmitCallback: PropTypes.func.isRequired,
};
export default SearchForm;