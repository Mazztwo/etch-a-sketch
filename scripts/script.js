$(document).ready(function()
{

	var $grid = $("#grid");
	var gridSize = 4;

	for(var i  = 1; i <= gridSize; i = i + 1)
	{
		$grid.append("<tr id='" + i + "'></tr>");

		for(var k = 1; k <= gridSize; k = k + 1)
		{
			$("#" + i).append("<td class='gridPixel'></td>");	
		}
	}

	
	$(".gridPixel").mouseenter(function()
	{
		$(this).addClass("visited");

	});
	

	$("#clearButton").click(function()
	{
		$(".gridPixel").removeClass("visited");
	});


	$("#changePixelButton").click(function()
	{
		gridSize = prompt("Please enter a grid size X (Resulting grid will be X by X.", "grid size");
		
		$("tr").remove();
		var newWidth = 500/gridSize;
		$(".gridPixel").width(newWidth);


		for(var i  = 1; i <= gridSize; i = i + 1)
		{
			$grid.append("<tr id='" + i + "'></tr>");

			for(var k = 1; k <= gridSize; k = k + 1)
			{
				$("#" + i).append("<td class='gridPixel'></td>");	
			}
		}
	});

});



