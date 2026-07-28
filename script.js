const semCredits = {
    1: {'chem':3,'chemlab':1,'c':3,'clab':1,'english':3,'maths':4,'phys':3,'physlab':1,'epl':1,'tamil':0},
    2: {'pds':3,'dsd':3,'pdslab':1,'dsdlab':1,'beee':3,'englab':1,'eg':4,'eng':2,'snm':4,'tamils':0},
    3: {'ai':3,'oops':3,'dbms':3,'dpco':4,'dm':4,'ailab':1,'oopslab':1,'dbmslab':1,'datawrangling':1},
    4: {'da':3,'flat':4,'dalab':1,'azureml':1,'ml':3,'mllab':1,'os':3,'oslab':1,'daa':4,'evs':2,'rprog':0},
    5: {'dl':3,'dllab':1,'cn':3,'cnlab':1,'nlp':4,'ba':4,'bda':3,'eda':3,'tableau':1,'drrm':0},
    6: {'tsa':3,'wt':3,'itagri':3,'wda':3,'rmhp':3,'nms':1,'indsafety':0,'esiot':4,'oose':4,'miniproject':2}
};

const cumCreditsAfter = {0:0, 1:20, 2:42, 3:63, 4:85, 5:108, 6:131};

function chooser() {
    var sem = Number(document.getElementById('semester').value);
    if (sem === 1) {
        sessionStorage.setItem('cumulativeGradePoints', '0');
        sessionStorage.setItem('cumulativeCredits', '0');
        sessionStorage.setItem('semGpas', '{}');
        location.replace('sem1.html');
    } else {
        location.replace('sem' + sem + 'start.html');
    }
}

function startSem(semNum) {
    var cgpa = Number(document.getElementById('sem' + semNum + 'start').value);
    var credits = cumCreditsAfter[semNum - 1];
    sessionStorage.setItem('cumulativeGradePoints', String(cgpa * credits));
    sessionStorage.setItem('cumulativeCredits', String(credits));
    sessionStorage.setItem('semGpas', '{}');
    location.replace('sem' + semNum + '.html');
}

function calcSem(semNum) {
    var subjects = semCredits[semNum];
    var keys = Object.keys(subjects);
    var gradePoints = 0;
    var credits = 0;

    for (var i = 0; i < keys.length; i++) {
        var grade = Number(document.getElementById(keys[i]).value);
        var credit = subjects[keys[i]];
        if (credit === 0 || grade === -1) continue;
        gradePoints += grade * credit;
        credits += credit;
    }

    var gpa = gradePoints / credits;

    var cumGP = Number(sessionStorage.getItem('cumulativeGradePoints'));
    var cumCred = Number(sessionStorage.getItem('cumulativeCredits'));
    sessionStorage.setItem('cumulativeGradePoints', String(cumGP + gradePoints));
    sessionStorage.setItem('cumulativeCredits', String(cumCred + credits));

    var semGpas = JSON.parse(sessionStorage.getItem('semGpas') || '{}');
    semGpas[semNum] = gpa.toFixed(2);
    sessionStorage.setItem('semGpas', JSON.stringify(semGpas));

    var nextSem = semNum + 1;
    if (nextSem > 6) {
        location.replace('result.html');
    } else {
        location.replace('sem' + nextSem + '.html');
    }
}

function result() {
    var cumGP = Number(sessionStorage.getItem('cumulativeGradePoints'));
    var cumCred = Number(sessionStorage.getItem('cumulativeCredits'));
    var semGpas = JSON.parse(sessionStorage.getItem('semGpas') || '{}');
    var cgpa = (cumGP / cumCred).toFixed(2);

    var semKeys = Object.keys(semGpas);
    var displayHTML = '';
    for (var i = 0; i < semKeys.length; i++) {
        displayHTML += '<h2>SEM-' + semKeys[i] + ' GPA: ' + semGpas[semKeys[i]] + '</h2>';
    }
    document.getElementById('semGpas').innerHTML = displayHTML;

    if (cgpa > 8.7) {
        document.getElementById('res').innerHTML = "Your CGPA is " + cgpa + ' 💀(touch some grass bro)';
    } else if (cgpa > 8.5) {
        document.getElementById('res').innerHTML = "Your CGPA is " + cgpa + ' 🥳';
    } else if (cgpa > 8) {
        document.getElementById('res').innerHTML = "Your CGPA is " + cgpa + ' 🔥';
    } else {
        document.getElementById('res').innerHTML = "Your CGPA is " + cgpa;
    }
}
