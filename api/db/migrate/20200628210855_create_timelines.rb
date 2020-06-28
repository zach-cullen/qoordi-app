class CreateTimelines < ActiveRecord::Migration[6.0]
  def change
    create_table :timelines do |t|
      t.integer :project_id
      t.string :title

      t.timestamps
    end
  end
end
