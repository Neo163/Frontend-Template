(function(){
    $(document).ready(function(){
		$("#header").load("common/header.html");
		$("#footer").load("common/footer.html");
	});
})();

// 当前文件，不带后续名
// var a = location.href;
// var b = a.split("/");
// var pageName = b.slice(b.length-1, b.length).toString(String).split(".");
// console.log(pageName.slice(0, 1));
