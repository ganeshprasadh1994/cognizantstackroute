function person (name,age){
 this.name=name;
 this.age=age;
}
function job(name,age,oc){
   person.call(this,name,age);
   this.occupation=oc;
 }
 var employee=[];

 employee[0]=new job("Surabh",30,"Team Leader");
 employee[1]=new job("Anupriya",32,"Team Leader");
 employee[2]=new job("Kalyani",25,"Programmer");
 employee[3]=new job("Damodharan",27,"Programmer");
 employee[4]=new job("Krishnakanth",22,"Programmer");
 employee[5]=new job("Venkatraman",28,"Programmer");
employee[6]=new job("Ramanathan",45,"Manager");
employee[7]=new job("Sachin Bansal",42,"Manager");
employee[8]=new job("Natarajan",60,"Developer");


for(var i=0;i<employee.length;i++){
 if(employee[i].occupation=="programmer"){
   console.log(employee[i]);
 }
}
/*-----------------------------------*/
    console.log(employee.sort(function(a,b){
  return b.age-a.age;
  }));

  for(var i=0;i<employee.length;i++){
   if(employee[i].occupation=="programmer"){
     console.log(employee[i]);
   }
  }
/*------------------------------------*/

var newemployee={};
var test="";
for(var i=0;i<employee.length;i++){

 if(test!=employee[i].occupation)
 {
   var k=0;
   var employee1=[];
   for(var j=0;j<employee.length;j++)
   {
     if(employee[i].occupation==employee[j].occupation)
     {
                employee1[k]=new person(employee[j].name,employee[j].age);
        k++;
        }
   }
       k=0;
   newemployee[employee[i].occupation]=employee1;
    }
 test=employee[i].occupation;
}

console.log(newemployee);
