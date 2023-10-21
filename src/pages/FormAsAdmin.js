import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import React, { useState } from 'react'
import Input from '@mui/material/Input'
import IconButton from '@mui/material/IconButton'
import PhotoCamera from '@mui/icons-material/PhotoCamera'

let filtros = {
  title: '',
  tipoMoneda: '',
  precio: 0,
  disposicion: '',
  tipoVenta: '',
  ubicacion: [],
  comodidades: [],
  descripcion: '',
  aceptaMascotasOptions: false,
  zona: '',
  garaje: false,
  m2Edificados: 0,
  m2Terreno: 0,
  tipoDePropiedad: '',
  banos: 0,
  dormitorio: 0,
  anioConstruccion: 0,
  estado: '',
  imgsrc: [],
}

function FormAsAdmin() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [filtro, setFiltro] = useState(filtros)

  const handleImageChange = (event) => {
    const file = event.target.files[0]
    setSelectedImage(file)
  }

  return (
    <div className='main'>
      <FormControl>
        <label>Título:</label>
        <input type='text' id='title' />
        <label>Tipo de moneda:</label>
        <input type='text' id='tipoMoneda' />
        <label>Precio:</label>
        <input type='number' id='precio' />
        <label>Disposición:</label>
        <input type='text' id='disposicion' />
        <label>Tipo de venta:</label>
        <input type='text' id='tipoVenta' />
        <label>Ubicación:</label>
        <input type='text' id='ubicacion' />
        <Button
          variant='outlined'
          onClick={() => {
            let e = document.getElementById('ubicacion')
            filtros.ubicacion.push(e.value)
            alert('Ubicación agregada')
          }}
        >
          Agregar ubicación
        </Button>
        <label>Comodidades:</label>
        <input type='text' id='comodidades' />
        <Button
          variant='outlined'
          onClick={() => {
            let e = document.getElementById('comodidades')
            filtros.comodidades.push(e.value)
            alert('Comodidad agregada')
          }}
        >
          Agregar comodidad
        </Button>
        <label>Descripción:</label>
        <input type='text' id='descripcion' />
        <label>¿Acepta mascotas?</label>
        <input type='checkbox' id='aceptaMascotasOptions' />
        <label>Zona:</label>
        <input type='text' id='zona' />
        <label>¿Tiene garaje?</label>
        <input type='checkbox' id='garaje' />
        <label>Metros cuadrados edificados:</label>
        <input type='number' id='m2Edificados' />
        <label>Metros cuadrados del terreno:</label>
        <input type='number' id='m2Terreno' />
        <label>Tipo de propiedad:</label>
        <input type='text' id='tipoDePropiedad' />
        <label>Baños:</label>
        <input type='number' id='banos' />
        <label>Dormitorios:</label>
        <input type='number' id='dormitorio' />
        <label>Año de construcción:</label>
        <input type='number' id='anioConstruccion' />
        <label>Estado:</label>
        <input type='text' id='estado' />
        <label>Foto:</label>
        <div>
          <input
            accept='image/*'
            style={{ display: 'none' }}
            id='imgsrc'
            type='file'
            onChange={handleImageChange}
          />
          <label htmlFor='imgsrc'>
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
        <Button
          variant='outlined'
          onClick={() => {
            let e = selectedImage.name
            filtros.imgsrc.push(e)
            alert('Foto agregada')
            console.log(filtros.imgsrc)
          }}
        >
          Subir foto
        </Button>

        <Button
          variant='contained'
          onClick={() => {
            filtros.title = document.getElementById('title').value
            filtros.tipoMoneda = document.getElementById('tipoMoneda').value
            filtros.precio = document.getElementById('precio').value
            filtros.disposicion = document.getElementById('disposicion').value
            filtros.tipoVenta = document.getElementById('tipoVenta').value
            filtros.descripcion = document.getElementById('descripcion').value
            let checkboxMascotas = document.getElementById(
              'aceptaMascotasOptions'
            )
            filtros.aceptaMascotasOptions = checkboxMascotas.checked
            filtros.zona = document.getElementById('zona').value
            let checkboxGaraje = document.getElementById('garaje')
            filtros.garaje = checkboxGaraje.checked
            filtros.m2Edificados = document.getElementById('m2Edificados').value
            filtros.m2Terreno = document.getElementById('m2Terreno').value
            filtros.tipoDePropiedad =
              document.getElementById('tipoDePropiedad').value
            filtros.banos = document.getElementById('banos').value
            filtros.dormitorio = document.getElementById('dormitorio').value
            filtros.anioConstruccion =
              document.getElementById('anioConstruccion').value
            filtros.estado = document.getElementById('estado').value
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

/*
Referencia:
{
    id: 1,
    title: "Alquiler de monoambiente",
    tipoMoneda: "U$D",
    precio: 800,
    disposicion: "Frente",
    tipoVenta: "Alquiler",
    ubicacion: ["Malvin", "Montevideo"],
    comodidades: ["Balcón", "Cochera", "Placard en cocina", "Aire Acondicionado", "Jardín"],
    descripcion: "Renovada! Preciosa casa en Malvín,",
      "Amplia, cómoda y accesible, dispuesta totalmente en una planta, todos los ambientes con ventilación y luz natural.",
      "4 Dormitorios, el principal con baño en Suite.",
      "Dormitorio con funcional vestidor.",
      "3 baños completos, uno de ellos con jacuzzi.",
      "Cochera para dos autos",
      "Barbacoa con doble parrillero y horno de pan",
      "Divino fondo verde.",
      "Cocina muy amplia, con comedor, mesada de granito amplia, muebles bajo y alto mesada. Horno empotrado, anafe y lavavajilla.",
      "Estufa a leña de cerámica refractaria de alto rendimiento.",
      "Aire acondicionado en todos los ambientes.",
      "Portón automático, cochera para dos autos, rejas perimetrales, cerca eléctrica, sistema de video vigilancia y alarma.",
      "PH independiente sin gastos comunes",
      "ACEPTA FINANCIACIÓN BANCO",
      "VC NEGOCIOS INMOBILIARIOS",
    aceptaMascotasOptions: "Si",
    zona: "Capurro",
    garaje: "Si",
    m2Edificados: 288,
    m2Terreno: 267,
    tipoDePropiedad: "Apartamento",
    banos: 1,
    dormitorio: 1,
    anioConstruccion: 2002,
    estado: "Requiere mantenimiento",
    imgsrc: ["https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.122103_CW139153_47.jpg" ]
  },
*/
