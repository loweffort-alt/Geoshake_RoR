class LocalDataSaverController < ApplicationController
  def save_data_from_local
    # Lógica para manejar la solicitud GET a /api/features
    file = File.read('app/assets/json/seismic_data_output.json')
    json_data = JSON.parse(file)

    existing_ids = Feature.pluck(:external_id)
    new_ids = []

    json_data.each do |data|
      new_data = prepare_data_for_database(data)
      new_ids << new_data['external_id']

      # Desactiva las validaciones temporalmente para esta operación
      Feature.find_or_initialize_by(external_id: new_data['external_id']).tap do |event|
        event.assign_attributes(new_data)
        event.save(validate: true)
      end

      #Feature.find_or_initialize_by(external_id: new_data['external_id']).update(new_data)
    end

    # Eliminar los registros que ya no existen en la respuesta de la API
    Feature.where.not(external_id: new_ids).delete_all
    amount_data = Feature.count

    render json: { 
      message: 'Datos de terremotos guardados exitosamente en la base de datos.',
      total: amount_data
    }
  end

  private

  def prepare_data_for_database(data)
    puts data

    {
      'external_id' => data['id'],
      'magnitude' => data['property']['mag'],
      'place' => data['property']['place'],
      'time' => data['property']['time'],
      'title' => data['property']['title'],
      'longitude' => data['geometry']['coordinates'][0],
      'latitude' => data['geometry']['coordinates'][1],
      'depth' => data['geometry']['coordinates'][2],
    }
  end
end

