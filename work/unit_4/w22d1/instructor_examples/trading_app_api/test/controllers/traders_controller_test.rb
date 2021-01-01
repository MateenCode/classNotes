require 'test_helper'

class TradersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @trader = traders(:one)
  end

  test "should get index" do
    get traders_url, as: :json
    assert_response :success
  end

  test "should create trader" do
    assert_difference('Trader.count') do
      post traders_url, params: { trader: { money: @trader.money, name: @trader.name } }, as: :json
    end

    assert_response 201
  end

  test "should show trader" do
    get trader_url(@trader), as: :json
    assert_response :success
  end

  test "should update trader" do
    patch trader_url(@trader), params: { trader: { money: @trader.money, name: @trader.name } }, as: :json
    assert_response 200
  end

  test "should destroy trader" do
    assert_difference('Trader.count', -1) do
      delete trader_url(@trader), as: :json
    end

    assert_response 204
  end
end
