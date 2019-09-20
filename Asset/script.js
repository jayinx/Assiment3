
var myWrapper = document.getElementById("wrapper");

var changingColor = 2;
var changingColor2 = 20;
var changingColor3 = 50;
var changingColor4 = 150;
var changingColor5 = 30;
	for (var i = 0; i < 10; i++) {

		changingColor = changingColor + 10;
		changingColor2 = changingColor2 + 50;
		changingColor3 = changingColor3 + 15;
		changingColor4 = changingColor4 + 20;
		changingColor5 = changingColor5 + 30

		 var myModule = `

		 <div
		 	class="module"
		 	style="background-color:rgb(${changingColor},0,${changingColor2}); 
		 	transform: rotate (0.5deg);"
		 >

		 		<div
		      	class="star-five"
		      	style="transform: scale(0.6,0.6); margin-left: 0%; "
		 		></div>

		 		<div
		      	class="star-five"
		      	style="transform: scale(0.5,0.5); margin-left: 20%;"
		 		></div>

		 		<div
		      	class="star-five"
		      	style="transform: scale(0.6,0.6); margin-left: 40%;"
		 		></div>

		 		<div
		      	class="star-five"
		      	style="transform: scale(0.5,0.5); margin-left: 60%;"
		 		></div>

		 		<div
		      	class="star-five"
		      	style="transform: scale(0.6,0.6); margin-left: 80%;"
		 		></div>


		 </div>
		 `;
		var mySecondModule =`<div
		 	class="module"
		 	style="background-color:rgb(${changingColor3},${changingColor4},248);"
		 >

		 <div
		      	class="heart"
		      	style=" margin-left: 5%;"
		 		></div>

		 		<div
		      	class="heart"
		      	style="margin-left: 25%;"
		 		></div>

		 		<div
		      	class="heart"
		      	style="margin-left: 45%;"
		 		></div>

		 		<div
		      	class="heart"
		      	style="margin-left: 65%;"
		 		></div>
		 		<div
		      	class="heart"
		      	style="margin-left: 85%;"
		 		></div>


		 </div>

		 `;


		if(i % 2 === 0){
			myWrapper.insertAdjacentHTML('beforeend' , myModule);
		}else{
			myWrapper.insertAdjacentHTML('afterbegin' , mySecondModule);
		}

	}
