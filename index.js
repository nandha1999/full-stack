const students=[{ name: "Adhi", gender: "male" },
    { name: "Ahamed", gender: "male" },
     { name: "Rutika Kadam", gender: "female" },
     { name: "Priyadharsini", gender: "female" },];
//   // Task 1: find all female name
//   ["Rutika kadam", "Priyadharsini"];
const a=(students.filter(gender=>gender.gender.toLowerCase()=='female').map(gender=>gender.name))
console.log(a)
//   //Task 2: Starting with 'A'
//   ["Adhi", "Ahamed"]; 
console.log(students.filter(names=>names.name.slice(0,1).toLowerCase()=='a').map(names=>names.name))
//   // Task 3: Count the no. of males
//   // 2
const b=(students.filter(gender=>gender.gender.toLowerCase()=='male').map(gender=>gender.name).reduce((accum,value)=>accum+1,0))
 console.log(b)



  

  

  


