
var push_arr = [];
function push_self () {
    var b;
    var array = JSON.stringify(get_data.call(null,'name','password'));
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'loginin/user', true);
    xhr.setRequestHeader('Content-Type','application/json')
    
    xhr.send(array)
    xhr.onreadystatechange = function(){

        if (this.readyState == 4){
            var date_rr = JSON.parse(xhr.responseText)
        //    console.log(date_rr.name)
           if(date_rr.length === 0){
                send_form.call(null,'name','password','gmail/mail')
           }else if(date_rr.length>0){console.log('ne ma')}

           
            
        } 
    }  
   
}


function get_data(name,password) {
    var data={
    name:  document.getElementById(name).value,
    password:  document.getElementById(password).value,
  
     }
 return data
 }
 
 function reset_data(name,password) {
     document.getElementById(name).value='';
     document.getElementById(password).value='';
 }
 
 
 
 function send_form(name,password,path_post) {
   

     var array = JSON.stringify(get_data.call(null,name,password));

    
     var xhr = new XMLHttpRequest();
     xhr.open('POST', path_post, true);
     xhr.setRequestHeader('Content-Type','application/json')
     
     xhr.send(array)
     xhr.onreadystatechange = function(){
 
         if (this.readyState == 4){
             var date_rr = JSON.parse(xhr.responseText)
            console.log(date_rr,date_rr.length)
 
            
             
         } else {}
     }  
     
     reset_data.call(null,name,password)

 }
 if(document.getElementById('submit')){
document.getElementById('submit').addEventListener('click', function(e){
    e.preventDefault();
    
   push_self()
   
}) 
 }
  
if(document.getElementById('submit_db')){
    
    document.getElementById('submit_db').addEventListener('click', function(r){
        r.preventDefault();
        
        send_form.call(null,'name_db','password_db','loginin/user')
        
    } )
}
