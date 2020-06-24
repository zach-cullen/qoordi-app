class Api::ProjectsController < Api::ApiController

  def show
    @project = @current_user.projects.find_by(id: params[:id])
    if @project
      render json: {
        request_successful: true,
        project: @project.as_json
      }
    else
      render json: {
        request_successful: false
      }
    end

  end

  def create
    @project = @current_user.projects.build(
      title: project_params[:title], 
      date: parse_date_from_project_params
    )
    @project.category = valid_category
    
    if @current_user.save && @current_user.projects.find_by(id: @project.id)
      render json: {
        project_created: true,
        project: @project.as_json(except: [:created_at, :updated_at])
      }
    else
      render json: {
        project_created: false,
        errors: "Project creation was unsuccessful."
      }
    end
  end

  private

  def parse_date_from_project_params
    require 'time'
    Date.parse(project_params[:date])
  end

  # returns either a valid category that belongs to current user or the user's first category
  def valid_category
    category = @current_user.categories.find_by(id: project_params[:category_id])
    category ? category : @current_user.categories.first
  end

  def project_params
    params.require(:project).permit(:title, :date, :category_id)
  end

end