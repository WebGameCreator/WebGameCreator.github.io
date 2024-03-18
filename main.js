function encode(input) {
	return btoa(input).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, ".");
}

function decode(input) {
	return atob(input.replace(/-/g, "+").replace(/_/g, "/").replace(/\./g, "="));
}

const query = new URLSearchParams(location.search);
if (query.has("a")) {
	document.querySelector("html").innerHTML = decode(query.get("a"));
}
else {
	document.getElementById("content").style.display = "block";
	document.getElementById("openButton").onclick = function () {
		window.open("https://webgamecreator.github.io?a=" + encode(document.getElementById("input").value), "_self");
	}
}