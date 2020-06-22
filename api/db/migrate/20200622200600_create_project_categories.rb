class CreateProjectCategories < ActiveRecord::Migration[6.0]
  def change
    create_table :project_categories do |t|
      t.integer :project_id
      t.integer :category_id

      t.timestamps
    end
  end
end
