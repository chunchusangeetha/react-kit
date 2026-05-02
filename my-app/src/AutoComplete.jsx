import { useEffect, useRef, useState } from "react";
import './Autocomplete.css';

const GITHUB_URL = `https://api.github.com/search/users?q=`;

const RECENT_SEARCHS = 'recent_search';
export default function AutoComplete(props) {

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [recent, setRecent] = useState([]);
    const timeOutRef = useRef(null);

    useEffect(() => {
        const saved = localStorage.getItem(RECENT_SEARCHS);
        if (saved) {
            setRecent(JSON.parse(saved));
        }
    }, [])

    const fetchUser = async (q) => {
        const data = await fetch(GITHUB_URL + q);
        const res = await data.json();
        setResults(res?.items?.slice(0, 10) ?? []);
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        if (timeOutRef.current) {
            clearTimeout(timeOutRef.current);
        }
        timeOutRef.current = setTimeout(() => {
            if (value.length > 2) {
                fetchUser(value);
            } else {
                setResults([]);
            }
        }, 500)
    }

    const saveToLocalStorage = (username) => {
        const updatedList = [username, ...recent.filter(item => item !== username)];
        if (updatedList.length > 10) {
            updatedList.pop();
        }
        setRecent(updatedList);
        localStorage.setItem(RECENT_SEARCHS, JSON.stringify(updatedList));
    }

    const handleSelect = (username) => {
        setQuery(username);
        setResults([]);
        //save to local storage
        saveToLocalStorage(username);
    }
    return (
        <div className="autocomplete-container">
            <h2 className="autocomplete-title">Github Username Search</h2>
            <input
                className="autocomplete-input"
                placeholder="Search your username"
                value={query}
                onChange={handleChange}
            />
            {
                results.length > 0 &&
                <ul className="autocomplete-results">

                    {
                        results.map(user => {
                            return (
                                <li key={user.login}
                                    onClick={() => handleSelect(user.login)}
                                    className="autocomplete-result-item">
                                    <img src={user.avatar_url} alt="user avatar" className="avatar" />
                                    <span>{user.login}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            }

            {recent.length > 0 && < div className="recent-searches">
                <h3 className="recent-title">
                    Recent Searches
                </h3>
                <ul className="recent-list">
                    {
                        recent.map(item => {
                            return <li key={item}
                                onClick={() => handleSelect(item)}
                                className="recent-item"  >{item}</li>
                        })
                    }
                </ul>

            </div>}
        </div>
    )
}