var rect = require('./rectangle') ; 
function solveRect(l,b){
     
     console.log("Solving for Rectangle") ; 

         rect(l,b,(err , joy) =>{
             if(err){
                 console.log("ERRor : " , err.message) ; 

             }

             else{
                 console.log("area : " + joy.area(l,b)) ; 
                 console.log("perimeter: "+ joy.perimeter(l,b)) ; 
             }

     }) ;

     console.log("This statement after call rect") ; 

}

solveRect(10,20) ; 
solveRect(30,50) ; 
