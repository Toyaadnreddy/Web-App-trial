/*import {dispdata} from "./userscript";
function table()
{
    let tbl=document.getElementById("mytable");
    //let a=document.getElementById("result").innerHTML=localStorage.getItem("Name");
    var row=tbl.insertRow(0);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);
    var cell5=row.insertCell(4);
    var cell6=row.insertCell(5);
    var cell7=row.insertCell(6);
    cell1.innerHtml=document.getElementById("name",);
    cell2.innerHtml=document.getElementById("email");
    cell3.innerHtml=document.getElementById("age");
    cell4.innerHtml=document.getElementById("phone");
    cell5.innerHtml=document.getElementById("aadhar");
    cell6.innerHtml=document.getElementById("address");
    cell7.innerHtml=document.getElementById("date");
    
}*/
document.getElementById("result").innerHTML=localStorage.getItem("textname");
document.getElementById("result1").innerHTML=localStorage.getItem("textemail");
document.getElementById("result2").innerHTML=localStorage.getItem("numage");
document.getElementById("result3").innerHTML=localStorage.getItem("numphone");
document.getElementById("result4").innerHTML=localStorage.getItem("numaadhar");
document.getElementById("result5").innerHTML=localStorage.getItem("textaddress");
document.getElementById("result6").innerHTML=localStorage.getItem("caldate");