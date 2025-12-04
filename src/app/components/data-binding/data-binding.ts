import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
courseName:string="angular21";
rollNumber:number=222;
isActive:boolean=true;
currentDate:Date=new Date();
minTextLength:number=10;
constructor(){
console.log(this.courseName);
console.log(this.courseName="this is new version of anuglar 21")
}
showAlert():void{
  alert("Welcome to angular learning");
}
onCityChanged():void{
alert('City changed')
}

addTwoNumbers(num1:number,num2:number):number{
 return  num1+num2;
}
}
