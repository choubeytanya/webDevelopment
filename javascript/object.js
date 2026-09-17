//ways of creating an object
let obj={name:"tanya", age:24, gender:"female"};
console.log(obj);
console.log(obj["name"]);
console.log(obj.age);

let cons_obj= new Object({name:"riya",age:25, gender:"female"});
console.log(cons_obj);

let create_obj= Object.create({name:"rahul", age:26, gender:"male"})//values created inside the crete_obj are not directly inside object but it is inside its prototype.
console.log(create_obj);
console.log(Object.getPrototypeOf(create_obj));
console.log(create_obj.name) //output:rahul "because JavaScript looks through the prototype when it doesn't find name directly on create_obj."


//modifying values of an object
obj.age=25;
console.log(obj);

//adding property in an object
obj.subject=["computer science", "english", "physics","chemistry"];
console.log(obj);

//delete property in object.
delete obj.gender;
console.log(obj);

//finding all the keys in an object
console.log(Object.keys(obj));

//finding all values in an object
console.log(Object.values(obj));

//check if property exist in an object
console.log("gender" in obj); //output:false because we have delete this property above.
console.log("name" in obj); // output:true

//methods in object
let new_obj = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  fullName: function () {
    return this.firstName + " " + this.lastName; 
    /* inside a object this refer to object itself.
    here this refers to new_obj object(this.firstname means firstname that exist in new_obj object and similarty with this.last_name)*/
  },
};
console.log(new_obj.fullName());


//When used alone, this refers to the global object. In a browser, the global object is the window object.

let x= this;
console.log(x); // output:[window object] (in chrome)
// console.log(x===window); // when run in chrome it will result true