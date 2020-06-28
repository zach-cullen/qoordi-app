class CreateProjectTimelines < ActiveRecord::Migration[6.0]
  def change
    create_table :project_timelines do |t|
      t.integer :project_id
      t.integer :timeline_id

      t.timestamps
    end
  end
end
