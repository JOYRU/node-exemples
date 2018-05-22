var rect ={
    perimeter: (x,y) =>(x) , 
    area:(x,y) =>(y)


}

function solveRect(l,z){
      if(l<=0 || z<=0)
        console.log("can not be zero") ; 
     else{
         console.log("perimeter : " + rect.perimeter(l,z)) ; 
         console.log("area: " + rect.area(l,z)) ; 
     }

}

solveRect(10,20) ; 
solveRect(30,50) ; 
