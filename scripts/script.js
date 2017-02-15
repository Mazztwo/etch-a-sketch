$(document).ready(function()
{

	var $grid = $("#grid");
	var gridSize = 4;

	for(var i  = 0; i < gridSize; i = i + 1)
	{
		for(var k = 0; i < gridSize; k = k + 1)
		{
			$grid.append("<div class='gridPixel'></div>");
		}
	}


});