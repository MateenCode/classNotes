class TemperaturesController < ApplicationController
  

  # GET /temperatures
  def index
    @temperatures = Temperature.all

    render json: @temperatures
  end

  

  # POST locations/1/temperatures
  def create
    @temperature = Temperature.new(temperature_params)
    @temperature.location_id = params[:location_id]

    if @temperature.save
      render json: @temperature, status: :created
    else
      render json: @temperature.errors, status: :unprocessable_entity
    end
  end

  
  private
    # Use callbacks to share common setup or constraints between actions.
    

    # Only allow a trusted parameter "white list" through.
    def temperature_params
      params.require(:temperature).permit(:average_high_f, :average_low_f)
    end
end
