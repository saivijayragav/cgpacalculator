let sem1 = {'chem':3,'chemlab':1, 'c':3,'clab':1,'english':3,
    'maths':4,'phys':3,'physlab':1,'epl':1
};
let sem2 = {
'pds':3, 'dsd':3, 'pdslab':1, 'dsdlab':1,'beee':3,
    'englab':1,'eg':4,'eng':2,'snm':4,
}
var sem_1 = 0
function sem_1calc(){
    var keys = Object.keys(sem1);
    var cgg = 0
    var credits = 0
    for(var i = 0; i<keys.length;i++){
        var grade = Number(document.getElementById(keys[i]).value)
        var credit = sem1[keys[i]];
        cgg += grade * credit;
        credits += credit;
    }
    sem_1 = cgg/credits;
    sessionStorage.setItem('sem1', sem_1);    
}

var sem_2 = 0
function sem_2calc(){
    var keys = Object.keys(sem2);
    var cgg = 0
    var credits = 0
    for(var i = 0; i<keys.length;i++){
        var grade = Number(document.getElementById(keys[i]).value)
        var credit = sem2[keys[i]];
        cgg += grade * credit;
        credits += credit;
    }
    sem_2 = cgg/credits;
    sessionStorage.setItem('sem2', sem_2);
    console.log(sessionStorage.getItem('sem1'))
}

function result(){
    var cgpa = ((Number(sessionStorage.getItem('sem1')) + Number(sessionStorage.getItem('sem2')))/2).toFixed(2)
    if(cgpa > 9){
        document.getElementById('res').innerHTML = "Your CGPA is " + cgpa +' 😒';
    }
    else if(cgpa > 8.5){
        document.getElementById('res').innerHTML = "Your CGPA is " + cgpa +' 🥳';
    }
    else if(cgpa > 8){
        document.getElementById('res').innerHTML = "Your CGPA is " + cgpa +' 🔥';
    }
    else{
        document.getElementById('res').innerHTML = "Your CGPA is " + cgpa;
    }
    
}
