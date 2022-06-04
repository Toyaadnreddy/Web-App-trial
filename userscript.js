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
