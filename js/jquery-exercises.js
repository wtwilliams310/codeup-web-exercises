// $(function() {
// 	alert('The DOM has finished loading the second time.')
// })

// $(() => {
// 	alert('The DOM has finished loading the third time.')

// })

// window.onload(alert("like this"))


var ele = document.getElementById('my-element');
ele.addEventListener('click', function(e) {
    console.log(e);
});

$(".h1-id").click(function(){
	$(".h1-id").css('color', 'red')
})

// $("#paragraph").dblclick(() => {
// 	$("#paragraph").css('color', 'blue')
// })

$('#paragraph').hover(
    function() {
        $(this).css('background-color', '#FF0');
    },
    function() {
        $(this).css('background-color', '#FFF');
    }
);