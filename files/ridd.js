// Yoshi2889 - Rank Image Drop Down
function ridd_mod()
{
	document.getElementById('star_image_input').onchange = function()
	{
		// Get the star count element.
		var star_count = document.getElementById('star_count_input');
		var select_box = document.getElementById('star_image_input');
	
		// If it's empty, set it to 1.
		if (select_box.value && star_count.value == 0)
			star_count.value = 1;
	
		// Else set it to 0 if the select box is empty(?)
		else if (!select_box.value)
			star_count.value = 0;
	
		// Update the star preview.
		document.getElementById('star_preview').src = smf_default_theme_url + '/images/' + ((select_box.value && star_count.value > 0) ? select_box.value : 'blank.gif');
	}
}

if (document.addEventListener)
{
	// Anything decent.
	window.addEventListener("load", ridd_mod);
}
else if (document.attachEvent)
{
	// For IE 8 and other crappy browsers.
	window.attachEvent("onload", ridd_mod);
}