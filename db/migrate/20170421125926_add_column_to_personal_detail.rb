class AddColumnToPersonalDetail < ActiveRecord::Migration
  def change
    add_column :personal_details, :description, :string
  end
end
