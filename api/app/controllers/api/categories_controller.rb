class Api::CategoriesController < Api::ApiController

  def create
    # @category = @current_user.categories.build(category_params)
    # byebug
  end

  private

  def category_params
    params.require(:category).permit(:title, :color)
  end

end