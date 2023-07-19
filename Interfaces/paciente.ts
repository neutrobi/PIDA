export interface IPaciente {
	nombre: string
    apellidoPaterno: string
    apellidoMaterno: string
    tipoSnaguineo: string
    extravios: number
    tratamientos: string
    enfermedades: string
    inicioPadecimiento: Date | null
}