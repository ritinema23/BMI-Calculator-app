const bmicalcy = () => {

    let ht = document.querySelector('.height').value;
    let wt = document.querySelector('.weight').value;
    let btn = document.querySelector('.btn');
    
    let bmi = wt / (Math.pow(ht, 2)) ;
    bmi = Math.round(bmi);

    if(bmi<18){
        result="UNDERWEIGHT";
    }
    if(bmi>=18 && bmi< 25){
        result= "NORMAL";
    }
    else if (bmi>= 25 && bmi<30 ) {
        result= "OVERWEIGHT";
    } 
    else if (bmi>= 30 && bmi<35 ) {
        result="OBESE CLASS 1";
    } 
    else if(bmi>=35 && bmi<40){
        result="OBESE CLASS 2";
    }
    else if(bmi >= 40){
        result = "case critical";
    }
    else{
        result="NaN";
    }
    
    
    document.querySelector('.bmi').value = bmi; 
    document.querySelector('.text').innerHTML = `Total BMI of the
     female is ${bmi} which indicates that you are ${result}.`

 }