// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

function main()
{
	var about_content_submit = document.getElementById("about_content_submit");
	var about_head_image = document.getElementById("about_head_image");

	var external_links_content_submit = document.getElementById("external_links_content_submit");
	var external_links_head_image = document.getElementById("external_links_head_image");

	var class_10_content_submit = document.getElementById("class_10_content_submit");
	var class_10_head_image = document.getElementById("class_10_head_image");
	
	var class_12_content_submit = document.getElementById("class_12_content_submit");
	var class_12_head_image = document.getElementById("class_12_head_image");
	
	var college_content_submit = document.getElementById("college_content_submit");
	var college_head_image = document.getElementById("college_head_image");

	var eduation_other_content_submit = document.getElementById("eduation_other_content_submit");
	var education_head_image = document.getElementById("education_head_image");

	var skills_content_submit = document.getElementById("skills_content_submit");
	var skills_head_image = document.getElementById("skills_head_image");

	var delete_items = document.getElementsByClassName("delete");

	if(external_links_head_image)
	{	external_links_head_image.addEventListener("click", function(){
			var external_links_form = document.getElementsByClassName("external_links_form")[0];
			toggleDisplay(external_links_form)
			
		});
	}
	if(class_10_head_image)
	{	class_10_head_image.addEventListener('click', function(){
			var class_10_form = document.getElementsByClassName("class_10_form")[0];
			toggleDisplay(class_10_form)
			
		});
	}

	if(class_12_head_image)
	{	class_12_head_image.addEventListener('click', function(){
			var class_12_form = document.getElementsByClassName("class_12_form")[0];
			toggleDisplay(class_12_form)
		});	
	}

	if(college_head_image)
	{	college_head_image.addEventListener('click', function(){
			var college_form = document.getElementsByClassName("college_form")[0];
			toggleDisplay(college_form)
		});
	}


	if(education_head_image)
	{	education_head_image.addEventListener('click', function(){
			var education_other_form = document.getElementsByClassName("education_other_form")[0];
			toggleDisplay(education_other_form)
		});
	}

	if(skills_head_image)
	{	skills_head_image.addEventListener('click', function(){
			var skills_form = document.getElementsByClassName("skills_form")[0];
			toggleDisplay(skills_form)
		});
	}

	if(about_head_image)
	{	about_head_image.addEventListener('click', function(){
			var about_form = document.getElementsByClassName("about_form")[0];
			toggleDisplay(about_form)
		});
	}
	if(external_links_content_submit)
	{	external_links_content_submit.addEventListener("click", function(){
			event.preventDefault();
			var external_links_content_field = document.getElementById("external_links_content_field");
			var external_links_content_value = document.getElementById("external_links_content_value");

			var url = '/profile/links/add';
			var info = {
				field: external_links_content_field.value,
				value: external_links_content_value.value
			}

			$.ajax(
			{	
				url: url,
				method: 'post',
				data: info,
				success: function(link){
					console.log(link);
					var list = document.getElementById("external_links_content_list");
					var listItem = document.createElement('div');
					listItem.style.width = '80%';
					listItem.style.marginLeft = '60px';
					listItem.innerHTML = '<span>' + external_links_content_field.value + '</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>' + external_links_content_value.value + '</span>';
					list.appendChild(listItem);
					external_links_content_field.value = '';
					external_links_content_value.value = '';

				},
				error: function(){
					alert("error");
				}
			});
		})
	}

	if(class_10_content_submit)
	{	class_10_content_submit.addEventListener("click", function(){
			event.preventDefault();
			var class_10_content_field = document.getElementById("class_10_content_field");
			var class_10_content_value = document.getElementById("class_10_content_value");
		
			var url = '/profile/education/add';
			var info = {
				field: class_10_content_field.value,
				value: class_10_content_value.value,
				tag: 'class_10'
			}

			$.ajax(
			{	
				url: url,
				method: 'post',
				data: info,
				success: function(education){
					console.log(education);
					var list = document.getElementById("class_10_content_list");
					var listItem = document.createElement('div');
					listItem.style.width = '80%';
					listItem.style.marginLeft = '60px';
					listItem.innerHTML = '<span>' + class_10_content_field.value + '</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>' + class_10_content_value.value + '</span>';
					list.appendChild(listItem);
					class_10_content_field.value = '';
					class_10_content_value.value = '';
				},
				error: function(){
					alert("error");
				}
			});
		})
	}

	if(class_12_content_submit)
	{	class_12_content_submit.addEventListener("click", function(){
			event.preventDefault();
			var class_12_content_field = document.getElementById("class_12_content_field");
			var class_12_content_value = document.getElementById("class_12_content_value");
		
			var url = '/profile/education/add';
			var info = {
				field: class_12_content_field.value,
				value: class_12_content_value.value,
				tag: 'class_12'
			}

			$.ajax(
			{	
				url: url,
				method: 'post',
				data: info,
				success: function(education){
					console.log(education);
					var list = document.getElementById("class_12_content_list");
					var listItem = document.createElement('div');
					listItem.style.width = '80%';
					listItem.style.marginLeft = '60px';
					listItem.innerHTML = '<span>' + class_12_content_field.value + '</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>' + class_12_content_value.value + '</span>';
					list.appendChild(listItem);
					class_12_content_field.value = '';
					class_12_content_value.value = '';

				},
				error: function(){
					alert("error");
				}
			});
		})
	}

	if(college_content_submit)	
	{	college_content_submit.addEventListener("click", function(event){
			event.preventDefault();
			var college_content_field = document.getElementById("college_content_field");
			var college_content_value = document.getElementById("college_content_value");
		
			var url = '/profile/education/add';
			var info = {
				field: college_content_field.value,
				value: college_content_value.value,
				tag: 'college'
			}

			$.ajax(
			{	
				url: url,
				method: 'post',
				data: info,
				success: function(education){
					console.log(education);
					var list = document.getElementById("college_content_list");
					var listItem = document.createElement('div');
					listItem.style.width = '80%';
					listItem.style.marginLeft = '60px';
					listItem.innerHTML = '<span>' + college_content_field.value + '</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>' + college_content_value.value + '</span>';
					list.appendChild(listItem);
					college_content_field.value = '';
					college_content_value.value = '';

				},
				error: function(){
					alert("error");
				}
			});
		})
	}

	if(eduation_other_content_submit)
	{	education_other_content_submit.addEventListener("click", function(){
			event.preventDefault();
			var education_other_content_field = document.getElementById("education_other_content_field");
			var education_other_content_value = document.getElementById("education_other_content_value");

			var url = '/profile/education/add';
			var info = {
				field: education_other_content_field.value,
				value: education_other_content_value.value,
				tag: 'other'
			}

			$.ajax(
			{	
				url: url,
				method: 'post',
				data: info,
				success: function(education){
					console.log(education);
					var list = document.getElementById("education_other_content_list");
					var listItem = document.createElement('div');
					listItem.style.width = '80%';
					listItem.style.marginLeft = '60px';
					listItem.innerHTML = '<span>' + education_other_content_field.value + '</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>' + education_other_content_value.value + '</span>';
					list.appendChild(listItem);
					education_other_content_field.value = '';
					education_other_content_value.value = '';

				},
				error: function(){
					alert("error");
				}
			});
		})
	}

	if(skills_content_submit)
	{	skills_content_submit.addEventListener("click", function(){
			event.preventDefault();
			var skills_content_field = document.getElementById("skills_content_field");
			var skills_content_value = document.getElementById("skills_content_value");

			var url = '/profile/skill/add';
			var info = {
				field: skills_content_field.value,
				value: skills_content_value.value,
			}

			$.ajax(
			{	
				url: url,
				method: 'post',
				data: info,
				success: function(skill){
					var list = document.getElementById("skills_content_list");
					var listItem = document.createElement('div');
					listItem.style.width = '80%';
					listItem.style.marginLeft = '60px';
					listItem.innerHTML = '<span>' + skills_content_field.value + '</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>' + skills_content_value.value + '</span>';
					list.appendChild(listItem);
					skills_content_field.value = '';
					skills_content_value.value = '';
				},
				error: function(){
					alert("error");
				}
			});
		})
	}

	if(about_content_submit)
	{	about_content_submit.addEventListener("click", function(){
			event.preventDefault();
			var about_content_field = document.getElementById("about_content_field");
			var about_content_value = document.getElementById("about_content_value");

			var url = '/profile/about/add';
			var info = {
				field: about_content_field.value,
				value: about_content_value.value,
			}

			$.ajax(
			{	
				url: url,
				method: 'post',
				data: info,
				success: function(about){
					var list = document.getElementById("about_content_list");
					var listItem = document.createElement('div');
					listItem.style.width = '80%';
					listItem.style.marginLeft = '60px';
					listItem.innerHTML = '<span>' + about_content_field.value + '</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>' + about_content_value.value + '</span>';
					// var node1 = document.createTextNode(about.field + " ");
					// var node2 = document.createTextNode(about.value);
					// listItem.appendChild(node1);
					// listItem.appendChild(node2);
					list.appendChild(listItem);
					about_content_field.value = '';	
					about_content_value.value = '';
				},
				error: function(){
					alert("error");
				}
			});
		})
	}

	function toggleDisplay(element)
	{
		if(element.style.display == 'none')
			element.style.display = 'block'
		else
			element.style.display = 'none'
	}

	if(delete_items)
	{ for(var i=0; i<delete_items.length; i++)
		{
			console.log(delete_items[i]);
			delete_items[i].addEventListener('click', function(){
				console.log(this);
				var url = '/profile/edit/delete'
				var info = {
					item_id: this.id
				}
				var element = this
				$.ajax({
					url: url,
					method: 'post',
					data: info,
					success: function(item){
						console.log(element)
						var child = element.parentNode
						var parent = child.parentNode
						parent.removeChild(child);
					},
					error: function(){
						alert("Error")
					}
				})
			})
		}

	}
}

window.addEventListener("load", function(){
	main();
})
