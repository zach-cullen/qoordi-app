class Api::UsersController < Api::ApiController

  def create

    @user = User.new(
      given_name: user_params[:firstName],
      family_name: user_params[:lastName],
      email: user_params[:email],
      password: user_params[:password],
      password_confirmation: user_params[:password_confirmation]
    )

    @user.categories.build(title: "Other", color: "gray")

    if @user.save
      session[:user_id] = @user.id
      render json: {
        signed_up: true,
        user: @user.as_json(only: [:id])
      }
    else
      render json: {
        signed_up: false,
        errors: @user.errors.full_messages
      }
      
    end

  end

  def show
    @user = User.find_by(id: params[:id])
    if @user
      render json: {
        user: @user.as_json(only: [:id, :given_name, :family_name]),
        projects: @user.projects.as_json(except: [:created_at, :updated_at]),
        categories: @user.categories.as_json(except: [:created_at, :updated_at]),
      }
    else 
      render json: invalid_request
    end
  end
  
  private

  def invalid_request(args)
    { errors: ["Invalid request."]}
  end

  def user_params
    params.require(:user).permit(:firstName, :lastName, :email, :password, :passwordConfirmation)
  end

end
