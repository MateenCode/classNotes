class LedgersController < ApplicationController
  before_action :set_ledger, only: [:show, :update, :destroy]

  # GET /ledgers
  def index
    @ledgers = Ledger.all

    render json: @ledgers.to_json(include: [:trader, :commodity])
  end

  # GET /ledgers/1
  def show
    render json: @ledger.to_json(include: [:trader, :commodity])
  end

  # POST /ledgers
  def create
    @ledger = Ledger.new(ledger_params)

    if @ledger.save
      render json: @ledger, status: :created, location: @ledger
    else
      render json: @ledger.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /ledgers/1
  def update
    if @ledger.update(ledger_params)
      render json: @ledger
    else
      render json: @ledger.errors, status: :unprocessable_entity
    end
  end

  # DELETE /ledgers/1
  def destroy
    @ledger.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_ledger
      @ledger = Ledger.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def ledger_params
      params.require(:ledger).permit(:trader_id, :commodity_id, :qty)
    end
end
