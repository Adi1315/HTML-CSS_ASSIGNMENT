
		function validate(){
			var e=document.getElementById("email").value;
			var p=document.getElementById("password").value;
			var lowerCaseLetters = /[a-z]/g;
			var upperCaseLetters = /[A-Z]/g;
			var digits = /[0-9]/g;
			if(e==""){
				alert("enter email id");
				return false;
			}
			if(p==""){
				alert("Password missing");
				return false;
			}
			if(p.length<8){
				alert("weak password less than 8 word");
				return false;
			}
			if(!p.match(lowerCaseLetters)){
				alert("password has no lower case value");
				return false;
			}
			if(!p.match(upperCaseLetters)){
				alert("password has no lower case value");
				return false;
			}
			if(!p.match(digits)){
				alert("password has no lower case value");
				return false;
			}
		}