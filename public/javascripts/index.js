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

document.getElementById('submit').addEventListener('click',function  like_name(e) {
    e.preventDefault();
    var array = JSON.stringify(get_data());
   
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'gmail/mail', true);
    xhr.setRequestHeader('Content-Type','application/json')
    
    xhr.send(array)
    xhr.onreadystatechange = function(){

        if (this.readyState == 4){
            var date_rr = JSON.parse(xhr.responseText)
           console.log(date_rr,'d')

           
            
        } else {}
    }  
    
    reset_data()
})