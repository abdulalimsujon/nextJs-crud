import Link from "next/link";

function Postlist({ posts }) {

    return (

        <div>
            <h1>Post items {posts.length}</h1>

            {
                posts.map(post => {
                    return (
                        <div key={post.id}>
                            <Link href={`/blog/${post.id}`} passHref>
                                <h3>{post.title}</h3>

                            </Link>


                            <h5>post body: {post.body}</h5>
                            <hr />

                        </div>

                    );
                })
            }

        </div>
    )

}

export async function getStaticProps(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    const posts = await res.json();
    return {
        // Passed to the page component as props
        props: {
            posts: posts
        }
    }
}


export default Postlist;