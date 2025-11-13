namespace Subjects {
  // Declaration merging: augment Teacher interface
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java {
    teacher: Teacher | null = null;

    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }

    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingJava && this.teacher.experienceTeachingJava > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}
