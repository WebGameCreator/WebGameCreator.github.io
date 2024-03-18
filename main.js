const query = new URLSearchParams(location.search);
if (query.has("a")) {
	document.open();
	document.write(atob(query.get("a")));
	document.close();
}
else {
	document.getElementById("content").style.display = "block";
}