function SingleUser({ user }) {
    return (
        <div>
            <h1>Id {user.id}</h1>
            <h1>name {user.name}</h1>

        </div>
    );
};

export async function getServerSideProps(ctx) {

    const { params } = ctx

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const data = await res.json()




    return {
        props: {
            user: data

        }
    }
}

export default SingleUser;