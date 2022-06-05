function table(){
    let tbl=document.getElementById("mytable");
    //let a=document.getElementById("result").innerHTML=localStorage.getItem("Name");
    var row=tbl.insertRow();
    var cell1=row.insertCell();
    var cell2=row.insertCell();
    var cell3=row.insertCell();
    var cell4=row.insertCell();
    var cell5=row.insertCell();
    var cell6=row.insertCell();
    var cell7=row.insertCell();
    cell1.innerHtml=document.getElementById("name").innerHTML=localStorage.getItem("Name");
    cell2.innerHtml=document.getElementById("email");
    cell3.innerHtml=document.getElementById("age");
    cell4.innerHtml=document.getElementById("phone");
    cell5.innerHtml=document.getElementById("aadhar");
    cell6.innerHtml=document.getElementById("address");
    cell7.innerHtml=document.getElementById("date");
    
}