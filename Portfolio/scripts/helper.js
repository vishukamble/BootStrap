var skills = '<div class="col-md-3"><img src="./img/%data%.jpg" alt="javascript" 
class="img-responsive img-rounded"></div>';

var skills_array=['h1','h2','h3','h4', 'h5', 'h6'];
var skills_new = '';

for(var i=0; i<skills_new.length; i++)
{
	skills_new = skills.replace(('%data'), skills_array[i]);
	$('.skills-section-images').append(skills_new);
}