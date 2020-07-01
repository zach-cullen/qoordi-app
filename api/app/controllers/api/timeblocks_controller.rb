class Api::TimeblocksController < Api::ApiController

  def create 
    
  end

  private 

  def timeblock_params
    params.require(:timeblock).permit(:timeline_id, :title, :description, :start_time, :end_time, :color)
  end

end