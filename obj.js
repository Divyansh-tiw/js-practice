/* Creating a simple car object
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021,
    Function : function (){return "this is a functio"}
};
car.year = 2022;
// Displaying the car object
console.log(car);
console.log(car.Function());


for (let key in car){
    console.log(key+ ":", car[key]);
}

let students =[
    {fullName : "Divyansh", occupation : "student"},
    {fullName : "Unnati", occupation : "student"},
    {fullName : "Himanshu", occupation : "employed"}
];

console.log(students)

students.forEach((student)=>{
    console.log(student.occupation);
})

for (let i = 0; i<students.length; i++){
    console.log(students[i].occupation);

}

students.forEach((st)=>{
    console.log(`Full name : ${st.fullName}, Occupation : ${st.occupation}`)
})

delete car.year;

console.log(car.hasOwnProperty("year"));
console.log(!car.hasOwnProperty("year"));*/

function doClean(){

    return new Promise((resolve, reject) => {
        setTimeout(()=>{

            const doClean = true;

            if (doClean){
                resolve("You cleaned");
            }
            else{
                reject("You didn't clean");
            }
        }, 2500);


    });
}

function doWork(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const doWork = true;

            if (doWork){
                resolve("You did the work");
            }
            else{
                reject("you didn't work");
            }
        }, 1000);
    });
}

/*async function doChores(){
    try{
        const doCleanResult = await doClean();
        console.log(doCleanResult);

        const doWorkResult = await doWork();
        console.log(doWorkResult);
        
    }
    catch(error){
        console.log(error);
        
    }
}

doChores()*/

//Promise.all([doClean(), doWork()]).then(([p1, p2])=> console.log(p1, p2));
//Promise.allSettled([doClean(), doWork()]).then(([p1, p2])=> console.log(p1, p2));
//Promise.any([doClean(), doWork()]).then((result) => console.log(result)).catch((error) => console.log("All promises failed:", error));

//Promise.any([doClean(), doWork()]).then((p1)=> console.log(p1));

Promise.race([doClean(), doWork()]).then((p1)=> console.log(p1));