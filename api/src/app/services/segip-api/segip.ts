import * as soap from 'soap';
import { appConfig } from 'src/config';

export const PostConsultaDatoPersonaCertificacion=((
    numeroDocumento?:string, complemento?: string, nombre?: string, primerApellido?: string, segundoApellido?: string, fechaNacimiento?: string) =>
    {
        const url = appConfig.SEGIP_URL;    
        try{
            const args = {
                pCodigoInstitucion: process.env.SEGIP_CODIGO_INSTITUCION,
                pUsuario: process.env.SEGIP_USUARIO,
                pContrasenia: process.env.SEGIP_PASSWORD,
                pClaveAccesoUsuarioFinal: process.env.SEGIP_USUARIO_FINAL,            
                pNumeroAutorizacion: null,
                pNumeroDocumento: numeroDocumento,
                pComplemento: complemento,
                pNombre: nombre,
                pPrimerApellido: primerApellido,
                pSegundoApellido: segundoApellido,
                pFechaNacimiento: fechaNacimiento
            };
/*             const config = {
                endpoint: url
            }; */
            const createClientAsync = (soap.createClient).bind(soap);
            const client = createClientAsync(url) ;
            const consultaDatoPersonaCertificacion = (client.ConsultaDatoPersonaCertificacion);
            const result = consultaDatoPersonaCertificacion(args);
            return result.ConsultaDatoPersonaCertificacionResult.CodigoRespuesta == 2;
        }
        catch(error){
            console.log('Dentro del error');
            console.error(error);
            return false;
        }
})