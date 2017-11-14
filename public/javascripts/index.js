function get_data() {
   var data={
   name:  document.getElementById('name').value,
   password: document.getElementById('password').value
    }
return data
}
function reset_data() {
    document.getElementById('name').value='';
    document.getElementById('password').value='';
}

document.getElementById('submit').addEventListener('click',function (e) {
    e.preventDefault();
 
    reset_data()
})