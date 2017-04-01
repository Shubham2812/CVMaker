class CreatePersonalDetails < ActiveRecord::Migration
  def change
    create_table :personal_details do |t|
      t.integer :user_id
      t.string :name
      t.string :gender
      t.date :dob
      t.string :phone
      t.string :address
      t.string :city
      t.string :pin
      t.string :photo

      t.timestamps null: false
    end
  end
end
