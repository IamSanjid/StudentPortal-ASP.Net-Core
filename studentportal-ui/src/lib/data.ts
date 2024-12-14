
export type Student = {
  id?: string;
  name: string;
  gender: number;
  dob: string;
  classId: number;
  createdAt?: string;
  modifiedAt?: string;
}

export type Class = {
  id: number;
  name: string;
  createdAt?: string;
  modifiedAt?: string;
}

export type StudentInfo = {
  data: Student;
  class: Class;
}