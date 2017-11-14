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
console.log(get_data())
    // var xhr = new XMLHttpRequest();
    // xhr.open('POST', 'back/hello', true);
    // xhr.setRequestHeader('Content-Type','application/json')
    
    // xhr.send(JSON.stringify(date))
    // xhr.onreadystatechange = function(){

    //     if (this.readyState == 4){
    //         let date_rr = JSON.parse(xhr.responseText)
    //        console.log(date_rr)

           
            
    //     } else {}
    // }  
    
    reset_data()
})