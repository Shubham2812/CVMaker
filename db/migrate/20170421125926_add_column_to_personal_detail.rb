class AddColumnToPersonalDetail < ActiveRecord::Migration
  def change
    add_column :personal_details, :description, :string
    add_column :personal_details, :designation, :string

  end
end
