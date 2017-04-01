class HomeController < ApplicationController
  def index
  end

  def profile
  	@personal_detail = PersonalDetail.find_by(:user_id => current_user.id)
  	@links = Link.where(:user_id => current_user.id)
  	@class_10 = Education.where(:user_id => current_user.id, :tag => 'class_10') 
  	@class_12 = Education.where(:user_id => current_user.id, :tag => 'class_12')
  	@college = Education.where(:user_id => current_user.id, :tag => 'college')
  	@skills = Skill.where(:user_id => current_user.id)
  	@about = About.where(:user_id => current_user.id)
  	
  end

  def add_link
  	link = Link.create(
  			:user_id => current_user.id,
  			:field => params[:field],
  			:value => params[:value],
  			:description => params[:description]
  		)
  	render json: link
  end

  def add_education
  	education = Education.create(
  			:user_id => current_user.id,
  			:tag => params[:tag],
  			:field => params[:field],
  			:value => params[:value],
  			:description => params[:description]
  		)
  	render json: education
  end

  def add_skill
  	skill = Skill.create(
  			:user_id => current_user.id,
  			:field => params[:field],
  			:value => params[:value],
  			:description => params[:description]
  		)
  	render json: skill
  end

  def add_about
  	about = About.create(
  			:user_id => current_user.id,
  			:field => params[:field],
  			:value => params[:value],
  			:description => params[:description]
  		)
  	render json: about
  end

end
