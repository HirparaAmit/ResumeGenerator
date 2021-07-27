var colorMain;
function colorChange(){
        var radios = document.querySelectorAll('input[type="radio"]:checked');
        var value = radios.length>0? radios[0].value: null;
        if(value == '#164d56'){
            document.getElementById('side').style.background = '#164d56';
            for(let i=0;i<3;i++){
                document.querySelectorAll('#head')[i].style.background = '#192734'; 
            }
        }
        if(value == '#3a2229'){
            document.getElementById('side').style.background = '#3a2229';
            for(let i=0;i<3;i++){
                document.querySelectorAll('#head')[i].style.background = '#6a4952'; 
            }
        }
        if(value == '#56565a'){
            document.getElementById('side').style.background = '#56565a';
            for(let i=0;i<3;i++){
                document.querySelectorAll('#head')[i].style.background = '#2a2e2d'; 
            }
        }
        if(value == '#1261a0'){
            document.getElementById('side').style.background = '#1261a0';
            for(let i=0;i<3;i++){
                document.querySelectorAll('#head')[i].style.background = '#072f5f'; 
            }
        }
        sessionStorage.setItem("value", value);
}

function newColor(){
    var a = sessionStorage.getItem("value");

    if(a == '#164d56'){
        document.getElementById('side').style.background = '#164d56';
        for(let i=0;i<3;i++){
            document.querySelectorAll('#head')[i].style.background = '#192734'; 
        }
    } 
    if(a == '#3a2229'){
        document.getElementById('side').style.background = '#3a2229';
        for(let i=0;i<3;i++){
            document.querySelectorAll('#head')[i].style.background = '#6a4952'; 
        }
    }
    if(a == '#56565a'){
        document.getElementById('side').style.background = '#56565a';
        for(let i=0;i<3;i++){
            document.querySelectorAll('#head')[i].style.background = '#2a2e2d'; 
        }
    }  
    if(a == '#1261a0'){
        document.getElementById('side').style.background = '#1261a0';
        for(let i=0;i<3;i++){
            document.querySelectorAll('#head')[i].style.background = '#072f5f'; 
        }
    } 
}



function whyName() {
    var x = document.getElementById("name");
    var y = document.getElementById("whyname").value;
    x.innerHTML = "&nbsp " + y;
}
function whyNumber() {
    var x = document.getElementById("contact");
    var y = document.getElementById("whycontact").value;
    x.innerHTML = "&nbsp " + y;
}
function whyEmail() {
    var x = document.getElementById("email");
    var y = document.getElementById("whyemail").value;
    x.innerHTML = "&nbsp " + y;
}
function whyGithub() {
    var x = document.getElementById("github");
    var y = document.getElementById("whygithub").value;
    x.innerHTML = "&nbsp " + y;
}
function whyLinkedin() {
    var x = document.getElementById("linkedin");
    var y = document.getElementById("whylinkedin").value;
    x.innerHTML = "&nbsp " + y;
}
var n = 0;
function addInput(){
    n++;
    var btnipt = document.createElement("span");
    var t = 'skills'+n;
    btnipt.innerHTML = `<input type='text' class='interestInputBtn' id=${t} autocomplete='off'>`;
    document.getElementById('skills').appendChild(btnipt);
    
}
var i = 0;
function submitSkill() {
    i++;
    for(let i = 1;i<n+1;i++){
        var v = 'para'+i;
        var t = 'skills'+i;
        var p = document.createElement("span");
        p.innerHTML = `<p class='para' id=${v}>`;
        document.getElementById('iptskl').appendChild(p);
        var x = document.getElementById(t).value;
        var y = document.getElementById(v);
        y.innerHTML = x;
        y.style.marginLeft = '6px';
    }
}

var k = 0;
function addInputInt(){
    k++;
    var btnipt = document.createElement("span");
    var t = 'interests'+k;
    btnipt.innerHTML = `<input type='text' class='interestInputBtn' id=${t} autocomplete='off'>`;
    document.getElementById('interests').appendChild(btnipt);
    
}
var j = 0;
function submitInterest(){
    j++;
    
    for(let i = 1;i<k+1;i++){
        var v = 'paraInt'+i;
        var t = 'interests'+i;
        var p = document.createElement("span");
        p.innerHTML = `<p class='paraInt' id=${v}>`;
        document.getElementById('iptint').appendChild(p);
        var x = document.getElementById(t).value;
        var y = document.getElementById(v);
        y.innerHTML = x;
        y.style.marginLeft = '6px';
    }

}

function tas(){
    var x = document.getElementById('ta').value;
    var y = document.getElementById('qul'); 
    y.innerHTML = x;
}
var d = 0;
function eduadd(){
    d++;
    var t = document.createElement('input');
    var v = document.createElement('input');
    t.type = 'text';
    v.type = 'text';
    t.id = 'ye'+d;
    v.id = 'des'+d;
    var x = t.id;
    var y = v.id;
    t.placeholder = "yyyy - yyyy";
    v.placeholder = "Course and Institute Name";
    document.getElementById('edu').appendChild(t);
    document.getElementById('edu').appendChild(v);
    document.getElementById(x).style.marginTop = "2%";
    document.getElementById(x).style.marginLeft = "2%";
    document.getElementById(x).style.paddingLeft = "5%";
    document.getElementById(x).style.paddingBottom = "0.5%";
    document.getElementById(x).style.width = "15%";
    document.getElementById(y).style.marginTop = "2%";
    document.getElementById(y).style.marginLeft = "2%";
    document.getElementById(y).style.width = "67%";
    document.getElementById(y).style.paddingBottom = "0.5%";
    var p = document.createElement("tr");
    p.id = 'tr'+d;
    var a = p.id;
    document.getElementById('table').appendChild(p);
    var t1 = document.createElement('td');
    t1.className = 'year';
    t1.id = 'cell1.'+d;
    var t2 = document.createElement('td');
    t2.id = 'cell2.'+d;
    document.getElementById(a).appendChild(t1);
    document.getElementById(a).appendChild(t2);
}

function submitEducation(){
    for(let i = 1;i<d+1;i++){
        var x = 'ye'+i;
        var y = 'des'+i;
        var x1 = 'cell1.'+i;
        var x2 = 'cell2.'+i;
        var o = document.getElementById(x1);
        var p = document.getElementById(x2);
        var z1 = document.getElementById(x).value;
        var z2 = document.getElementById(y).value;
        var w1 = document.getElementById(o.id);
        var w2 = document.getElementById(p.id);
        w1.innerHTML = z1; 
        w2.innerHTML = z2;
        
    }
}
var addWork = 0;
function workadd(){
    addWork++;
    var t = document.createElement('input');
    var v = document.createElement('input');
    var s = document.createElement('input');
    t.type = 'text';
    v.type = 'text';
    s.type = 'text';
    t.id = 'ar'+addWork;
    v.id = 'ex'+addWork;
    s.id = 'po'+addWork;
    var x = t.id;
    var y = v.id;
    var z = s.id;
    t.placeholder = "yyyy - yyyy";
    v.placeholder = "Company Name";
    s.placeholder = "Explain your role";
    document.getElementById('work').appendChild(t);
    document.getElementById('work').appendChild(v);
    document.getElementById('work').appendChild(s);
    document.getElementById(x).style.marginTop = "2%";
    document.getElementById(x).style.marginLeft = "2%";
    document.getElementById(x).style.paddingLeft = "5%";
    document.getElementById(x).style.paddingBottom = "0.5%";
    document.getElementById(x).style.width = "15%";
    document.getElementById(y).style.marginTop = "2%";
    document.getElementById(y).style.marginLeft = "2%";
    document.getElementById(y).style.width = "67%";
    document.getElementById(y).style.paddingBottom = "0.5%";
    document.getElementById(z).style.marginLeft = "25%";
    document.getElementById(z).style.width = "67%";
    var p1 = document.createElement("tr");
    var p2 = document.createElement("tr");
    p1.id = 'tr1'+addWork;
    p2.id = 'tr2'+addWork
    var a = p1.id;
    var b = p2.id;
    document.getElementById('tablework').appendChild(p1);
    document.getElementById('tablework').appendChild(p2);
    var t1 = document.createElement('td');
    t1.className = 'year';
    t1.id = 'cell11.'+addWork;
    var t2 = document.createElement('td');
    t2.id = 'cell22.'+addWork;
    var t3 = document.createElement('td');
    t3.id = 'cell33.'+addWork;
    var t4 = document.createElement('td');
    t4.id = 'cell44.'+addWork;
    document.getElementById(a).appendChild(t1);
    document.getElementById(a).appendChild(t2);
    document.getElementById(b).appendChild(t3);
    document.getElementById(b).appendChild(t4);

}

function submitWork(){
    for(let i = 1;i<addWork+1;i++){
        var x = 'ar'+i;
        var y = 'ex'+i;
        var z = 'po'+i;
        var x1 = 'cell11.'+i;
        var x2 = 'cell22.'+i;
        var x3 = 'cell44.'+i;
        var o = document.getElementById(x1);
        var p = document.getElementById(x2);
        var q = document.getElementById(x3);
        var z1 = document.getElementById(x).value;
        var z2 = document.getElementById(y).value;
        var z3 = document.getElementById(z).value;
        var w1 = document.getElementById(o.id);
        console.log(w1);
        var w2 = document.getElementById(p.id);
        var w3 = document.getElementById(q.id);
        w1.innerHTML = z1; 
        w2.innerHTML = z2;
        w3.innerHTML = z3;

    }
}

var prj = 0;
function projectadd(){
    prj++;
    var btnipt = document.createElement("span");
    var t = 'projects'+prj;
    btnipt.innerHTML = `<input type='text' class='interestInputBtn' id=${t} autocomplete='off'>`;
    document.getElementById('project').appendChild(btnipt);
}

function submitProject(){
    for(let i = 1;i<prj+1;i++){
    
        var a = document.createElement('p');
        a.id = 'li'+i;
        document.getElementById('prjct').appendChild(a);
        var t = 'projects'+i;
        document.getElementById(a.id).style.color = 'black';
        var x = document.getElementById(t).value;
        var y = document.getElementById(a.id);
        y.innerHTML = '&#8226;  ' + x;
    }
}

var cer = 0;
function certadd(){
    cer++;
    var btnipt = document.createElement("span");
    var t = 'certs'+cer;
    btnipt.innerHTML = `<input type='text' class='interestInputBtn' id=${t} autocomplete='off'>`;
    document.getElementById('cert').appendChild(btnipt);
}

function submitCert(){
    for(let i = 1;i<cer+1;i++){
    
        var a = document.createElement('p');
        a.id = 'lili'+i;
        document.getElementById('certmem').appendChild(a);
        var t = 'certs'+i;
        document.getElementById(a.id).style.color = 'black';
        var x = document.getElementById(t).value;
        var y = document.getElementById(a.id);
        y.innerHTML = '&#8226;  ' + x;
    }
}

function copy(){
    var pageContent = document.getElementById("preview").innerHTML; 
    sessionStorage.setItem("page1content", pageContent);
}

function test(){
    document.getElementById("prpage").innerHTML=sessionStorage.getItem("page1content");
}
