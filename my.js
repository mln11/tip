


$("#SubmitButton").click(function(){
    var yo = document.myform.total.value;
    var hi = document.myform.percent.value;
    lo = parseFloat(yo);
    jo = parseFloat(hi)/100.0;
    total = lo*jo;
    abstot = lo+total;


    alert("You should tip: $"+ total.toFixed(2) +"\n\nTotal of Purchase: $"+abstot.toFixed(2));
   
});


