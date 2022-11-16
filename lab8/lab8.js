// // Problem no: 6- add() and reset() problem
var xyz= (function(){
    var count= 0;
    function addFunc(){
        count+= 1;
        return count;
    }

    function reset(){
        count= 0;
        return count;
    }

    return {
        addFunc:addFunc,
        reset:reset
    }

})();

console.log(xyz.addFunc());
console.log(xyz.addFunc());
console.log(xyz.addFunc());
console.log(xyz.reset());
console.log(xyz.addFunc());




// Problem: 7- Free variable
// Local variable that ends up within the closure is called free variable. So, the free variable is counter in this problem


// Problem-8

var add5= (function(){
    var count= 0;
    addition= function make_adder(inc){
        if(inc){
            count += inc;
            return count;
        }
        else{
            count+= 1;
            return count;
        }
        
    }
    return {
        addition:addition
    };
})();

console.log("add5: " +add5.addition(5));
console.log("add5: " +add5.addition(5));
console.log("add5: " +add5.addition(5));


//Problem-9

//By writing (function()) {}) in the Javascript code can remove all the names from the Global namespaces. The code will be
//stay into the carle bracket of this function



//Problem-10

const anEmployee= (function(){
    let name= "Real";
    let age= 30;
    let salary= null;
    const nameConst= function(){
        return name
    }
    const ageConst= function(){
        return age;
    }

    const getName= function(){
        return name;
    }

    const setName= function(nam){
        name= nam;
    }

    const getAge= function(){
        return age;
    };

    const setAge= function(ag){
        age= ag;
    }

    const getSalary= function(){
        return salary;
    };

    const setSalary= function(sal){
        salary= sal*1.10;
    };

    return{
        nameConst:nameConst,
        ageConst:ageConst,
        getName:getName,
        setName:setName,
        getName:getName,
        setAge:setAge,
        setSalary:setSalary,
        getAge:getAge,
        getSalary:getSalary
    };
})()

console.log(anEmployee.nameConst());
console.log(anEmployee.ageConst());
anEmployee.setName("Sanaullah");
anEmployee.setAge(32);
anEmployee.setSalary(1000);
console.log(anEmployee.getName());
console.log(anEmployee.getAge());
console.log(anEmployee.getSalary());



//Problem-11

const anEmployee1= (function(){
    let name= "Real";
    let age= 30;
    let salary= null;
    const nameConst= function(){
        return name
    }
    const ageConst= function(){
        return age;
    }

    const getName= function(){
        return name;
    }

    const setName= function(nam){
        name= nam;
    }

    const getAge= function(){
        return age;
    };

    const setAge= function(ag){
        age= ag;
    }

    const getSalary= function(){
        return salary;
    };

    const setSalary= function(sal){
        salary= sal*1.10;
    };

    let address= null;
    const setAddress= function(adress){
        address= adress;
    }

    const getAddress= function(){
        return address;
    };

    return{
        nameConst:nameConst,
        ageConst:ageConst,
        getName:getName,
        setName:setName,
        getName:getName,
        setAge:setAge,
        setSalary:setSalary,
        getAge:getAge,
        getSalary:getSalary,
        setAddress:setAddress,
        getAddress:getAddress
    };
})()

console.log(anEmployee1.nameConst());
console.log(anEmployee1.ageConst());
anEmployee1.setName("Sanaullah");
anEmployee.setAge(32);
anEmployee1.setSalary(1000);
console.log(anEmployee1.getName());
console.log(anEmployee1.getAge());
console.log(anEmployee1.getSalary());
anEmployee1.setAddress("1000 N, Fairfield");
console.log("Address: " +anEmployee1.getAddress());