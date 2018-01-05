var nav = document.querySelector(".nav");
var pic = document.querySelectorAll("img");






index = 0;
 	var timer;
	nonediv()
	function nonediv(){
		for(var i = 0;i<pic.length;i++){
			pic[i].style.display = "none";
		}
	 }
	pic[index].style.display = "block";

	
	time()
	function  time(){
		timer = setInterval(function(){
		index++;
		if(index>5){
			index = 0;
		}
		nonediv();
		pic[index].style.display = "block";
		},1000)
	}
	

	