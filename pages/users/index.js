import { useState } from "react";

function Users() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState('');


    const loadAllData = () => {
        fetch('/api/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }

    const hundleAddUser = () => {
        fetch('/api/users', {
            method: "POST",
            body: JSON.stringify({ user }),
            headers: { "content-type": 'application/json' },
        });

        loadAllData();



    }
    const hundleDelete = (id) => {
        fetch(`/api/users/${id}`, {
            method: "DELETE",

        });
        loadAllData();
    };



    return <div><h1>all users<hr /></h1>

        <input onChange={(e) => setUser(e.target.value)} type="text" />
        <br />
        <button onClick={hundleAddUser}> add user</button>

        <button onClick={loadAllData}>Load All data</button>

        {
            users.map(user => {
                return (
                    <>
                        <h1>
                            {user.id} :{user.name}

                        </h1>

                        <button onClick={() => hundleDelete(user.id)}>Delete</button>
                    </>
                )
            })
        }

    </div>








}

export default Users;