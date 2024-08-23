let dict = {'PDS':3, 'DSD':3, 'PDSLab':1, 'DSDLab':1,'BEEE':3,
    'Comm. lab':1,'EG':4,'English':2,'SNM':4
};

function calc(){
    var pds = Number(document.getElementById("pds").value)*dict['PDS'];
    var dsd = Number(document.getElementById("dsd").value)*dict['DSD']
    var pdslab = Number(document.getElementById("pdslab").value)*dict['PDSLab']
    var dsdlab = Number(document.getElementById("dsdlab").value)*dict['DSDLab']
    var beee = Number(document.getElementById("beee").value)*dict['BEEE']
    var englab = Number(document.getElementById("englab").value)*dict['Comm. lab']
    var eg = Number(document.getElementById("eg").value)*dict['EG']
    var eng = Number(document.getElementById("eng").value)*dict['English']
    var snm = Number(document.getElementById("snm").value)*dict['SNM']
    var cgpa = (pds+dsd+pdslab+dsdlab+beee+englab+eg+eng+snm)/22
    document.getElementById('credits').innerHTML = 'CGPA: ' + cgpa.toFixed(3);
    
}
