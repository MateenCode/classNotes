require 'test_helper'

class StocksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @stock = stocks(:one)
  end

  test "should get index" do
    get stocks_url, as: :json
    assert_response :success
  end

  test "should create stock" do
    assert_difference('Stock.count') do
      post stocks_url, params: { stock: { price: @stock.price, symbol: @stock.symbol } }, as: :json
    end

    assert_response 201
  end

  test "should show stock" do
    get stock_url(@stock), as: :json
    assert_response :success
  end

  test "should update stock" do
    patch stock_url(@stock), params: { stock: { price: @stock.price, symbol: @stock.symbol } }, as: :json
    assert_response 200
  end

  test "should destroy stock" do
    assert_difference('Stock.count', -1) do
      delete stock_url(@stock), as: :json
    end

    assert_response 204
  end
end
