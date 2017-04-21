class HomeController < ApplicationController
  def index
  end

  def profile
  	@personal_detail = PersonalDetail.find_by(:user_id => current_user.id)
  	@links = Link.where(:user_id => current_user.id)
  	@class_10 = Education.where(:user_id => current_user.id, :tag => 'class_10') 
  	@class_12 = Education.where(:user_id => current_user.id, :tag => 'class_12')
  	@college = Education.where(:user_id => current_user.id, :tag => 'college')
    @education = Education.where(:user_id => current_user.id, :tag => 'other')
  	
    @skills = Skill.where(:user_id => current_user.id)
  	@about = About.where(:user_id => current_user.id)

  end

  def edit
    @personal_detail = PersonalDetail.find_by(:user_id => current_user.id)
    @links = Link.where(:user_id => current_user.id)
    @class_10 = Education.where(:user_id => current_user.id, :tag => 'class_10') 
    @class_12 = Education.where(:user_id => current_user.id, :tag => 'class_12')
    @college = Education.where(:user_id => current_user.id, :tag => 'college')
    @skills = Skill.where(:user_id => current_user.id)
    @about = About.where(:user_id => current_user.id)
    @education = Education.where(:user_id => current_user.id, :tag => 'other')
  end

  def confirm_edit
    params.each do |key, value|
      key = key.split('_')
      puts key.to_s, value.to_s

      if(key.size > 1)
        if(key[0] == 'about')
          about = About.find(key[2].to_i)
          if(key[1] == 'field')
            about.field = value
          elsif(key[1] == 'value')
            about.value = value
          end
          about.save
        elsif(key[0] == 'class')
          education = Education.find(key[3].to_i)
          if(key[2] == 'field')
            education.field = value 
          elsif(key[2] == 'value')
            education.value = value 
          end
          education.save  
        elsif(key[0] == 'college')
          education = Education.find(key[2].to_i)
          if(key[1] == 'field')
            education.field = value 
          elsif(key[1] == 'value')
            education.value = value 
          end 
          education.save
        elsif(key[1] == 'other')
          education = Education.find(key[3].to_i)
          if(key[2] == 'field')
            education.field = value 
          elsif(key[2] == 'value')
            education.value = value 
          end 
          education.save
        elsif(key[0] == 'skills')
          skill = Skill.find(key[2].to_i)
          if(key[1] == 'field')
            skill.field = value 
          elsif(key[1] == 'value')
            skill.value = value 
          end
          skill.save
        elsif(key[0] == 'links')
          link = Link.find(key[2].to_i)
          if(key[1] == 'field')
            link.field = value 
          elsif(key[1] == 'value')
            link.value = value 
          end  
          link.save
        end  
      end
    end
    personal_detail = PersonalDetail.find_by(:user_id => current_user.id)
    personal_detail.name = params[:name]
    personal_detail.gender = params[:gender]
    personal_detail.dob = params[:dob]
    personal_detail.address = params[:address]
    personal_detail.phone = params[:phone]
    personal_detail.city = params[:city]
    personal_detail.pin = params[:pin]
    personal_detail.save

    return redirect_to '/profile'
  end

  def delete
    arr = params[:item_id].split('_')
    puts arr[0], arr[1], arr[2]
    if(arr[0] == 'links')
      link = Link.find(arr[2].to_s)
      link.destroy
    elsif(arr[0] == 'skills')
      skill = Skill.find(arr[2].to_s)
      skill.destroy
    elsif(arr[0] == 'about')
      about = About.find(arr[2].to_s)
      about.destroy
    elsif(arr[0] ==  'education')
      education = Education.find(arr[2].to_s)
      education.destroy
    # elsif(params[:item_id][0] == )
    end
    render json: skill
        
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

  def sample1
    render 'darinsmalls.html', layout: false 
  end

  def sample2
    render 'vaibhav.html', layout: false 
  end

end
