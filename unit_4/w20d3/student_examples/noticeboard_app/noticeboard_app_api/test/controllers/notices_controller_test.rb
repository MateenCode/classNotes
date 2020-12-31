require 'test_helper'

class NoticesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @notice = notices(:one)
  end

  test "should get index" do
    get notices_url, as: :json
    assert_response :success
  end

  test "should create notice" do
    assert_difference('Notice.count') do
      post notices_url, params: { notice: { author: @notice.author, content: @notice.content, title: @notice.title } }, as: :json
    end

    assert_response 201
  end

  test "should show notice" do
    get notice_url(@notice), as: :json
    assert_response :success
  end

  test "should update notice" do
    patch notice_url(@notice), params: { notice: { author: @notice.author, content: @notice.content, title: @notice.title } }, as: :json
    assert_response 200
  end

  test "should destroy notice" do
    assert_difference('Notice.count', -1) do
      delete notice_url(@notice), as: :json
    end

    assert_response 204
  end
end
