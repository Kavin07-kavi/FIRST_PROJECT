/*console.log('kavin')

let a=10;
let b=20;
let c=a+b;
let d=a-b;
let e=a/b;
let f=a*b;
let g=a^b;
let h=a%b;
let i=1+a;
let s='kavin';
let t=10;
let u=s+t;
console.log(c,d,e,f,g,h,i,u);
console.log(typeof(c))*/

/*let a=100;
let b=200;
if(a>b)
    {
     console.log(a);
    }
 else
    {
     console.log(b);
    }*/

 
/*let a=10;

if(a % 2 == 0) {
    console.log("The number is even.");
}
else {
    console.log("The number is odd.");

}*/

/*let age = 10;

if (age >= 18  ) 
 {
  console.log("youngester");
 } 
else
 {
  console.log("children");
 }*/

 /* let i=0;
  do{
   console.log(i)
   i++;
  }
  while(i<=10);*/

  /*let b=17;
     if(b>150){
       console.log("give a valid age")
  }
    else if(b>=18){
      console.log("younger")
     }
     else if(b==17||b>=13){
       console.log("tennager")
     }
     else{
       console.log("child")
     }*/

       /*let n = 5;
       function factorial(n)
     { 
       if (n === 0) 
        { 
           return 1; 
        } 
       else
       { 
        return n * factorial( n - 1 ); 
       } 
    } 

console.log(factorial(n));*/

/*const arr=[1,2,3,4,5,6,7,8]
let newarr= arr.filter(item =>item%2==0)
console.log(newarr);*/

/*const arr=[3,33,45,6,7,9,]
let newarr= arr.filter((item,i,items)=>{
  console.log(i);
  console.log(item);
  console.log(items);
  console.log("-----------------------");
  return item%2==0 
}
)
console.log(newarr);*/


/*const arr=[1,2,3,4,5,6,7,8]
let newarr= arr.map((item,i,items)=>{
  console.log(i);
  console.log(item);
  console.log(items);
  console.log("-----------------------");
  return item+'"mark 1":"1"'; 
  
}
)
console.log(newarr);*/

/*const arr=[1,2,3,4,5,6,7,1,2,8]
var newarr= arr.find((item,i,items)=>{
  console.log(i);
  console.log(item);
  console.log(items);
  console.log("-----------------------");
  return item==2; 
  
}
)
console.log(newarr);*/

/*const arr=[1,2,3,4,5,6,7,1,2,8]
arr.forEach((item,i,items)=>{
  console.log(i);
  console.log(item);
  console.log(items);
  console.log("-----------------------");
 }
)
console.log(arr);*/

/*const year = 2004;
let leapYear;
if((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)){
  leapYear = true;
}
else{
  leapYear = false;
}
if (leapYear == true){
  console.log("2004 is a leap year");
}
else{
  console.log("2004 is not a leap year");
}*/



/*let studentName = [1,2,3,4,5,6]
let arr=[]
studentName.filter((item)=>{
  if((item%2)==0){ 
    arr.push(item)
    console.log("sdfgh",arr);
  }
else{
  console.log("array",arr);
}
  }
)*/


/*let num =[1,2,3,4,5];
let arr =[10,20,30,40,50];
num.forEach((item)=>{
  if(item%2==0){
    arr.pop()
  }
  console.log("current value",arr);
}
)*/


const department=['cse','ece','eee'];
console.log(department.unshift());
console.log(department);

const dept=['cse','ece','eee','it','abc'];
dept.splice(2,2,'civil','aids');
console.log(dept);

const arr1=[1,2,3];
const arr2=arr1.include('4');
console.log(arr2);












  
  
  
