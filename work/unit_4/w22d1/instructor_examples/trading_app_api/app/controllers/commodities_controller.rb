class CommoditiesController < ApplicationController
  before_action :set_commodity, only: [:show, :update, :destroy]

  # GET /commodities
  def index
    @commodities = Commodity.all

    render json: @commodities.to_json(include: :traders)
  end

  # GET /commodities/1
  def show
    render json: @commodity.to_json(include: :traders)
  end

  # POST /commodities
  def create
    @commodity = Commodity.new(commodity_params)

    if @commodity.save
      render json: @commodity, status: :created, location: @commodity
    else
      render json: @commodity.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /commodities/1
  def update
    if @commodity.update(commodity_params)
      render json: @commodity
    else
      render json: @commodity.errors, status: :unprocessable_entity
    end
  end

  # DELETE /commodities/1
  def destroy
    @commodity.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_commodity
      @commodity = Commodity.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def commodity_params
      params.require(:commodity).permit(:name, :price)
    end
end
