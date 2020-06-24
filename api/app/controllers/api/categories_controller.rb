class Api::CategoriesController < Api::ApiController

  def create
    @category = @current_user.categories.build(category_params)
    
    if @category.save
      render json: {
        category_created: true,
        category: @category.as_json(except: [:created_at, :updated_at])
      }
    else
      render json: {
        category_created: false,
        errors: "Category creation was unsuccessful."
      }
    end

  end

  private

  def category_params
    params.require(:category).permit(:title, :color)
  end

end