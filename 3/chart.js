/**
 * Stan Gumeniuk i@igo.su
 * Date: 01.09.13
 * Time: 13:57
 */

function chart(principal, interest, monthly, payments){
    var graph = document.getElementById("graph");
    console.log(graph);
    graph.width = graph.width; //magic!!

    if (arguments.length == 0 || !graph.getContext()) {
        console.log("arguments.length="+arguments.length);
        console.log("graph.getContext()="+graph.getContext());
        console.log("smtg wrng");
        return;
    }

    var g = graph.getContext("2d");
    var width = graph.width, height = graph.height;

    function paymentToX(n) { return n*width/payments;}
    function amountToY(a) {return height - (a*height/(monthly*payments*1.05));}

    g.moveTo(paymentToX(0), amountToY(0));
    g.lineTo(paymentToX(payments), amountToY(monthly*payments));

    g.lineTo(paymentToX(payments),amountToY(0));
    g.closePath();
    g.fillStyle="#f88";
    g.fill();
    g.font="bold 12px sans-serif";
    g.fillText("Total interest Payments", 20,20);

    var equity = 0;
    d.beginPath();
    g.moveTo(paymentToX(0),amountToY(0));
    for (var p =1; p<=payments;p++){
        var thisMonthsInterest = (principal-equity)*interest;
        equity+=(monthly - thisMonthsInterest);
        g.lineTo(paymentToX(p),amountToY(equity));
    }

    g.lineWidth = 3;
    g.stroke();
    g.fillStyle = "black";
    g.fillText("Loan balance",20,50);
    g.textAlign = "center";
    var y = amountToY(0);
    for (var year=1; year*12<payments; year++){
        var x = paymentToX(year*12);
        g.fillRect(x-0.5, y-3, 1,3);
        if (year % 5 == 0 && year*12 !==payments){
            g.fillText(String(year),x,y-5);
        }
    }

    g.textAlign = "right";
    g.textBaseline = "middle";
    var ticks = [monthly*payments, principal];
    var rightEdge = paymentToX(payments)
    for(var i = 0; i<ticks.length;i++){
        var y = amountToY(ticks[i]);
        g.fillRect(rightEdge-3, -0.5,3 ,1);
        g.fillText(String(ticks[i].toFixed(0)), rightEdge-5,y);
    }

}
