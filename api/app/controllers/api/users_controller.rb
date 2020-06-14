class Api::UsersController < Api::ApiController

  def create

    @user = User.new(
      given_name: user_params[:firstName],
      family_name: user_params[:lastName],
      email: user_params[:email],
      password: user_params[:password],
      password_confirmation: user_params[:password_confirmation]
    )

    if @user.save
      render json: {
        signed_up: true,
        user: @user.as_json(only: [:id, :given_name, :family_name])
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
      render json: @user, except: [:password_digest, :created_at, :updated_at]
    else 
      render json: invalid_request
    end
  end

  def update
  end

  def destroy
  end
  
  private

  def invalid_request(args)
    { errors: ["Invalid request."]}
  end

  def user_params
    params.require(:user).permit(:firstName, :lastName, :email, :password, :passwordConfirmation)
  end

end
