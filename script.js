let sem1 = {'chem':3,'chemlab':1, 'c':3,'clab':1,'english':3,
    'maths':4,'phys':3,'physlab':1,'epl':1
};
let sem2 = {
'pds':3, 'dsd':3, 'pdslab':1, 'dsdlab':1,'beee':3,
    'englab':1,'eg':4,'eng':2,'snm':4,
}

let sem3 = {
    'ai':3, 'oops':3, 'dbms':3, 'dpco':4,'dm':4,
        'ailab':1,'oopslab':1,'dbmslab':1,'datawrangling':1,
    }

function chooser(){
    var sem = Number(document.getElementById('semester').value);
    if (sem==1){
        location.replace("sem1.html")
    }else if(sem==2){
        location.replace('sem2start.html')
    }else if(sem==3){
        location.replace('sem3start.html')
    }
}
function sem2start(){
    var gpa1 = Number(document.getElementById('sem2start').value)
    sessionStorage.setItem('sem1', gpa1);
    location.replace('sem2.html')
}
function sem3start(){
    var gpa = Number(document.getElementById('sem3start').value)
    sessionStorage.setItem('sem1', gpa);
    sessionStorage.setItem('sem2', gpa)
    sessionStorage.setItem('sem3starting', 'true')
    location.replace('sem3.html')
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
    sessionStorage.setItem('sem3starting', 'false')
 
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
    sessionStorage.setItem('sem3starting', 'false')

}

var sem_3 = 0
function sem_3calc(){
    var keys = Object.keys(sem3);
    var cgg = 0
    var credits = 0
    for(var i = 0; i<keys.length;i++){
        var grade = Number(document.getElementById(keys[i]).value)
        var credit = sem3[keys[i]];
        cgg += grade * credit;
        credits += credit;
    }
    sem_3 = cgg/credits;

    sessionStorage.setItem('sem3', sem_3);    
}
function result(){
    var gp1 = Number(sessionStorage.getItem('sem1'))
    var gp2 = Number(sessionStorage.getItem('sem2'))
    var gp3 = Number(sessionStorage.getItem('sem3'))
    if(sessionStorage.getItem('sem3starting')=='true'){
        document.getElementById('gp1').innerHTML = "Your CGPA till is " + (gp1).toFixed(2);
    document.getElementById('gp2').innerHTML = "Your SEM-3 GPA is " + (gp3).toFixed(2);
    }
    else{
    document.getElementById('gp1').innerHTML = "Your SEM-1 GPA is " + (gp1).toFixed(2);
    document.getElementById('gp2').innerHTML = "Your SEM-2 GPA is " + (gp2).toFixed(2);
    document.getElementById('gp3').innerHTML = "Your SEM-3 GPA is " + (gp3).toFixed(2);
    }
    var cgpa = (( gp1 + gp2 + gp3)/3).toFixed(2)
    if(cgpa > 8.7){
        document.getElementById('res').innerHTML = "Your CGPA is " + cgpa +' 💀(touch some grass bro)';
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
