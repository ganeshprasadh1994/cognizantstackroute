function person (name,age){
 this.name=name;
 this.age=age;
}
function occ (name,age,oc){
   person.call(this,name,age);
   this.occupation=oc;
 }
 var emp=[];

 emp[0]=new occ("surabh",30,"Team Leader");
 emp[1]=new occ("Anupriya",32,"Team Leader");
 emp[2]=new occ("kalyani",25,"programmer");
 emp[3]=new occ("damodharan",27,"programmer");
 emp[4]=new occ("Krishnakanth",22,"programmer");
 emp[5]=new occ("venkatraman",28,"programmer");
emp[6]=new occ("Ramanathan",45,"Manager");
emp[7]=new occ("Sachin Bansal",42,"Manager");
emp[8]=new occ("Natarajan",60,"Developer");


    /*console.log(emp.sort(function(a,b){
  return b.age-a.age;
}));*/


var newemp={};



for(var i=0;i<emp.length;i++){
 if(emp[i].occupation=="programmer"){
   //console.log(emp[i]);
 }
}

var test="";
var job=[];
for(var i=0;i<emp.length;i++)
{
  for(var j=i;j<job.length;j++)
  if(emp[i].occupation==job[j])
  {
    var count=count+1;
  }
  if(count==0)
   job[job.length-1]=emp[i].occupation;
}
for(var i=0;i<job.length;i++)
{
  console.log(job[i]);
}
