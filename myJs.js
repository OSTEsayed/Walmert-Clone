let list2 = document.getElementsByClassName("list2")[0];
let list = document.getElementsByClassName("list")[0];
let a1 = document.getElementsByClassName("a1")[0];
let a2 = document.getElementsByClassName("a2")[0];
let a = document.getElementsByClassName("a")[0];
let b = document.getElementsByClassName("b")[0];
let c = document.getElementsByClassName("c")[0];
let d = document.getElementsByClassName("d")[0];
let e = document.getElementsByClassName("e")[0];
let f = document.getElementsByClassName("f")[0];
let cat = document.getElementsByClassName("categorie")[0];

function mega(a,b,c,d,e,f){
    a.style.display="grid";
    b.style.display="none";
    c.style.display="none";
    d.style.display="none";
    e.style.display="none";
    f.style.display="none";
}
function megaout(a){
    a.style.display="none";
};
function test(a,b,c,d,e,f){
    if(a.style.display=="none" && b.style.display=="none" && c.style.display=="none" && d.style.display=="none" && f.style.display=="none" && e.style.display=="none")
{ return true;}
return false;
}
cat.onmouseover = function(){list.style.display="block";};
list.onmouseleave = function(){
    if (test(a,b,c,d,e,f)==true){list.style.display="none";}
};
    
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






