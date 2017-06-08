class AddColumnToPersonalDetails < ActiveRecord::Migration
  def change
    add_column :personal_details, :designation, :string
  end
end
