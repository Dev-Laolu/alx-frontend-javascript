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
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
