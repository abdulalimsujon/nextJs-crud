import Link from "next/link";

function User() {
    return (

        <div>
            <h2>all user : </h2>

        </div>
    );
}


export async function getServerSideProps(ctx) {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()


    return {
        props: {
            users: data

        }
    }
}

export default User;