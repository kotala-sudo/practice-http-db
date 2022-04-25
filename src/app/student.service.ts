import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  STUDENTS: Student[] = [
    { id: 1, name: 'John', age: 20 },
    { id: 2, name: 'Emily', age: 21 },
    { id: 3, name: 'Geeta', age: 19 },
    { id: 4, name: 'Ahmed', age: 18 },
    { id: 5, name: 'Juan', age: 22 },
  ];

  constructor() {}
}
