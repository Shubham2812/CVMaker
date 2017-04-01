class CreateLinks < ActiveRecord::Migration
  def change
    create_table :links do |t|
      t.integer :user_id
      t.string :field
      t.string :value
      t.string :description

      t.timestamps null: false
    end
  end
end
