// media query event handler 
if (matchMedia) {
	var mq = window.matchMedia ("(max-width: 800px)");
	mq.addListener(WidthChange);
	WidthChange(mq);
}

// media query change
function WidthChange(mq) {
	if (mq.matches) {
		$(document).ready(function() {
			// Iterate over each element and replace the tag while maintaining attributes
      $('span.cl-more').each(function() {

        // Create a new element and assign it attributes from the current element
        var NewElement = $("<a />");
        $.each(this.attributes, function(i, attrib){
          $(NewElement).attr(attrib.name, attrib.value);
        });

          // Replace the current element with the new one and carry over the contents
          $(this).replaceWith(function () {
            return $(NewElement).append($(this).contents());
          });

        });
		});
	} else {
		$(document).ready(function() {
			// Iterate over each element and replace the tag while maintaining attributes
      $('a.cl-more').each(function() {

        // Create a new element and assign it attributes from the current element
        var NewElement = $("<span />");
        $.each(this.attributes, function(i, attrib){
          $(NewElement).attr(attrib.name, attrib.value);
        });

          // Replace the current element with the new one and carry over the contents
          $(this).replaceWith(function () {
            return $(NewElement).append($(this).contents());
          });

        });
		});

	}
}