require 'test_helper'

class PersonalDetailsControllerTest < ActionController::TestCase
  setup do
    @personal_detail = personal_details(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:personal_details)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create personal_detail" do
    assert_difference('PersonalDetail.count') do
      post :create, personal_detail: { address: @personal_detail.address, city: @personal_detail.city, dob: @personal_detail.dob, phone: @personal_detail.phone, photo: @personal_detail.photo, pin: @personal_detail.pin, user_id: @personal_detail.user_id }
    end

    assert_redirected_to personal_detail_path(assigns(:personal_detail))
  end

  test "should show personal_detail" do
    get :show, id: @personal_detail
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @personal_detail
    assert_response :success
  end

  test "should update personal_detail" do
    patch :update, id: @personal_detail, personal_detail: { address: @personal_detail.address, city: @personal_detail.city, dob: @personal_detail.dob, phone: @personal_detail.phone, photo: @personal_detail.photo, pin: @personal_detail.pin, user_id: @personal_detail.user_id }
    assert_redirected_to personal_detail_path(assigns(:personal_detail))
  end

  test "should destroy personal_detail" do
    assert_difference('PersonalDetail.count', -1) do
      delete :destroy, id: @personal_detail
    end

    assert_redirected_to personal_details_path
  end
end
