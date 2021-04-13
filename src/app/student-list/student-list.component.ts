
import { Component, OnInit} from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';



@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})


export class StudentListComponent implements OnInit{

  students: Student[] = [];
  nextID = 0;
  sName: string;
  sAge: number

  constructor(private stdService: StudentService){

  }

  ngOnInit(){
    this.students = this.stdService.STUDENTS;
  }

  addNewStudent(){
    const newStudent: Student = {
      id: this.nextID++,
      name: this.sName,
      age: this.sAge
    }
    this.students.push(newStudent);
  }

  onClearData(){
    this.students = [];
  }
}
