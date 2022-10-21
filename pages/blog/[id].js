function Post({ data }) {

    console.log(data);
    return <div>

        <h1>{data.title}</h1>
        <h1>{data.body}</h1>
    </div>
}


export async function getStaticProps(ctx) {

    const { params } = ctx;

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

    const data = await res.json();



    return {
        // Passed to the page component as props
        props: {
            data: data,
        },
    }
}

export async function getStaticPaths() {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    const data = await res.json();
    const paths = data.map(post => {
        return {
            params: { id: `${post.id}` }
        };
    });


    return {
        paths,
        fallback: false, // can also be true or 'blocking'
    }
}

export default Post;