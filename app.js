function encrypt() {
	var rawText = document.getElementById("myInput").value;
	var tempText = "";
	for (i = 0; i < rawText.length; i++) {
		tempText += enc (rawText[i]);
		document.getElementById("result").innerHTML = tempText;
	}
}


function decrypt() {
	var rawText = document.getElementById("myInput").value;
	var tempText = "";
	for (i = 0; i < rawText.length; i++) {
		tempText += dec (rawText[i]);
		document.getElementById("result").innerHTML = tempText;
	}
}



function enc(x) {

	switch (x){

		case "0":
			return "z";
			break;

		case "1":
			return "D";
			break;

		case "2":
			return "v";
			break;

		case "3":
			return "Y";
			break;

		case "4":
			return "<";
			break;

		case "5":
			return "h";
			break;

		case "6":
			return "a";
			break;

		case "7":
			return "*";
			break;

		case "8":
			return "p";
			break;

		case "9":
			return "s";
			break;

		case " ":
			return "J";
			break;

		case "a":
			return "R";
			break;

		case "b":
			return "&";
			break;

		case "c":
			return "f";
			break;

		case "d":
			return "x";
			break;

		case "e":
			return "H";
			break;

		case "f":
			return "u";
			break;

		case "g":
			return "t";
			break;

		case "h":
			return "M";
			break;

		case "i":
			return "y";
			break;

		case "j":
			return "S";
			break;



		case "k":
			return "/";
			break;

		case "l":
			return "k";
			break;

		case "m":
			return "(";
			break;

		case "n":
			return "l";
			break;

		case "ñ":
			return "}";
			break;

		case "o":
			return "n";
			break;

		case "p":
			return ")";
			break;

		case "q":
			return "W";
			break;

		case "r":
			return "L";
			break;

		case "s":
			return "]";
			break;

		case "t":
			return "o";
			break;

		case "u":
			return "{";
			break;

		case "v":
			return "[";
			break;

		case "w":
			return "A";
			break;

		case "x":
			return "m";
			break;

		case "y":
			return "F";
			break;

		case "z":
			return ">";
			break;

		case ",":
			return ";";
			break;	

		case "ll":
			return "A";
			break;	

	

				


			
	}
}


function decrypt() {
	var rawText = document.getElementById("myInput").value;
	var tempText = "";
	for (i = 0; i < rawText.length; i++) {
		tempText += dec (rawText[i]);
		document.getElementById("result").innerHTML = tempText;
	}
}



function dec(x) {

	switch (x){

		case "z":
			return "0";
			break;

		case "D":
			return "1";
			break;

		case "v":
			return "2";
			break;

		case "Y":
			return "3";
			break;

		case "<":
			return "4";
			break;

		case "h":
			return "5";
			break;

		case "a":
			return "6";
			break;

		case "*":
			return "7";
			break;

		case "p":
			return "8";
			break;

		case "s":
			return "9";
			break;

		case "J":
			return " ";
			break;





		case "R":
			return "a";
			break;

		case "&":
			return "b";
			break;

		case "f":
			return "c";
			break;

		case "x":
			return "d";
			break;

		case "H":
			return "e";
			break;

		case "u":
			return "f";
			break;

		case "t":
			return "g";
			break;

		case "M":
			return "h";
			break;
		
		case "y":
			return "i";
			break;

		case "S":
			return "j";
			break;

		case "/":
			return "k";
			break;

		case "k":
			return "l";
			break;

		case "(":
			return "m";
			break;

		case "l":
			return "n";
			break;

		case "}":
			return "ñ";
			break;

		case "n":
			return "o";
			break;
			
		case ")":
			return "p";
			break;

		case "W":
			return "q";
			break;

		case "L":
			return "r";
			break;

		case "]":
			return "s";
			break;	

		case "o":
			return "t";
			break;

		case "{":
			return "u";
			break;

		case "[":
			return "v";
			break;

		case "A":
			return "w";
			break;	

		case "m":
			return "x";
			break;

		case "F":
			return "y";
			break;

		case ">":
			return "z";
			break;

		case ";":
			return ",";
			break;

		case "A":
			return "ll";
			break;	
		
			
			
	}
}