// Duplicate local declarations removed; use the exported interfaces/classes below.

// task_2/js/main.ts

export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// Updated createEmployee function with explicit salary < 500 check
export function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number') {
    if (salary < 500) {
      return new Teacher();
    } else {
      return new Director();
    }
  } else {
    // If salary is a string, assume high salary -> Director
    return new Director();
  }
}

// Exported type predicate function
export function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// Exported function to execute work
export function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Example usage
console.log(executeWork(createEmployee(200)));   // Getting to work
export type Subjects = 'Math' | 'History';

export function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  return 'Teaching History';
}

console.log(teachClass('Math'));
console.log(teachClass('History'));
