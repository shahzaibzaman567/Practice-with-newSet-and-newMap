// Difition:
// new Set() have pass only unique value
//They have no accept object accept only array  in parameter
//use value in parameter Exam= new Set("123") they have come in obj
 
//All value have come in  consol
const array={1:"2",3:"4",5:"6",6:"1",2:"3",4:"5",6:"5"};
const Array=[1,2,3,4,5,6]
const Myset=new Set(Array); 
//They have come only unique value like [1,2,3,1,2,3,] Answer is [1,2,3] 
const uniquevalue=[...Myset];
console.log(array);
//this property use to show the size of set
console.log(Myset.size);
//unique values comes only
console.log(uniquevalue);
//This property  is used to add some element in Set 
Myset.add(7);
console.log(Myset);
//conver this nuber into object
const set=new Set("234");
console.log(set);
Myset.add({shah:"cartoon"});
console.log(Myset);
//We write array  
Myset.add([1,2,3]);
console.log(Myset);
//Delet some value in new Set()
Myset.delete(5);
console.log(Myset);
//property

console.log(Myset.has(12));
console.log(Myset.has(1));

//Delet all values in obj
Myset.clear();
console.log(Myset);

console.log("why using  Map ");
//Map have come key value pair
 const map=new Map([["name","shahzaib"],["Fathername","ZamanKhan"]]);
console.log(map);
//why using for  example
const object={};
const a={};
const b={};
object[b]="b";
object[a]="a";
console.log(object);
// console.log(object[b])

//solving this problem
const MAP=new Map([[a,"a"],[b,"b"] ]);
console.log(MAP);
// ..usese property of set

map.set("class","9th")
console.log(map)
//delet key 
map.delete("name")
console.log(map)
//use has
console.log(map.has("Fathername"));
console.log(map.has("ZamanKhan"));
//size
console.log(map.sizeJ)
//clear any data 

map.clear()
console.log(map)





