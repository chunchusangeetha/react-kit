import { useEffect, useState ,useMemo} from "react"
import useDebounce from "./components/useDebounce"

export default function UserList() {
    const [search, setSearch] = useState("")
    const [users, setusers] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const debouncedSearch = useDebounce(search, 500);
  
    const fetchData = async () => {
         setLoading(true);
        try {
            const response = await fetch('https://dummyjson.com/users')
            const data = await response.json();
            setusers(data.users)
        } catch (error) {
            console.error("Error fetching users:", error);
            setError(error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])

    const filteredusers = useMemo(() => {
        return users.filter(user => {
            const name = user.firstName.toLowerCase() + " " + user.lastName.toLowerCase();
            return name.includes(debouncedSearch.toLowerCase())
        })
    },[users, debouncedSearch]);
    /*const fetchData = async (usersearch) => {
        try {
            const response = await fetch(`https://dummyjson.com/users/search?q=${usersearch}`);
            const data = await response.json();
            setusers(data.users)
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    }
    const debouncedSearch = useDebounce(search, 500);
    useEffect(() => {
            fetchData(debouncedSearch);
    }, [debouncedSearch]);*/



    if (error) {
        return <p>Error fetching users: {error.message}</p>;
    }

    return (
        <>
            <h2>User List</h2>
            <input type="text" placeholder="Search users..." value={search} onChange={(e) => setSearch(e.target.value)} />
            {loading ? <p>Searching...</p> : (
                filteredusers.length > 0 ?
                    <ol>
                        {filteredusers.map(user => {
                            return (
                                <li key={user.id}>{user.firstName} {user.lastName}</li>
                            )
                        })}
                    </ol> : <p>No user found</p>
            )}
        </>
    )
}