class CreateEducations < ActiveRecord::Migration
  def change
    create_table :educations do |t|
      t.integer :user_id
      t.string :tag
      t.string :field
      t.string :value
      t.string :description

      t.timestamps null: false
    end
  end
end
