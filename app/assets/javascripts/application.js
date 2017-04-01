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
	var about_content_field = document.getElementById("about_content_field");
	var about_content_value = document.getElementById("about_content_value");
	var about_content_submit = document.getElementById("about_content_submit");
	var about_head_image = document.getElementById("about_head_image");

	var external_links_content_field = document.getElementById("external_links_content_field");
	var external_links_content_value = document.getElementById("external_links_content_value");
	var external_links_content_submit = document.getElementById("external_links_content_submit");
	var external_links_head_image = document.getElementById("external_links_head_image");

	var class_10_content_field = document.getElementById("class_10_content_field");
	var class_10_content_value = document.getElementById("class_10_content_value");
	var class_10_content_submit = document.getElementById("class_10_content_submit");
	var class_10_head_image = document.getElementById("class_10_head_image");
	
	var class_12_content_field = document.getElementById("class_12_content_field");
	var class_12_content_value = document.getElementById("class_12_content_value");
	var class_12_content_submit = document.getElementById("class_12_content_submit");
	var class_12_head_image = document.getElementById("class_12_head_image");
	
	var college_content_field = document.getElementById("college_content_field");
	var college_content_value = document.getElementById("college_content_value");
	var college_content_submit = document.getElementById("college_content_submit");
	var college_head_image = document.getElementById("college_head_image");

	var skills_content_field = document.getElementById("skills_content_field");
	var skills_content_value = document.getElementById("skills_content_value");
	var skills_content_submit = document.getElementById("skills_content_submit");
	var skills_head_image = document.getElementById("skills_head_image");

	external_links_head_image.addEventListener("click", function(){
		if(external_links_content_field.style.display == "none")
		external_links_content_field.style.display = "block"
		else
		external_links_content_field.style.display = "none"
		
		if(external_links_content_value.style.display == "none")
		external_links_content_value.style.display = "block"
		else
		external_links_content_value.style.display = "none"
			
		if(external_links_content_submit.style.display == "none")
		external_links_content_submit.style.display = "block"
		else
		external_links_content_submit.style.display = "none"
		
	});

	class_10_head_image.addEventListener('click', function(){
		if(class_10_content_field.style.display == "none")
		class_10_content_field.style.display = "block"
		else
		class_10_content_field.style.display = "none"
		
		if(class_10_content_value.style.display == "none")
		class_10_content_value.style.display = "block"
		else
		class_10_content_value.style.display = "none"
		
		if(class_10_content_submit.style.display == "none")
		class_10_content_submit.style.display = "block"
		else
		class_10_content_submit.style.display = "none"
		
	});

	class_12_head_image.addEventListener('click', function(){
		if(class_12_content_field.style.display == "none")
		class_12_content_field.style.display = "block"
		else
		class_12_content_field.style.display = "none"
		
		if(class_12_content_value.style.display == "none")
		class_12_content_value.style.display = "block"
		else
		class_12_content_value.style.display = "none"
		
		if(class_12_content_submit.style.display == "none")
		class_12_content_submit.style.display = "block"
		else
		class_12_content_submit.style.display = "none"
	});

	college_head_image.addEventListener('click', function(){
		if(college_content_field.style.display == "none")
		college_content_field.style.display = "block"
		else
		college_content_field.style.display = "none"
		
		if(college_content_value.style.display == "none")
		college_content_value.style.display = "block"
		else
		college_content_value.style.display = "none"
		
		if(college_content_submit.style.display == "none")
		college_content_submit.style.display = "block"
		else
		college_content_submit.style.display = "none"
	});

	skills_head_image.addEventListener('click', function(){
		if(skills_content_field.style.display == "none")
		skills_content_field.style.display = "block"
		else
		skills_content_field.style.display = "none"
		
		if(skills_content_value.style.display == "none")
		skills_content_value.style.display = "block"
		else
		skills_content_value.style.display = "none"
		
		if(skills_content_submit.style.display == "none")
		skills_content_submit.style.display = "block"
		else
		skills_content_submit.style.display = "none"
	});

	about_head_image.addEventListener('click', function(){
		if(about_content_field.style.display == "none")
		about_content_field.style.display = "block"
		else
		about_content_field.style.display = "none"
		
		if(about_content_value.style.display == "none")
		about_content_value.style.display = "block"
		else
		about_content_value.style.display = "none"
		
		if(about_content_submit.style.display == "none")
		about_content_submit.style.display = "block"
		else
		about_content_submit.style.display = "none"
	});

	external_links_content_submit.addEventListener("click", function(){
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
				var listItem = document.createElement("li");
				var node1 = document.createTextNode(link.field + " ");
				var node2 = document.createTextNode(link.value);
				listItem.appendChild(node1);
				listItem.appendChild(node2);
				list.appendChild(listItem);

			},
			error: function(){
				alert("error");
			}
		});
	})

	class_10_content_submit.addEventListener("click", function(){
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
				var listItem = document.createElement("li");
				var node1 = document.createTextNode(education.field + " ");
				var node2 = document.createTextNode(education.value);
				listItem.appendChild(node1);
				listItem.appendChild(node2);
				list.appendChild(listItem);
			},
			error: function(){
				alert("error");
			}
		});
	})

	class_12_content_submit.addEventListener("click", function(){
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
				var listItem = document.createElement("li");
				var node1 = document.createTextNode(education.field + " ");
				var node2 = document.createTextNode(education.value);
				listItem.appendChild(node1);
				listItem.appendChild(node2);
				list.appendChild(listItem);
			},
			error: function(){
				alert("error");
			}
		});
	})

	college_content_submit.addEventListener("click", function(){
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
				var listItem = document.createElement("li");
				var node1 = document.createTextNode(education.field + " ");
				var node2 = document.createTextNode(education.value);
				listItem.appendChild(node1);
				listItem.appendChild(node2);
				list.appendChild(listItem);
			},
			error: function(){
				alert("error");
			}
		});
	})

	skills_content_submit.addEventListener("click", function(){
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
				var listItem = document.createElement("li");
				var node1 = document.createTextNode(skill.field + " ");
				var node2 = document.createTextNode(skill.value);
				listItem.appendChild(node1);
				listItem.appendChild(node2);
				list.appendChild(listItem);
			},
			error: function(){
				alert("error");
			}
		});
	})

	about_content_submit.addEventListener("click", function(){
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
				var listItem = document.createElement("li");
				var node1 = document.createTextNode(about.field + " ");
				var node2 = document.createTextNode(about.value);
				listItem.appendChild(node1);
				listItem.appendChild(node2);
				list.appendChild(listItem);
			},
			error: function(){
				alert("error");
			}
		});
	})

}

window.addEventListener("load", function(){
	main();
})
