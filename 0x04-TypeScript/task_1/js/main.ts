// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number; // optional property
  [key: string]: any;
}

// Define the Director interface extending Teacher
interface Director extends Teacher {
  numberOfReports: number;
}

// Example usage
const director1: Director = {
  firstName: 'Hopewell',
  lastName: 'Olayinka',
  location: 'Nigeria',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);





// Interface for the function
interface printTeacherFunction {
  (teacher: { firstName: string; lastName: string }): string;
}

// Function declaration implementing the interface
function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName[0]}. ${lastName}`;
}

// Example usage
console.log(printTeacher({ firstName: "John", lastName: "Doe" }));

// Example usage
console.log(printTeacher({ firstName: "Hopewell", lastName: "Olayinka" })); 