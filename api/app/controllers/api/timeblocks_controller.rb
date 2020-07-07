class Api::TimeblocksController < Api::ApiController

  def create 
    @timeline = valid_timeline
    
    if @timeline
      
      @timeblock = @timeline.timeblocks.build(timeblock_params)
      if @timeblock.save
        render json: {
          timeblock_created: true,
          timeblock: @timeblock.as_json(except: [:created_at, :updated_at]),
        }
      else 
        render json: {
          timeblock_created: false,
          errors: "Timeblock creation was unsuccessful."
        }
      end

    end
  end

  def update 
    @timeblock = valid_timeline.timeblocks.find_by(id: params[:id])
    changeable_attributes = {
      title: timeblock_params[:title],
      description: timeblock_params[:description],
      color: timeblock_params[:color],
      start_time: timeblock_params[:start_time],
      end_time: timeblock_params[:end_time]
    }
    if @timeblock.update_attributes(changeable_attributes)
      render json: {
        timeblock_updated: true,
        timeblock: @timeblock.as_json(except: [:created_at, :updated_at]),
      }
    else
      render json: {
        timeblock_created: false,
        errors: "Update was unsuccessful."
      }
    end
    
  end

  private 

  # returns timeline if timeblock timeline belongs to current_user or false if not
  def valid_timeline
    timeline = Timeline.find_by(id: timeblock_params[:timeline_id])
    timeline.project.users.include?(@current_user) ? timeline : false
  end

  def timeblock_params
    params.require(:timeblock).permit(:timeline_id, :id, :title, :description, :start_time, :end_time, :color)
  end

end