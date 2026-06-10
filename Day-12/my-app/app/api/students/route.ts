// GET route
let students = [
  {
    id: 1,
    name: "Sam",
    marks: 100,
    isPresent: false,
  },
  {
    id: 2,
    name: "John",
    marks: 10,
    isPresent: true,
  },
  {
    id: 3,
    name: "Doe",
    marks: 50,
    isPresent: false,
  },
  {
    id: 4,
    name: "Kate",
    marks: 60,
    isPresent: true
  }
];

export async function GET(){
    console.log("students-", students);
    return Response.json({
        status: "success",
        students
    })
}

type Student = {
  id: number,
  name: string,
  marks: number, 
  isPresent: boolean
}

export async function POST(request:Request){
    const user = await request.json();
    // create the new user
    const newStudent:Student = {
      id: 5,
      name: user.name,
      marks: user.marks,
      isPresent: user.isPresent 
    };
    students.push(newStudent);
    return Response.json({
        status: "Student enrolled in University",
        newStudent
    })
}

// PUT request
export async function PATCH(request:Request){
  const body = await request.json();
  
  const studentToUpdate = students.find((student) => {
    return student.name === body.name
  });
  // console.log("student:", studentToUpdate);

  if(!studentToUpdate){
    return Response.json({
      status: 404,
      message: "Resource Not Found"
    })
  }

  studentToUpdate.id = body.id;

  return Response.json({
    status: 'Student details updated successfully!',
    updatedStudent: studentToUpdate
    
  })
}

// PUT  -- to update the existing entire resource details
export async function PUT(request:Request){
  // extract the body from the request
  const body = await request.json();

  // update the resource with the help of id
  let resourceToUpdate = students.find((student) => {
    return student.id === body.id;
  });

  if(!resourceToUpdate){
    return Response.json({
      status: 404, 
      error: "Not Found"
    })
  }

  resourceToUpdate.name = body.name;
  resourceToUpdate.id = body.id;
  resourceToUpdate.marks = body.marks;
  resourceToUpdate.isPresent = body.isPresent;

  // resourceToUpdate = body;

  return Response.json({
    status: "success",
    updatedResource: resourceToUpdate
  })
}

export async function DELETE(request:Request){
  const body = await request.json();

  const filteredStudents = students.filter((student) => {
    return student.name !== body.name;
  })

  if(!filteredStudents){
    return Response.json({
      status: 404,
      error: "Not Found"
    })
  }
  students = [...filteredStudents];Q
  return Response.json({
    status: 204,
    message: "Student deleted successfully"
  })
}

// Task

// Student feedback page
//   textfield for writing feedback
//   addFeedback button -- on
// beside the feedback message -- delete button 

// link your addButton with POST request fetch()
// link your deleteButton with DELETE request fetch()
// fetch all your feedbacks -- for fetching all feedbacks

// api/feedbacks/route.ts --- GET, POST and DELETE 
// app/feedbacks/page.tsx -- input field for feedback and display feedbacks, add feed
// back and delete feedback