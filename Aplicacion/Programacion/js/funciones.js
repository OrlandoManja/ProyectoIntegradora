function validar(){
	//alert("entro");
correo=document.getElementById("email");
	if(document.frmlogin.txtuser.value==""){
		alert("Correo Obligatorio");
		document.frmlogin.txtuser.focus();
	}
		else if (document.frmlogin.txtpass.value==""){
		alert("Password Obligatorio");
		document.frmlogin.txtpass.focus();
}
	else{
		if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(document.frmlogin.txtuser.value) && validar_clave(document.getElementById("password").value) == true){
			//envia el formulario
				document.frmlogin.submit();
		}else{
			alert("Correo invalido");
					document.frmlogin.txtuser.focus();
		}
	}
	if(validar_clave(document.getElementById("password").value) == true)
	{
	}
	else
	{
		alert("contraseña invalida");
				document.frmlogin.txtpass.focus();
	}
	}
function validar_clave(contrasenna)
{
	if(contrasenna.length >= 8)
	{		
		var mayuscula = false;
		var minuscula = false;
		var numero = false;
		var caracter_raro = false;
				
		for(var i = 0;i<contrasenna.length;i++)
		{
			if(contrasenna.charCodeAt(i) >= 65 && contrasenna.charCodeAt(i) <= 90)
			{
				mayuscula = true;
			}
			else if(contrasenna.charCodeAt(i) >= 97 && contrasenna.charCodeAt(i) <= 122)
			{
				minuscula = true;
			}
			else if(contrasenna.charCodeAt(i) >= 48 && contrasenna.charCodeAt(i) <= 57)
			{
				numero = true;
			}
			else
			{
				caracter_raro = true;
			}
		}
		if(mayuscula == true && minuscula == true && caracter_raro == true && numero == true)
		{
			return true;
		}
	}
	return false;
}