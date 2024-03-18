function encode(input) {
	return btoa(input).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, ".");
}

function decode(input) {
	return atob(input.replace(/-/g, "+").replace(/_/g, "/").replace(/\./g, "="));
}

const query = new URLSearchParams(location.search);
if (query.has("a")) {
	document.open();
	document.write(decode(query.get("a")));
	document.close();
}
else {
	document.getElementById("content").style.display = "block";
	document.getElementById("openButton").onclick = function () {
		window.open("https://webgamecreator.github.io/" + encode(document.getElementById("input")), "_self");
	}
}