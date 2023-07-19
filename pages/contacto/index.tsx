import React, {useState} from "react";
import { useRouter } from 'next/router'
import { TextField, Button, Grid } from "@mui/material";
import { PidaLayout } from "../../components/layouts";
import styles from '../../styles/contacto.module.scss';
import { AdapterDateFns  } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {es} from 'date-fns/locale'
import Divider from '@mui/material/Divider';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import { ContactoService } from '../../services';

interface State extends SnackbarOrigin {
  open: boolean;
}

const Contacto = () => {
  const { GuardarDatosContacto, GuardarDatosPaciente } = ContactoService();
  const [toast, setToast] = useState<State>({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = toast;
  const router = useRouter();
  const [mensaje, setMensaje] = useState("")

    /* Datos Paciente */
    const [nombre, setNombre] = useState("")
    const [apellidoP, setApellidoP] = useState("")
    const [apellidoM, setApellidoM] = useState("")
    const [tipoSangre, setTipoSagre] = useState("")
    const [extravios, setExtravios] = useState("")
    const [tratamientos, setTratamientos] = useState("")
    const [patologias, setPatologias] = useState("")
    const [fechaPadecimiento, setFechaPadecimiento] = useState<Date | null>(null)

    /* Datos Contacto */
    const [contactoNombre, setContactoNombre] = useState("")
    const [contactoApellidoP, setContactoApellidoP] = useState("")
    const [contactoApellidoM, setContactoApellidoM] = useState("")
    const [domicilio, setDomicilio] = useState("")
    const [domicilioAlterno, setDomicilioAlterno] = useState("")
    const [telefono, setTelefono] = useState("")
    const [telefonoAlterno, setTelefonoAlterno] = useState("")

    /* Errores */
    const [nombreError, setNombreError] = useState(false)
    const [apellidoPError, setApellidoPError] = useState(false)
    const [apellidoMError, setApellidoMError] = useState(false)
    const [tipoSangreError, setTipoSangreError] = useState(false)
    const [extraviosError, setExtraviosError] = useState(false)
    const [tratamientosError, setTratamientosError] = useState(false)
    const [patologiasError, setPatologiasError] = useState(false)
    const [fechaPadecimientoError, setFechaPadecimientoError] = useState(false)

    const [contactoNombreError, setContactoNombreError] = useState(false)
    const [contactoApellidoPError, setContactoApellidoPError] = useState(false)
    const [contactoApellidoMError, setContactoApellidoMError] = useState(false)
    const [domicilioError, setDomicilioError] = useState(false)
    const [domicilioAlternoError, setDomicilioAlternoError] = useState(false)
    const [telefonoError, setTelefonoError] = useState(false)
    const [telefonoAlternoError, setTelefonoAlternoError] = useState(false)
 
    const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
 
        let errorCampo = false;
        var posicion:SnackbarOrigin = { vertical: 'bottom', horizontal: 'left' }

        setNombreError(false)
        setApellidoPError(false)
        setApellidoMError(false)
        setTipoSangreError(false)
        setExtraviosError(false)
        setTratamientosError(false)
        setPatologiasError(false)
        setFechaPadecimientoError(false)
        setContactoNombreError(false)
        setContactoApellidoPError(false)
        setContactoApellidoMError(false)
        setDomicilioError(false)
        setDomicilioAlternoError(false)
        setTelefonoError(false)
        setTelefonoAlternoError(false)
 
        if (nombre == '') {
            setNombreError(true)
            errorCampo = true;
        }
        if (apellidoP == '') {
          setApellidoPError(true)
          errorCampo = true;
        }
        if (apellidoM == '') {
          setApellidoMError(true)
          errorCampo = true;
        }
        if (tipoSangre == '') {
          setTipoSangreError(true)
          errorCampo = true;
        }
        if (extravios == '') {
          setExtraviosError(true)
          errorCampo = true;
        }
        if (tratamientos == '') {
          setTratamientosError(true)
          errorCampo = true;
        }
        if (patologias == '') {
          setPatologiasError(true)
          errorCampo = true;
        }
        if (fechaPadecimiento == null) {
          setFechaPadecimientoError(true)
          errorCampo = true;
        }
        if (contactoNombre == "") {
          setContactoNombreError(true)
          errorCampo = true;
        }
        if (contactoApellidoP == "") {
          setContactoApellidoPError(true)
          errorCampo = true;
        }
        if (contactoApellidoM == "") {
          setContactoApellidoMError(true)
          errorCampo = true;
        }
        if (domicilio == "") {
          setDomicilioError(true)
          errorCampo = true;
        }
        if (domicilioAlterno == "") {
          setDomicilioAlternoError(true)
          errorCampo = true;
        }
        if (telefono == "") {
          setTelefonoError(true)
          errorCampo = true;
        }
        if (telefonoAlterno == "") {
          setTelefonoAlternoError(true)
          errorCampo = true;
        }
 
        if (errorCampo === false) {
            let datosPaciente = {
              nombre: nombre,
              apellidoPaterno: apellidoP,
              apellidoMaterno: apellidoM,
              tipoSnaguineo: tipoSangre,
              extravios: parseInt(extravios),
              tratamientos: tratamientos,
              enfermedades: patologias,
              inicioPadecimiento: fechaPadecimiento,
            }

            let datosContacto = {
              nombre: contactoNombre,
              apellidoPaterno: contactoApellidoP,
              apellidoMaterno: contactoApellidoM,
              direccion: domicilio,
              direccionAlterna: domicilioAlterno,
              telefono: telefono,
              telefonoAlterno: telefonoAlterno,
            }
            setMensaje('Información guardada con éxito.');
            let res_contacto = null

            var res_paciente = await GuardarDatosPaciente(datosPaciente);
            if(res_paciente != null){
              res_contacto = await GuardarDatosContacto(datosContacto);
            }
            if(res_paciente != null && res_contacto != null){
              setToast({ ...posicion, open: true });
              await timeout(1000);
              router.push('/')
            }else{
              setMensaje('Ocurrio un error al guardar la información, inténtalo más tarde.');
              setToast({ ...posicion, open: true });
              await timeout(5000);
              setToast({ ...toast, open: false });
            }
        } else{
          setMensaje('Verifique los campos.');
          setToast({ ...posicion, open: true });
          await timeout(5000);
          setToast({ ...toast, open: false });
        }
      }

      const timeout = (delay: number) => {
        return new Promise( res => setTimeout(res, delay));
      };


  return (
    <PidaLayout
      title={"Pida - Contacto"}
      pageDescription={
        "Registro para dejar datos del contacto y del paciente"
      }
    >
        <div className={styles['contenedor-formularios']}>
          <form autoComplete="off" onSubmit={handleSubmit}>
              <h2>Datos del paciente </h2>
              <Grid container spacing={2}>
                  <Grid item xs={12}>
                      <TextField 
                          label="Nombre"
                          onChange={e => setNombre(e.target.value)}
                          variant="outlined"
                          color="secondary"
                          type="nombre"
                          sx={{mb: 3}}
                          fullWidth
                          value={nombre}
                          error={nombreError}
                      />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField 
                        label="Apellido paterno"
                        onChange={e => setApellidoP(e.target.value)}
                        variant="outlined"
                        color="secondary"
                        type="apellidoP"
                        sx={{mb: 3}}
                        fullWidth
                        value={apellidoP}
                        error={apellidoPError}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField 
                        label="Apellido materno"
                        onChange={e => setApellidoM(e.target.value)}
                        variant="outlined"
                        color="secondary"
                        type="apellidoM"
                        sx={{mb: 3}}
                        fullWidth
                        value={apellidoM}
                        error={apellidoMError}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField 
                        label="Tipo de sangre"
                        onChange={e => setTipoSagre(e.target.value)}
                        variant="outlined"
                        color="secondary"
                        type="tipoSangre"
                        sx={{mb: 3}}
                        fullWidth
                        value={tipoSangre}
                        error={tipoSangreError}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField 
                        label="Cantidad de extravíos en el pasado"
                        onChange={e => setExtravios(e.target.value)}
                        variant="outlined"
                        color="secondary"
                        type="extravios"
                        sx={{mb: 3}}
                        fullWidth
                        value={extravios}
                        error={extraviosError}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField 
                        label="Tratamientos medicos"
                        onChange={e => setTratamientos(e.target.value)}
                        variant="outlined"
                        color="secondary"
                        type="tratamientos"
                        value={tratamientos}
                        error={tratamientosError}
                        fullWidth
                        sx={{mb: 3}}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField 
                        label="Patologías, alergía o enfermedades"
                        onChange={e => setPatologias(e.target.value)}
                        variant="outlined"
                        color="secondary"
                        type="patologias"
                        value={patologias}
                        error={patologiasError}
                        fullWidth
                        sx={{mb: 3}}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <LocalizationProvider adapterLocale={es}  dateAdapter={AdapterDateFns}>
                      <DatePicker 
                        label="¿Cuándo comenzo el Alzhaimer?"
                        sx={{width:'100%'}}
                        onChange={(date: Date | null) => {
                          setFechaPadecimiento(date);
                        }}
                        value={fechaPadecimiento}
                        className={fechaPadecimientoError == false ? 'fecha':styles['fecha-error']}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>

                  <Grid item xs={12}>
                    <h2>Datos de contacto</h2>
                  </Grid>
                  <Grid item xs={12}>
                      <TextField 
                          label="Nombre"
                          onChange={e => setContactoNombre(e.target.value)}
                          variant="outlined"
                          color="secondary"
                          type="contactoNombre"
                          sx={{mb: 3}}
                          fullWidth
                          value={contactoNombre}
                          error={contactoNombreError}
                      />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField 
                        label="Apellido paterno"
                        onChange={e => setContactoApellidoP(e.target.value)}
                        variant="outlined"
                        color="secondary"
                        type="contactoApellidoP"
                        sx={{mb: 3}}
                        fullWidth
                        value={contactoApellidoP}
                        error={contactoApellidoPError}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField 
                        label="Apellido materno"
                        onChange={e => setContactoApellidoM(e.target.value)}
                        variant="outlined"
                        color="secondary"
                        type="contactoApellidoM"
                        sx={{mb: 3}}
                        fullWidth
                        value={contactoApellidoM}
                        error={contactoApellidoMError}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField 
                        label="Domicilio"
                        onChange={e => setDomicilio(e.target.value)}
                        variant="outlined"
                        color="secondary"
                        type="domicilio"
                        sx={{mb: 3}}
                        fullWidth
                        value={domicilio}
                        error={domicilioError}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField 
                        label="Domicilio alterno"
                        onChange={e => setDomicilioAlterno(e.target.value)}
                        variant="outlined"
                        color="secondary"
                        type="domicilioAlterno"
                        sx={{mb: 3}}
                        fullWidth
                        value={domicilioAlterno}
                        error={domicilioAlternoError}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField 
                        label="Teléfono"
                        onChange={e => setTelefono(e.target.value)}
                        variant="outlined"
                        color="secondary"
                        type="telefono"
                        sx={{mb: 3}}
                        fullWidth
                        value={telefono}
                        error={telefonoError}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField 
                        label="Teléfono alterno"
                        onChange={e => setTelefonoAlterno(e.target.value)}
                        variant="outlined"
                        color="secondary"
                        type="telefonoAlterno"
                        sx={{mb: 3}}
                        fullWidth
                        value={telefonoAlterno}
                        error={telefonoAlternoError}
                    />
                  </Grid>
                  <Grid item xs={12}>
                     <Button variant="outlined" color="secondary" type="submit">Enviar información</Button>
                    <Snackbar
                      anchorOrigin={{ vertical, horizontal }}
                      open={open}
                      onClose={() => setToast({ ...toast, open: false })}
                      message={mensaje}
                      key={vertical + horizontal}
                    />
                  </Grid>
              </Grid>
          </form>
        </div>
    </PidaLayout>
    
  )
}

export default Contacto;