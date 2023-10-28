function change_color()
{
	var r_border = document.getElementById("r_border").value;
	var g_border = document.getElementById("g_border").value;
	var b_border = document.getElementById("b_border").value;
	var width = document.getElementById("width").value;
	var r_bg = document.getElementById("r_bg").value;
	var g_bg = document.getElementById("g_bg").value;
	var b_bg = document.getElementById("b_bg").value;

	var paragraph = document.getElementById("paragraph");

	paragraph.style.borderColor = `rgb(${r_border}, ${g_border}, ${b_border})`;
	paragraph.style.borderWidth = width;
	paragraph.style.backgroundColor = `rgb(${r_bg}, ${g_bg}, ${b_bg})`;
}

function validate_password()
{
	var password_1 = document.getElementById("password_1").value;
	var password_2 = document.getElementById("password_2").value;

	if (password_1.length < 8)
	{
		alert("Invalid password: Length of password 1 must be at least 8 characters");
	}
	else if (password_2.length < 8)
	{
		alert("Invalid password: Length of password 2 must be at least 8 characters");
	}
	else if (password_1 != password_2)
	{
		alert("Invalid password: Passwords 1 and 2 do not match");
	}
	else
	{
		alert("Password is valid");
	}
}
