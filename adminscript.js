const signUp = e => {
    let formData=
    {
        name :document.getElementById('name').value,
        email : document.getElementById('email').value,
        age : document.getElementById('age').value,
        phone : document.getElementById('phone').value,
        aadhar : document.getElementById('aadhar').value,
        address : document.getElementById('address').value,
        date : document.getElementById('date').value
    }
    localStorage.setItem('formData',JSON.stringify(formData));
    //console.log(localStorage.getItem('formData'));
    dispData();
    e.preventDefault();
}
function dispData()
{
    let{name,email,age,phone,aadhar,address,date}=JSON.parse(localStorage.getItem('formData'));
    var output = document.getElementById('output');
    output.innerHTML=`
        <table>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>${name}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>${email}</td>
                </tr>
                <tr>
                    <td>Age</td>
                    <td>${age}</td>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td>${phone}</td>
                </tr>
                <tr>
                    <td>Aadhar</td>
                    <td>${aadhar}</td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td>${address}</td>
                </tr>
                <tr>
                    <td>Date</td>
                    <td>${date}</td>
                </tr>
            </tbody>
        </table>
    `;
        
}
dispData();