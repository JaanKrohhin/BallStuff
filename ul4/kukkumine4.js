var x=20, y=20, r=10;
var ysamm=1, xsamm=0, ykiirendus=0.4;
var t, g; //tahvel, graafiline kontekst
function algus(){
    t=document.getElementById("tahvel");
    g=t.getContext("2d");
    setInterval('liigu()', 100);
}
function joonista(){
    g.clearRect(0, 0, t.width, t.height);
    g.strokeStyle="brown";
    g.fillStyle="brown";
    g.beginPath()
    g.fillRect(0,150,300,50);
    g.stroke();
    g.fill();
    g.closePath();

    g.strokeStyle="cyan";
    g.fillStyle="lightblue";
    g.beginPath()
    g.arc(x, y, r, 0, 2*Math.PI, true);
    g.stroke();
    g.fill();
    g.closePath();
}
function liigu(){
    ysamm=ysamm+ykiirendus;
    if(kasSees(x+xsamm, y+ysamm)){
        y=Math.random() * (51 - 20) + 20;;
        x=Math.random() * (201 - 20) + 20;;
        ysamm=1;
    } else {
        x=x+xsamm;
        y=y+ysamm;
    }
    joonista();
}
function kasSees(uusX, uusY){
    if(uusX-r<0){return false;}
    if(uusX+r>t.width){return false;}
    if(uusY-r<0){return false;}
    if(uusY+r>t.height){return false;}
    if (uusY<149){return false}
    return true;
}
function hiirAlla(e){
    var tahvlikoht=t.getBoundingClientRect();
    var hx=e.clientX-tahvlikoht.left;
    var hy=e.clientY-tahvlikoht.top;
    x=hx;
    y=hy;
    ysamm=0;
}
