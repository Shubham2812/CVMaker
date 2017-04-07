class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception
  before_action :authenticate_user!
  helper_method :avatar, :getLink

  def avatar
  	personal_detail = PersonalDetail.where(:user_id => current_user.id).first
    if personal_detail
  	 return "/uploads/users/" + personal_detail.user_id.to_s + "_" + personal_detail.photo
  	else
      return
    end
  end

  def getLink type
    link = Link.find_by(:user_id => current_user.id, :field => type)
    if link
    return link.value
    else
    return
    end  
  end
end
