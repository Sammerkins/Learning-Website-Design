const game = {
	hearts: 1.5,
	clickKoopa(event) {
		if (game.hearts > 0) {
			game.hearts -= 0.5;
		}
		// game.redrawHearts();
	},
	clickQuestion(event) {
		if (game.hearts < 3) {
			game.hearts += 0.5;
		}
		// game.redrawHearts();
	},
	redrawHearts() {
		// TODO: use game.hearts to get the class names correct
		let hearts = document.getElementById("hearts");

		let one = document.createElement("i");
		one.className = "nes-icon is-large heart";
		let two = document.createElement("i");
		two.className = "nes-icon is-large heart";
		let three = document.createElement("i");
		three.className = "nes-icon is-large heart";

		hearts.innerHTML = "";
		hearts.appendChild(one);
		hearts.appendChild(two);
		hearts.appendChild(three);

		// jQuery:
		// $("#TurtheDude1, #TurtleDude2").on("cilck", function () {
		// 	$("#hearts")
		// 		.empty()
		// 		.html("<i class='nes-icon is-large heart'></i>");
		// });
	},
};

document
	.getElementById("TurtleDude1")
	.addEventListener("click", game.clickKoopa);
