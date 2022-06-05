function dispdata()
{
    var name = document.getElementById("name").value;
    localStorage.setItem("Name",name)   ;
    var email = document.getElementById("email").value;
    localStorage.setItem("Email",email)   ;
    var age = document.getElementById("age").value;
    localStorage.setItem("Age",age)   ;
    var phone = document.getElementById("phone").value;
    localStorage.setItem("Phone Number",phone)   ;
    var aadhar = document.getElementById("aadhar").value;
    localStorage.setItem("Aadhar Number",aadhar)   ;
    var address = document.getElementById("address").value;
    localStorage.setItem("Address",address)   ;
    var date = document.getElementById("date").value;
    localStorage.setItem("Date",date)   ;
    return false; 
}
