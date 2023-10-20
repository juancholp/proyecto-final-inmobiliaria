import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import React, { useState } from 'react'
import Input from '@mui/material/Input'
import IconButton from '@mui/material/IconButton'
import PhotoCamera from '@mui/icons-material/PhotoCamera'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'

let filtros = {
  tipo: '',
  direccion: '',
  departamento: '',
  descripcion: '',
  foto: null,
  telefono: 0,
  precio: 0,
  metrosConstruidos: 0,
  metrosTerreno: 0,
  cochera: false,
  amenities: false,
  fecha: null,
}

function FormAsAdmin() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [filtro, setFiltro] = useState(filtros)
  const [selectedDate, setSelectedDate] = useState(null)

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate)
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0]
    setSelectedImage(file)
  }

  return (
    <div className='main'>
      <FormControl>
        <label>Tipo de propiedad:</label>
        <input type='text' id='type' />
        <label>Direccion:</label>
        <input type='text' id='dir' />
        <label>Departamento:</label>
        <input type='text' id='dep' />
        <label>Descripcion:</label>
        <input type='text' id='descr' />
        <label>Foto:</label>
        <div>
          <input
            accept='image/*'
            style={{ display: 'none' }}
            id='image-upload'
            type='file'
            onChange={handleImageChange}
          />
          <label htmlFor='image-upload'>
            <Input
              id='upload-input'
              placeholder='Subir imagen'
              readOnly
              endAdornment={
                <IconButton color='primary' component='span'>
                  <PhotoCamera />
                </IconButton>
              }
            />
          </label>
          {selectedImage && (
            <img
              src={URL.createObjectURL(selectedImage)}
              alt='Uploaded'
              style={{ maxWidth: '100%', maxHeight: '200px' }}
            />
          )}
        </div>
        <label>Teléfono de contacto:</label>
        <input type='number' id='num' />
        <label>Precio:</label>
        <input type='number' id='price' />
        <label>Metros cuadrados construidos:</label>
        <input type='number' id='m2constructed' />
        <label>Metros cuadrados del terreno:</label>
        <input type='number' id='m2terrain' />
        <label>¿Tiene cochera?</label>
        <input type='checkbox' id='boolCochera' />
        <label>¿Tiene amenities?</label>
        <input type='checkbox' id='boolAmenities' />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar value={selectedDate} onChange={handleDateChange} />
        </LocalizationProvider>
        <Button
          variant='contained'
          onClick={() => {
            filtros.tipo = document.getElementById('type').value
            filtros.direccion = document.getElementById('dir').value
            filtros.departamento = document.getElementById('dep').value
            filtros.descripcion = document.getElementById('descr').value
            filtros.foto = selectedImage
            filtros.telefono = document.getElementById('num').value
            filtros.precio = document.getElementById('price').value
            filtros.metrosConstruidos =
              document.getElementById('m2constructed').value
            filtros.metrosTerreno = document.getElementById('m2terrain').value
            let checkboxCochera = document.getElementById('boolCochera')
            filtros.cochera = checkboxCochera.checked
            let checkboxAmenities = document.getElementById('boolAmenities')
            filtros.amenities = checkboxAmenities.checked
            filtros.fecha = selectedDate
            setFiltro(filtros)
            alert('Formulario enviado')
          }}
        >
          Enviar
        </Button>
      </FormControl>
    </div>
  )
}

export default FormAsAdmin
