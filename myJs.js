let list2 = document.getElementsByClassName("list2")[0];
let list = document.getElementsByClassName("list")[0];
let a1 = document.getElementsByClassName("a1")[0];
let as = document.getElementsByClassName("as")[0];
let a2 = document.getElementsByClassName("a2")[0];
let a3 = document.getElementsByClassName("a3")[0];
let a4 = document.getElementsByClassName("a4")[0];
let a5 = document.getElementsByClassName("a5")[0];
let a6 = document.getElementsByClassName("a6")[0];
let a = document.getElementsByClassName("a")[0];
let b = document.getElementsByClassName("b")[0];
let c = document.getElementsByClassName("c")[0];
let d = document.getElementsByClassName("d")[0];
let e = document.getElementsByClassName("e")[0];
let f = document.getElementsByClassName("f")[0];
let bodt= document.getElementsByTagName("body")[0];
let main= document.getElementsByTagName("main")[0];
let cat = document.getElementsByClassName("categorie")[0];
let mainS = document.getElementsByClassName("mainS")[0];
let panel = document.getElementsByClassName("panel")[0];
let item = document.getElementsByClassName("item")[0];
let order = document.getElementsByClassName("order")[0];
let sold = document.getElementsByClassName("sold")[0];
let mod = document.getElementsByClassName("mod")[0];
let demi= document.getElementById("demi");
let all= document.getElementById("all");
let ok= document.getElementsByClassName("oek")[0];
let logo= document.getElementsByClassName("Logo")[0];
let nav= document.getElementsByTagName("nav")[0];
let side= document.getElementsByClassName("side")[0];
let placment= document.getElementsByClassName("placment")[0];


function clickk() {
    mod.style.display="grid";
    list.style.display="none";
    list2.style.display="none";
    mainS.style.display="none";
    order.style.display="none";
}
function clicke() {
    mod.style.display="none";
    bodt.style.backgroundColor= "aliceblue";
}

function mega(a,b,c,d,e,f){
    list2.style.display="block";
    a.style.display="grid";
    b.style.display="none";
    c.style.display="none";
    d.style.display="none";
    e.style.display="none";
    f.style.display="none";
}
function megaout(a){
    a.style.display="none";
    test(a,b,c,d,e,f);
};
function des(){
    a.style.display="none";
    b.style.display="none";
    d.style.display="none";
    c.style.display="none";
    e.style.display="none";
    f.style.display="none";
};
function test(a,b,c,d,e,f){
    if(a.style.display=="none" && b.style.display=="none" && c.style.display=="none" && d.style.display=="none" && f.style.display=="none" && e.style.display=="none")
    { list.style.display="none";
    
    bodt.style.backgroundColor= "aliceblue";}
}

if (screen.width>500){
    
function clickk() {
    mod.style.display="grid";
    list.style.display="none";
    list2.style.display="none";
    mainS.style.display="none";
    order.style.display="none";
}
function clicke() {
    mod.style.display="none";
    bodt.style.backgroundColor= "aliceblue";
}
panel.onmouseover = function(){mainS.style.display="grid";
order.style.display="none";
list.style.display="none";
list2.style.display="none";
bodt.style.backgroundColor= "rgba(0,0,0,0.3)";
};
mainS.onmouseleave = function(){mainS.style.display="none"
bodt.style.backgroundColor= "aliceblue";};
mainS.onmouseover=function(){mainS.style.display="grid"
bodt.style.backgroundColor= "rgba(0,0,0,0.3)";}  


mainS.onmouseout = function(){mainS.style.display="none"
bodt.style.backgroundColor= "aliceblue";};




item.onmouseover = function(){order.style.display="grid";
mainS.style.display="none";
list.style.display="none";
list2.style.display="none";
bodt.style.backgroundColor= "rgba(0,0,0,0.3)";
};
order.onmouseleave = function(){order.style.display="none";
bodt.style.backgroundColor= "aliceblue";};
order.onmouseover=function(){order.style.display="grid"
bodt.style.backgroundColor= "rgba(0,0,0,0.3)";}  


order.onmouseout = function(){order.style.display="none"
bodt.style.backgroundColor= "aliceblue";};



cat.onmouseover = function(){list.style.display="block";
mainS.style.display="none"
order.style.display="none"

bodt.style.backgroundColor= "rgba(0,0,0,0.3)";

};

list.onmouseleave = function(){test(a,b,c,d,e,f);};
list.onmouseover=function(){list.style.display="block"
bodt.style.backgroundColor= "rgba(0,0,0,0.3)";}    
as.onmouseover = function(){des()};

a1.onmouseover = function(){mega(a,b,c,d,e,f);};
a.onmouseleave =function(){ megaout(a)};

a2.onmouseover = function(){mega(b,a,c,d,e,f);};
b.onmouseleave = function(){ megaout(b)};

a3.onmouseover = function(){mega(c,b,a,d,e,f);};
c.onmouseleave = function(){ megaout(c)};

a4.onmouseover = function(){mega(d,b,c,a,e,f);};
d.onmouseleave = function(){ megaout(d)};

a5.onmouseover = function(){mega(f,b,c,d,e,a);};
f.onmouseleave = function(){ megaout(f)};

a6.onmouseover = function(){mega(e,b,c,d,a,f);};
e.onmouseleave = function(){ megaout(e)};








}
if (screen.width>500 && screen.width <= 800){

    
    function demi_resp(){
    list.style.display="none";
    list2.style.display="none";
    mainS.style.display="none";
    order.style.display="none";
    mod.style.display="none";
    if (demi.className=="demi fa-solid fa-bars"){
            ok.style.display="none";
            sold.style.display="none"; 
            logo.style.display="none"; 
            cat.style.display="block"; 
            panel.style.display="block"; 
            item.style.display="block"; 
            demi.className="demi fa-solid fa-xmark";
        }
        else {
            
            cat.style.display="none"; 
            panel.style.display="none"; 
            item.style.display="none"; 
            
            ok.style.display="flex";
            sold.style.display="block"; 
            logo.style.display="block"; 
            demi.className="demi fa-solid fa-bars";

    }
    }
}

if (screen.width <500){
    
function clickk() {
    mod.style.display="grid";
    
bodt.style.backgroundColor= "rgba(0,0,0,0.3)";
}
function clicke() {
    mod.style.display="none";
    bodt.style.backgroundColor= "aliceblue";
}

let ie=document.getElementsByClassName("ie")[0];

function demi_resp(){
    if (all.className=="all fa-solid fa-bars"){
        all.className="all fa-solid fa-xmark";
        nav.style.left="85%";
        side.style.display="grid";
        
    }
    else {
        all.className="all fa-solid fa-bars";
        nav.style.left="0";
        side.style.display="none";
        
    }

}


as.onclick = function(){des()
list.style.left="0";
};

a1.onclick = function(){mega(a,b,c,d,e,f);
    list.style.left="-80%";};

a2.onclick = function(){mega(b,a,c,d,e,f);
    list.style.left="-80%";};

a3.onclick = function(){mega(c,b,a,d,e,f);
    list.style.left="-80%";};

a4.onclick = function(){mega(d,b,c,a,e,f);
    list.style.left="-80%";};

a5.onclick = function(){mega(f,b,c,d,e,a);
list.style.left="-80%";};

a6.onclick = function(){mega(e,b,c,d,a,f);
list.style.left="-80%";};




}