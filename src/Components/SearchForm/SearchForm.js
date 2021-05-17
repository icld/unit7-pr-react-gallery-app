import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';


import './SearchForm.css'

class SearchForm extends Component {

    state = {
        searchText: '',
        headerTitle: 'Just Another Photo Search App'
    }

    onSearchChange = e => {
        this.setState({ searchText: e.target.value })
    }

    handleSubmit = e => {

        e.preventDefault();
        let path = `/search/${this.state.searchText}`
        // this.props.onSearch(this.query.value);
        this.props.history.push(path)
        this.props.onSearch(this.state.searchText)
        e.currentTarget.reset()
    }

    handleTitleEnter = e => {
        this.setState({ headerTitle: 'Go Home!' })




    }
    handleTitleLeave = e => {
        this.setState({ headerTitle: 'Just Another Photo Search App' })
    }

    render() {
        return (
            <div className="search-header">
                <NavLink className='header-title' to='/' onMouseEnter={this.handleTitleEnter} onMouseLeave={this.handleTitleLeave}>{this.state.headerTitle}</NavLink>
                <form className="search-form"
                    onSubmit={this.handleSubmit}>
                    <input type="search"
                        name="search"
                        placeholder="Search some pics...."
                        ref={(input) => this.query = input}
                        onChange={this.onSearchChange}
                        required />
                    <button type="submit" className="search-button">
                        <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                            <path d="M0 0h24v24H0z" fill="none" />
                        </svg>
                    </button>
                </form>
            </div>
        )
    }

}

export default withRouter(SearchForm);