class ProductsController < ApplicationController
  

  # GET /products
  def index
    @products = Product.all

    render json: @products, status: 200
  end

  # GET /products/1
  def show
    @product = Product.find(params[:id])
    
    render json: @product, status: 200
  end

  # POST /products
  # def create
  #   @product = Product.new(product_params)

  #   if @product.save
  #     render json: @product, status: :created, location: @product
  #   else
  #     render json: @product.errors, status: :unprocessable_entity
  #   end
  # end

  # PATCH/PUT /products/1
  # def update
  #   if @product.update(product_params)
  #     render json: @product
  #   else
  #     render json: @product.errors, status: :unprocessable_entity
  #   end
  # end

  # DELETE /products/1
  # def destroy
  #   @product.destroy
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_product
      @product = Product.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    # def product_params
    #   params.require(:product).permit(:name, :price, :img)
    # end
end
