import { requestApi } from './common';
import { IContacto, IPaciente } from '../Interfaces';

export const ContactoService = () => {
    let BASE_URL = 'https://localhost:7273/api/';
    
	const GuardarDatosContacto = async (contacto: IContacto) => {
		let result = null;
        let urlContacto = BASE_URL + 'Pida/Contactos';
		try {
			const { data } = await requestApi.post(
				urlContacto,
				contacto
			);

			if (data != undefined) {
				result = data;
			}
		} catch (error) {
			return result;
		}
		return result;
	};

    const GuardarDatosPaciente = async (paciente: IPaciente) => {
		let result = null;
        let urlPaciente = BASE_URL + 'Pida/Pacientes';
		try {
			const { data } = await requestApi.post(
				urlPaciente,
				paciente
			);
			if (data != undefined) {
				result = data;
			}
		} catch (error) {
			return result;
		}
		return result;
	};

	return {
		GuardarDatosContacto,
        GuardarDatosPaciente
	};
};