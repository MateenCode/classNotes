class TradersController < ApplicationController
  before_action :set_trader, only: [:show, :update, :destroy]

  # GET /traders
  def index
    @traders = Trader.all

    render json: @traders.to_json(include: :commodities)
  end

  # GET /traders/1
  def show
    render json: @trader.to_json(include: :commodities)
  end

  # POST /traders
  def create
    @trader = Trader.new(trader_params)

    if @trader.save
      render json: @trader, status: :created, location: @trader
    else
      render json: @trader.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /traders/1
  def update
    if @trader.update(trader_params)
      render json: @trader
    else
      render json: @trader.errors, status: :unprocessable_entity
    end
  end

  # DELETE /traders/1
  def destroy
    @trader.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_trader
      @trader = Trader.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def trader_params
      params.require(:trader).permit(:name, :money)
    end
end
