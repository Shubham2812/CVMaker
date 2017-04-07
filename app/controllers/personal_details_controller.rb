class PersonalDetailsController < ApplicationController
  before_action :set_personal_detail, only: [:show, :edit, :update, :destroy]

  # GET /personal_details
  # GET /personal_details.json
  def index
    @personal_details = PersonalDetail.all
  end

  # GET /personal_details/1
  # GET /personal_details/1.json
  def show
  end

  # GET /personal_details/new
  def new
    @personal_detail = PersonalDetail.new
  end

  # GET /personal_details/1/edit
  def edit
  end

  # POST /personal_details
  # POST /personal_details.json
  def create
    @personal_detail = PersonalDetail.new(personal_detail_params)
    @personal_detail.user_id = current_user.id
    if(params[:personal_detail][:photo])
      filename = params[:personal_detail][:photo].original_filename
      file = @personal_detail.user_id.to_s + "_" + filename
      temp_file = params[:personal_detail][:photo]
      @personal_detail.photo = filename
      File.open(Rails.root.join('public', 'uploads', 'users', file), 'wb') do |f|
          f.write(temp_file.read)
      end
    end
    respond_to do |format|
      if @personal_detail.save
        format.html { redirect_to @personal_detail, notice: 'Personal detail was successfully created.' }
        format.json { render :show, status: :created, location: @personal_detail }
      else
        format.html { render :new }
        format.json { render json: @personal_detail.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /personal_details/1
  # PATCH/PUT /personal_details/1.json
  def update
    respond_to do |format|
      if @personal_detail.update(personal_detail_params)
        if(params[:personal_detail][:photo])
          filename = params[:personal_detail][:photo].original_filename
          file = @personal_detail.user_id.to_s + "_" + filename
          old_file = @personal_detail.user_id.to_s + "_" + @personal_detail.photo
          temp_file = params[:personal_detail][:photo]
          @personal_detail.photo = filename
          
          if(@personal_detail.photo)
            File.delete(Rails.root.join('public', 'uploads', 'users', old_file))
          end

          File.open(Rails.root.join('public', 'uploads', 'users', file), 'wb') do |f|
            f.write(temp_file.read)
          end
        end
        @personal_detail.save
        format.html { redirect_to @personal_detail, notice: 'Personal detail was successfully updated.' }
        format.json { render :show, status: :ok, location: @personal_detail }
      else
        format.html { render :edit }
        format.json { render json: @personal_detail.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /personal_details/1
  # DELETE /personal_details/1.json
  def destroy
    @personal_detail.destroy
    respond_to do |format|
      format.html { redirect_to personal_details_url, notice: 'Personal detail was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_personal_detail
      @personal_detail = PersonalDetail.where(:user_id => current_user.id).first
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def personal_detail_params
      params.require(:personal_detail).permit(:name, :dob, :phone, :address, :city, :pin)
    end
end
