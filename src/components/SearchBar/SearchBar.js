import React from 'react';
import { useState } from 'react';
import './SearchBar.css';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
}

const SearchBar = ({ searchYelp }) => {

    const [term, setTerm] = useState('')
    const [location, setLocation] = useState('')
    const [sortBy, setSortBy] = useState('best_match')

    function handleSearch(e) {
        if(term === `` && location === ``){
            console.log('error')
            e.preventDefault()
        } else {
            searchYelp(term, location, sortBy)
            e.preventDefault()
        }
    }

    function handleTermChange(e) {
        setTerm(e.target.value)
    }

    function handleLocationChange(e) {
        setLocation(e.target.value)
    }

    function getSortByClass(sortByOptionValue) {
        if(sortByOptionValue === sortBy) {
            return `active`
        }
        return ''
    }
    
    function renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption]
            return <li key={sortByOptionValue} onClick={() => setSortBy(sortByOptionValue)} className={getSortByClass(sortByOptionValue)}>{sortByOption}</li>    
        })
    }

    return (
        <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                    {renderSortByOptions()}
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input placeholder="Search Businesses" onChange={handleTermChange}/>
                <input placeholder="Where?" onChange={handleLocationChange}/>
             </div>
             <div className="SearchBar-submit">
                <a onClick={handleSearch}href="www.#.com">Let's Go</a>
             </div>
        </div>
    )
}

export default SearchBar;