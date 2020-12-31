class AveragesController < ApplicationController
  before_action :set_average, only: [:show, :update, :destroy]

  # GET /averages
  def index
    @averages = Average.all

    render json: @averages
  end

  # GET /averages/1
  def show
    render json: @average
  end

  # POST /averages
  def create
    @average = Average.new(average_params)

    if @average.save
      render json: @average, status: :created, location: @average
    else
      render json: @average.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /averages/1
  def update
    if @average.update(average_params)
      render json: @average
    else
      render json: @average.errors, status: :unprocessable_entity
    end
  end

  # DELETE /averages/1
  def destroy
    @average.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_average
      @average = Average.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def average_params
      params.require(:average).permit(:price, :date)
    end
end
