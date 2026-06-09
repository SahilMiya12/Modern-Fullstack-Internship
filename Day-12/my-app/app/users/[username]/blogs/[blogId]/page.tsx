export default async function BlogId(props:any){
    const user = await props.params;
    const name = user.username;
    const id = user.blogId;
    console.log("username:", name);
    console.log("blogId:", id);

    return (
        <div>
            User: {name}
            BlogId: {id}
        </div>
    )
}