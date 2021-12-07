var x=20, y=20, r=14;
var ysamm=1, ykiirendus=0.4;
var t, g; //tahvel, graafiline kontekst
function algus(){
    t=document.getElementById("tahvel");
    g=t.getContext("2d");
    setInterval('liigu()', 100);
}
function joonista(){
    g.clearRect(0, 0, t.width, t.height);
    g.strokeStyle="blue";
    g.fillStyle="blue";
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
    if (y>149){
        y+=ysamm/4;
    }
    else{
        ysamm=ysamm+ykiirendus;
        y+=ysamm;
    }
    joonista();
}
function hiirAlla(e){
    var tahvlikoht=t.getBoundingClientRect();
    var hx=e.clientX-tahvlikoht.left;
    var hy=e.clientY-tahvlikoht.top;
    x=hx;
    y=hy;
    if (r>2){
        r-=1;
    }
    ysamm=0;
}