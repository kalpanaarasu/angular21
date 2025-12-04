import { Component,signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {
  courseName:string="angular21";
  courseDuration=signal<string>('2 months');
   cityName=signal<string[]>(['Mumbai','Nagpur','Pune']);
   studentObj=signal<any>(
    {name:'Kalpana',
      city:'Bangalore'

    }
   )

  constructor(){
    this.courseName="Angular 21";
  }
  changeDuration(){
    this.courseDuration.set('3 months');
    alert('duration changed ')
  }
addCity(){
  this.cityName.set(["Pune","Nagpur","Channai"]);
}
addNewCity(newCity:string){
this.cityName.update((old:string[])=>[...old,newCity])
}

changeCityInStudent(){
  console.log(this.studentObj().city);
  this.studentObj.update((oldObj:any)=>({...oldObj,city:'Thane'}));
  console.log(this.studentObj().city);
}

}
