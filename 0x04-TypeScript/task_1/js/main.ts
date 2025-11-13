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

// Define the interface for the function
interface printTeacherFunction {
  (teacher: { firstName: string; lastName: string }): string;
}

// Implement the function using the interface
const printTeacher: printTeacherFunction = ({ firstName, lastName }) => {
  return `${firstName[0]}. ${lastName}`;
};

// Example usage
console.log(printTeacher({ firstName: "Hopewell", lastName: "Olayinka" }));
// Output: H. Olayinka