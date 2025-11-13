namespace Subjects {
  // Declaration merging: augment Teacher interface
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React {
    teacher: Teacher | null = null;

    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }

    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingReact && this.teacher.experienceTeachingReact > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}
