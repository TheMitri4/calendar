var lectureList = document.querySelectorAll(".lecture");

for(var i = 0; i < lectureList.length; i++){
	listShow(i);
}

function listShow(i){
	lectureList[i].addEventListener("click", function(evt){
		evt.preventDefault();
		if(this.classList.contains("active")){
			this.classList.remove("active");
		}
		else{
			this.classList.add("active");
		}
	});
}

//var today = new Date();

