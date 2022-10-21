function Time({ time }) {
    return (
        <div>

            <h1>the time is : {time}</h1>

        </div>
    );
}

export async function getStaticProps(ctx) {
    return {
        props: {
            time: new Date().toISOString(),
        },
        revalidate: 1,
    }

}


export default Time;