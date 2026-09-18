let marks=65;
/*marks is a number, but cases contain conditions like marks > 70. Those conditions are evaluated to true or false, not compared directly with marks.*/
switch (true) {
    case marks>=85:
        console.log("passed with distinction");
        break
    case marks>70:
        console.log("you passed with grade 2");
        break;
    case marks>60:
        console.log("you passed with grade 3");
        break;
    case marks>50:
        console.log("you passed with grade 4");
        break;
    case marks>40:
        console.log("you passed with grade 5");
        break;
    default:
        console.log("you failed");

}