import Link from "next/link";

const ids:number[] = [101, 102, 103];

export default async function UserName(props:any){
   const user = await props.params;
   let id = undefined;
   if(user.username === 'Sahil'){
    id = ids[0];
   }else if(user.username === 'Sam'){
    id = ids[1];
   }else id = ids[2];

    return (
        <div>
            <Link href={`/users/${user.username}/blogs/${id}`}>{user.username}</Link>
        </div>
    )
}


// username/page.tsx 
// Nishchal -- hyperlink -- // users/Nishchal/blogs/101
// Rahul -- hyperlink // users/Rahul/blogs/102
// John -- hyperlink

// users/username/page.tsx, blogs/page.tsx
// UserName BlogId