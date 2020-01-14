import { Component,OnInit  } from '@angular/core';
import { InterfaceHobbies,InterfaceCheck } from './InterfaceHobbies';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'formdemo';
radioButtonvalue:string;
dropDownValue:string;
Ihobbies:InterfaceHobbies[]=[];//array of object that return array
Ichkhobbies:InterfaceCheck[]=[];
dropDownId:number;
dropDownName:string;
isCheck:Boolean=true;
chkhobbie: Array<string> = [];
i:number;
ValueHobbies:string;

//hobbiecheckedobj:InterfaceCheck={id:0,name:"cricket",isChecked:false}

hobbieselectedobj:InterfaceHobbies={id:0,name:"cricket"};//only return object
 public hobbies:string[] = ["cricket","reading","writing"];

 ngOnInit()
 {
  
   this.Ihobbies=this.hobbies.map((value,index)=>
   {
     return {id:index,name:value}
   });
   this.Ichkhobbies=this.hobbies.map((value,index)=>
   {
     return {id:index,name:value,isChecked:false};
   });
   
   
   
   

 }
  getchange(event)
{
  this.radioButtonvalue=event.target.value;
  
}

getSeletedValue(event)
{

  this.dropDownValue=event.target.value;
  //this.sid=event.target.selectedIndex;
  let index=event.srcElement.options.selectedIndex;
  if(index==0)
  {
    this.dropDownValue="";
  }

}
getarraydropdownvalue(event)
{
  this.dropDownId=event.target.selectedIndex;
  this.dropDownName=event.target.value;
  this.hobbieselectedobj={id:this.dropDownId,name:this.dropDownName}
console.log(this.hobbieselectedobj);
}

getcheckbox(event)
{ 

let index = this.chkhobbie.indexOf(event.target.value);  

if(index==-1)
{
  this.chkhobbie.push(event.target.value);
}
else
{
   this.chkhobbie.splice(index,1);
}

}
getCheckedValue(event,obj:InterfaceCheck)
{
obj.isChecked=!obj.isChecked;
}

getValue(event)
{
  console.log(event.srcElement.options.selectedIndex);
}
}