class CreateCities < ActiveRecord::Migration[5.1]
  def change
    create_table :cities do |t|
      t.string :name
      t.string :city_url
      t.string :places

      t.timestamps
    end
  end
end
