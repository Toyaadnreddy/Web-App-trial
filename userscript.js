function dispdata()
{
    var n = document.getElementById("name").value;
    localStorage.setItem("textname",n)   ;
    var e = document.getElementById("email").value;
    localStorage.setItem("textemail",e)   ;
    var a = document.getElementById("age").value;
    localStorage.setItem("numage",a)   ;
    var p = document.getElementById("phone").value;
    localStorage.setItem("numphone",p)   ;
    var aa = document.getElementById("aadhar").value;
    localStorage.setItem("numaadhar",aa)   ;
    var ad = document.getElementById("address").value;
    localStorage.setItem("textaddress",ad)   ;
    var d = document.getElementById("date").value;
    localStorage.setItem("caldate",d)   ;
    return false; 
}
