class CreateTimeblocks < ActiveRecord::Migration[6.0]
  def change
    create_table :timeblocks do |t|
      t.integer :timeline_id
      t.string :title
      t.text :description
      t.string :start_time
      t.string :end_time
      t.string :color

      t.timestamps
    end
  end
end
