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

	
	$("td.gridPixel").mouseenter(function()
	{
		$(this).addClass("visited");

	});
	

});