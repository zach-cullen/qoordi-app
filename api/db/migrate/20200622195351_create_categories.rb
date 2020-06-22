class CreateCategories < ActiveRecord::Migration[6.0]
  def change
    create_table :categories do |t|
      t.integer :user_id
      t.string :title
      t.string :color

      t.timestamps
    end
  end
end
