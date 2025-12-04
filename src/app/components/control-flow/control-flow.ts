import { Component,signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone:true,
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
selectedCaste:string='';
isStudentActive=signal<boolean>(false);
cityList:string[]=['Chennai','Bangalore','Delhi','Mumbai'];
studentList=[{name:'kalpana',roll:1,city:'Bangalore',status:true},
  {name:'Ashwin',roll:2,city:'Chennai',status:true},
{name:'Sudha',roll:3,city:'Trichy',status:true}]
  constructor(){}
  changeStatus(value:boolean){
    this.isStudentActive.set(value)
  }
}
