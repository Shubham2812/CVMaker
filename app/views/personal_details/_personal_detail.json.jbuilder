json.extract! personal_detail, :id, :user_id, :dob, :phone, :address, :city, :pin, :photo, :created_at, :updated_at
json.url personal_detail_url(personal_detail, format: :json)
