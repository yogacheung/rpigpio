function login(name, password, callback){
  $.ajax({    
    url: "php/login.php?username="+name+"&password="+password,    
  })
  .done(callback);
}

///////////////////////////////////////////////////////////

function onlogin() {
  var gname = document.getElementById("username").value;
  var gpw = document.getElementById("password").value;
  
	login(gname, gpw, function(res){
		if(res == "no"){
			alert("Name or/and Password are incorrect!");
		}else{
			window.location.href = res;
		}
	});
}