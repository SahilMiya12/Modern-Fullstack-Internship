// GET route
const students = [
  {
    name: "Nikhil",
    marks: 100,
    isPresent: false,
  },
  {
    name: "John",
    marks: 10,
    isPresent: true,
  },
  {
    name: "Doe",
    marks: 50,
    isPresent: false,
  },
];

export async function GET(){
    console.log("students-", students);
    return Response.json({
        status: "success",
        students
    })
}

export async function POST(request:Request){
    const user = await request.json();
    console.log("user:", user);
    return Response.json({
        status: "New User created",
    })
}