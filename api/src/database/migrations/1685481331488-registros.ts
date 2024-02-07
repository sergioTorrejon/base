import { MigrationInterface, QueryRunner } from "typeorm"

export class Registros1685481331488 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        INSERT INTO public.persona_natural (nro_identificacion,direccion,status,usuario_creacion,fecha_creacion,usuario_modificacion,fecha_modificacion,tipo_identificacion,email,telefono,nombres,primer_apellido,segundo_apellido,apellido_casada,fecha_nacimiento,id_pais,genero,profesion) VALUES
        ('488888888',NULL,true,'default','2023-01-14 11:11:42.519','default','2023-01-14 11:11:42.519','ci','',NULL,'PEDRO ','ESCAMOSO','TERAN','','2017-02-01 04:00:00.000',NULL,'hombre','estudiante'),
        ('48777777',NULL,true,'default','2023-01-14 11:14:34.353','default','2023-01-14 11:14:34.353','ci','',NULL,'SERGIO ','TERRAZAS','MARTIN','','1969-06-04 04:00:00.000',NULL,'hombre','estudiante'),
        ('46564646',NULL,true,'default','2023-01-14 11:16:33.938','default','2023-01-14 11:16:33.938','ci_extrajero','',NULL,'RICKY ','MARTIN','LOPEZ','','2020-04-02 04:00:00.000',NULL,'hombre','estudiante'),
        ('4444448484',NULL,true,'default','2023-01-14 11:18:22.344','default','2023-01-14 11:18:22.344','ci','',NULL,'NEYMAR','CRUZ','SUCA','','2021-02-10 04:00:00.000',NULL,'hombre','estudiante'),
        ('938205580','PADRÓ , 109',true,'default','2023-01-16 07:59:32.338','default','2023-01-16 07:59:32.338','ci','africa@altecom.es','546212121','ESTEFANIA','AROCAS','PASADAS','','1959-06-11 04:30:00.000',NULL,'hombre','estudiante'),
        ('936545115','CASA CORDELLAS',true,'default','2023-01-16 08:03:29.557','default','2023-01-16 08:03:29.557','ci_extrajero','agata@hotmail.com','625215452','QUERALT','VISO','GILABERT','','1989-06-22 04:00:00.000',NULL,'hombre','estudiante'),
        ('938202768','DOCTOR FLEMING , 11',true,'default','2023-01-16 08:06:54.709','default','2023-01-16 08:06:54.709','ci','','649212123','JOAN','AYALA',' FERRERAS','','2001-06-15 04:00:00.000',NULL,'hombre','estudiante'),
        ('938727844','BERTRAND I SERRA , 11, 3R.',true,'default','2023-01-16 08:22:25.322','default','2023-01-16 08:22:25.322','ci_extrajero','albatros@wandoo.es','705464545','JOAN','BAEZ ','TEJADO','','1967-12-31 04:00:00.000',NULL,'hombre','estudiante'),
        ('938350521','CARRIÓ , 12, 5È A',true,'default','2023-01-16 08:27:35.404','default','2023-01-16 08:27:35.404','ci','albert@intercom.es',NULL,'MARC','BASTARDES','BASTARDES','','1974-06-12 04:00:00.000',NULL,'hombre','estudiante'),
        ('938755645','PIRINEUS , 10',true,'default','2023-01-16 08:30:04.741','default','2023-01-16 08:30:04.741','ci','alien@intercom.es',NULL,'JOSEP','ANGUERA ','   VILAFRANCA','','1998-05-04 04:00:00.000',NULL,'hombre','estudiante');
   INSERT INTO public.persona_natural (nro_identificacion,direccion,status,usuario_creacion,fecha_creacion,usuario_modificacion,fecha_modificacion,tipo_identificacion,email,telefono,nombres,primer_apellido,segundo_apellido,apellido_casada,fecha_nacimiento,id_pais,genero,profesion) VALUES
        ('4896195',NULL,true,'default','2023-01-16 08:35:15.027','default','2023-01-16 08:35:15.027','ci','',NULL,'TERESA','LOPEZ','ISRA','','1998-03-13 04:00:00.000',NULL,'hombre','estudiante'),
        ('4896191',NULL,true,'default','2023-01-16 08:38:11.595','default','2023-01-16 08:38:11.595','ci','',NULL,'SERGIO ','MARTINEZ','ALIAGA','','2016-07-15 04:00:00.000',NULL,'hombre','estudiante'),
        ('93838556       7','JAUME GALOBART , 12',true,'default','2023-01-16 08:40:48.641','default','2023-01-16 08:40:48.641','ci','balladora@altecom.es','658444412','MARIA       ISABEL','BARALDÉS COMAS','COMAS','','1982-12-09 04:00:00.000',NULL,'hombre','estudiante'),
        ('937809812S','PINTOR SERT , 12, 1R., 1A.',true,'default','2023-01-16 08:44:22.781','default','2023-01-16 08:44:22.781','ci','barbilla@hotmail.com','654899994','ADRIÀ','BERENGUERAS','BERENGUERAS CULLERÉS','','1961-10-10 04:30:00.000',NULL,'hombre','estudiante'),
        ('658444412','JAUME GALOBART , 12',true,'default','2023-01-16 08:49:21.594','default','2023-01-16 08:49:21.594','ci','balladora@altecom.es','658444412','MARIA ISABEL','BARALDÉS','COMAS','','2016-05-10 04:00:00.000',NULL,'hombre','estudiante'),
        ('938754554','JACINT VERDAGUER , 52, 2N., 4A.',true,'default','2023-01-16 08:56:12.802','default','2023-01-16 08:56:12.802','ci','bond@terra.es.mas.com.wwww.xsksdfs.ci','938754554','JORDI','RAYA','RAYA GAVILAN','','2023-01-16 04:00:00.000',NULL,'hombre','estudiante'),
        ('7654321','alguna',true,'default','2023-01-16 09:06:42.203','default','2023-01-16 09:06:42.203','ci','perqueta@aps.gob.bo','7896543','patricia ','ergueta','','','2023-01-19 04:00:00.000',NULL,'hombre','estudiante'),
        ('936875544','DE LA CAÇA , 12, 1R., C',true,'default','2023-01-16 09:10:16.717','default','2023-01-16 09:10:16.717','ci','cabeza larga@cataloniamail.com','690522200','LLUÍS','ZAMBUDIO','FIGULS','','1997-02-13 04:00:00.000',NULL,'hombre','estudiante'),
        ('935880712','DE LA CAÇA , 12, 1R., C',true,'default','2023-01-16 09:36:24.149','default','2023-01-16 09:36:24.149','ci_extrajero','cabeza larga@cataloniamail.com','690522200','LAURA','CULLERÉS','CULLERÉS','','1973-12-03 04:00:00.000',NULL,'hombre','estudiante'),
        ('938200022','JOAN SANMARTÍ , 12, 2N., 2A.',true,'default','2023-01-16 09:47:24.862','default','2023-01-16 09:47:24.862','ci','caparranas@altecom.es','632548744','ANDREU','BADIA','TORNÉ','','2023-01-02 04:00:00.000',NULL,'hombre','estudiante');
   INSERT INTO public.persona_natural (nro_identificacion,direccion,status,usuario_creacion,fecha_creacion,usuario_modificacion,fecha_modificacion,tipo_identificacion,email,telefono,nombres,primer_apellido,segundo_apellido,apellido_casada,fecha_nacimiento,id_pais,genero,profesion) VALUES
        ('4992674','alguna direccion',true,'default','2023-01-12 11:31:36.879','default','2023-01-12 11:31:36.879','ci','storrejon','77577537','sergio','Torrejon','Albornoz','','2023-01-12 00:00:00.000',NULL,'hombre','estudiante'),
        ('4008142','sopochachi 44884',true,'default','2023-01-13 18:26:41.466','default','2023-01-13 18:26:41.466','ci','DFASDJS@gmail.com','67318611','HENRY WILSON','BUERGO','SAGARDIA','','1990-02-07 04:00:00.000',NULL,'hombre','estudiante'),
        ('1811118','obrajes 12',true,'default','2023-01-13 18:37:15.656','default','2023-01-13 18:37:15.656','ci','ADFDFD@GMAIL.COM','77281217','JHOSELIN LINETH','ALBA','CONDE','','1990-02-07 04:00:00.000',NULL,'hombre','estudiante'),
        ('4564564','sdsdsdsdsd',true,'default','2023-01-13 20:31:48.315','default','2023-01-13 20:31:48.315','ci_extrajero','patriciaeererer@gmail.com','7724823','PAMELA RITA','ALANES ','SULTAN','','1990-11-16 04:00:00.000',NULL,'hombre','estudiante'),
        ('3434343243',NULL,true,'default','2023-01-13 20:35:07.976','default','2023-01-13 20:35:07.976','ci','dfdffd','3343343','sdfff','fddfdfsd','fdsfds','','2021-11-18 04:00:00.000',NULL,'hombre','estudiante'),
        ('464646',NULL,true,'default','2023-01-14 11:04:28.955','default','2023-01-14 11:04:28.955','ci_extrajero','DFASDFDA@GMAIL.COM','77281219','PEDRO ANGEL','TORREZ','LOPEZ','','2016-07-08 04:00:00.000',NULL,'hombre','estudiante'),
        ('654646',NULL,true,'default','2023-01-14 11:06:26.197','default','2023-01-14 11:06:26.197','ci_extrajero','',NULL,'MARTIN ','PEREZ','CORTEZ','','1986-11-14 04:00:00.000',NULL,'hombre','estudiante'),
        ('4899999',NULL,true,'default','2023-01-14 11:10:22.892','default','2023-01-14 11:10:22.892','ci','',NULL,'TERESA','MARTINEZ','HUMEREZ','','2039-07-08 04:00:00.000',NULL,'hombre','estudiante'),
        ('4513582-M4','JOAN SANMARTÍ , 12, 2N., 2A.',true,'default','2023-01-16 09:50:38.923','default','2023-01-16 09:50:38.923','ci_extrajero','caparranas@altecom.es','632548744','DAVID JESE','BLANCO ',' FONTANET','','2024-04-19 04:00:00.000',NULL,'hombre','estudiante'),
        ('4646466',NULL,true,'default','2023-01-16 11:10:40.560','default','2023-01-16 11:10:40.560','ci','prueba',NULL,'SANDRA','PEREZ','PEREZ','','2023-02-03 04:00:00.000',NULL,'hombre','estudiante');
   INSERT INTO public.persona_natural (nro_identificacion,direccion,status,usuario_creacion,fecha_creacion,usuario_modificacion,fecha_modificacion,tipo_identificacion,email,telefono,nombres,primer_apellido,segundo_apellido,apellido_casada,fecha_nacimiento,id_pais,genero,profesion) VALUES
        ('936012445','JOAN MIRÓ , 3',true,'default','2023-01-16 12:24:31.221','default','2023-01-16 12:24:31.221','ci','carretero@intercom.es','625481111','IVAN','LIBORI','FIGUERAS','','1973-11-07 04:00:00.000',NULL,'hombre','estudiante'),
        ('934500611','LLUÍS CASTELLS , 12, 2N.',true,'default','2023-01-16 12:32:46.709','default','2023-01-16 12:32:46.709','ci','cela@altecom.es','625481111','DAVID','BIDAULT','PUEYO','','1991-03-13 04:00:00.000',NULL,'hombre','estudiante'),
        ('936541235','curie@minorisa.es',true,'default','2023-01-16 12:36:15.723','default','2023-01-16 12:36:15.723','ci_extrajero','curie@minorisa.es','936541235','SILVIA','RASERO','GAVILAN','','2016-04-08 04:30:00.000',NULL,'hombre','estudiante'),
        ('938204054','DIPUTACIÓ , 10',true,'default','2023-01-16 12:46:34.607','default','2023-01-16 12:46:34.607','ci','dalí@wandoo.es','621114452','ALBERT','ARNALOT','PUIG','','2022-12-01 04:00:00.000',NULL,'hombre','estudiante'),
        ('936584541','VIC , 39, 1R., 2A.',true,'default','2023-01-16 12:51:36.962','default','2023-01-16 12:51:36.962','ci','dolça@cidet.com','936584541','MARIA','MOLINER ','                          GARRIDO','','2022-07-05 04:00:00.000',NULL,'hombre','estudiante'),
        ('4896190',NULL,true,'default','2023-01-16 17:34:31.543','default','2023-01-16 17:34:31.543','ci_extrajero','perguetaDSDSD@GMAIL.COM',NULL,'ALINA','TERRAZAS','LOPEZ','SSSS','2023-01-04 04:00:00.000',NULL,'hombre','estudiante'),
        ('4896197',NULL,true,'default','2023-01-16 17:48:41.797','default','2023-01-16 17:48:41.797','ci','',NULL,'CARLA ','ESPEJO','','','2022-08-10 04:00:00.000',NULL,'hombre','estudiante'),
        ('dfdfddfdsfds',NULL,true,'default','2023-01-16 17:59:32.623','default','2023-01-16 17:59:32.623','ci','',NULL,'dfdfdsf','fsdfsd','fsdfs','dfdsf','2022-06-01 04:00:00.000',NULL,'hombre','estudiante'),
        ('ERWRWER',NULL,true,'default','2023-01-16 18:01:18.884','default','2023-01-16 18:01:18.884','ci','',NULL,'EEWRWE','ERWERWER','RWERWE','','2025-03-13 04:00:00.000',NULL,'hombre','estudiante'),
        ('936012448','LLUÍS CASTELLS , 12, 2N.',true,'default','2023-01-18 07:53:42.505','default','2023-01-18 07:53:42.505','ci','carretero@intercom.es','4564321','carla','LIBORI','FIGUERAS','','2063-07-13 04:00:00.000',NULL,'hombre','estudiante');
   INSERT INTO public.persona_natural (nro_identificacion,direccion,status,usuario_creacion,fecha_creacion,usuario_modificacion,fecha_modificacion,tipo_identificacion,email,telefono,nombres,primer_apellido,segundo_apellido,apellido_casada,fecha_nacimiento,id_pais,genero,profesion) VALUES
        ('936875544qqqqqq','Av. Busch No. 10 - Miraflores',true,'default','2023-01-26 13:58:08.660','default','2023-01-26 13:58:08.660','ci','','70611111','LUIS','SAMUDIO','FIGULS','','1992-08-29 04:00:00.000',NULL,'hombre','estudiante'),
        ('9378098125','AVeeNIDA bUSCH',true,'default','2023-01-26 14:09:33.131','default','2023-01-26 14:09:33.131','ci','','70111111','juan ','PEREZ','PEREZ','','2023-01-01 04:00:00.000',NULL,'hombre','estudiante'),
        ('938754554pppppp','avenida busch 1123',true,'default','2023-01-26 15:03:21.308','default','2023-01-26 15:03:21.308','ci','','70611111','juan ','perez','PEREZ','','2023-01-01 04:00:00.000',NULL,'hombre','estudiante'),
        ('12365467',NULL,true,'default','2023-01-26 15:20:19.453','default','2023-01-26 15:20:19.453','ci','','','juan','peres','perez &&&&#$?¡=1122','paredes','2023-01-01 04:00:00.000',NULL,'hombre','estudiante'),
        ('4325345','no lo sabe',true,'default','2023-02-22 11:41:43.755','default','2023-02-22 11:41:43.755','ci','fsf@gmail.com','7242525440','juanito','de los palotes','','','2005-02-22 04:00:00.000',NULL,'hombre','estudiante');
        `);

        await queryRunner.query(`
        INSERT INTO public.registros_funcionarios (tipo_directivo,tipo_funcionario,tipo_contrato,estado,nro_contrato,tipo_apoderado,cargo,fecha_ingreso,codigo_colegiatura,nro_representacion_legal,fecha_inicio_representacion_legal,fecha_fin_representacion_legal,status,usuario_creacion,fecha_creacion,usuario_modificacion,fecha_modificacion,id_persona,id_empresa,id_tipo_cargo,id_estado_departamento,id_ciudad_municipio) VALUES
	 (NULL,'operativo','planta','activo','5',NULL,'responsable de tesoreria','2023-03-04 04:00:00.000',NULL,NULL,NULL,NULL,true,'default','2023-01-16 11:15:13.827','default','2023-01-16 11:15:13.827',1,NULL,8,2,NULL),
	 (NULL,'operativo','eventual','activo','No 45',NULL,'Consultor de reclamos','1993-01-13 04:00:00.000',NULL,NULL,NULL,NULL,true,'default','2023-01-16 12:25:56.170','default','2023-01-16 12:25:56.170',2,1,8,1,NULL),
	 ('titular',NULL,NULL,'activo','3455',NULL,'director','2023-01-12 00:00:00.000',NULL,NULL,NULL,NULL,true,'default','2023-01-12 16:19:04.782','default','2023-01-12 16:19:04.782',2,NULL,7,3,NULL),
	 ('titular',NULL,NULL,'activo','451',NULL,'Sindico','2022-12-14 04:00:00.000',NULL,NULL,NULL,NULL,true,'default','2023-01-16 08:28:13.991','default','2023-01-16 08:28:13.991',3,9,7,2,NULL),
	 ('titular',NULL,NULL,'baja','5263541','titular','gerente general','2022-11-09 04:00:00.000',NULL,'contrato de servicios','2023-01-02 04:00:00.000','2023-01-02 04:00:00.000',true,'default','2023-01-16 08:25:13.902','default','2023-01-16 08:29:54.340',4,9,7,1,NULL),
	 ('titular',NULL,NULL,'activo','N° 4444454',NULL,'Sub-Gerente de Sistemas','2023-01-07 04:00:00.000',NULL,NULL,NULL,NULL,true,'default','2023-01-16 12:53:48.004','default','2023-01-16 12:53:48.004',5,1,8,1,NULL),
	 ('titular',NULL,NULL,'activo','FGFGFD',NULL,'GERENTE COMERCIAL','2038-08-08 04:00:00.000',NULL,NULL,NULL,NULL,true,'default','2023-01-16 17:38:05.262','default','2023-01-16 17:38:05.262',5,1,8,2,NULL),
	 ('suplente',NULL,NULL,'activo','dfdfd','alterno','ANALISTA','2023-01-02 04:00:00.000','caud','dfdfd','2023-01-31 04:00:00.000',NULL,true,'default','2023-01-14 11:05:32.619','default','2023-01-14 11:05:32.619',6,9,7,4,NULL),
	 (NULL,NULL,NULL,'activo','RETERTRE',NULL,'TRTRETRETRETRE','2022-04-07 04:00:00.000',NULL,NULL,NULL,NULL,true,'default','2023-01-16 17:52:04.168','default','2023-01-16 17:52:04.168',7,NULL,8,2,NULL),
	 ('titular',NULL,NULL,'baja','34','titular','dfn asfdsfs','2023-02-22 04:00:00.000','34535','34535','2023-02-22 04:00:00.000','2023-02-21 04:00:00.000',true,'jmamani','2023-02-22 11:42:22.998','default','2023-05-19 17:52:09.444',8,1,7,2,NULL);
INSERT INTO public.registros_funcionarios (tipo_directivo,tipo_funcionario,tipo_contrato,estado,nro_contrato,tipo_apoderado,cargo,fecha_ingreso,codigo_colegiatura,nro_representacion_legal,fecha_inicio_representacion_legal,fecha_fin_representacion_legal,status,usuario_creacion,fecha_creacion,usuario_modificacion,fecha_modificacion,id_persona,id_empresa,id_tipo_cargo,id_estado_departamento,id_ciudad_municipio) VALUES
	 (NULL,'contador','eventual','baja','45454545','alterno','ADMINISTRADOR','2017-02-01 04:00:00.000','CAUD 33434','34343','2023-01-24 04:00:00.000','2022-10-18 04:00:00.000',true,'default','2023-01-14 11:19:16.274','default','2023-01-16 09:45:11.177',9,1,8,1,NULL),
	 (NULL,'contador','planta','activo','cONTRATO DE 30/045/20',NULL,'CONTADOR GENERAL','2022-11-01 04:00:00.000',NULL,NULL,NULL,NULL,true,'default','2023-01-16 09:51:53.754','default','2023-01-16 09:51:53.754',10,1,8,1,NULL),
	 ('',NULL,NULL,'activo','75','titular','Gerente General','2023-08-04 04:00:00.000',NULL,'Acta 45','2023-01-11 04:00:00.000','2023-01-11 04:00:00.000',true,'default','2023-01-16 09:37:30.233','default','2023-01-16 10:05:30.836',11,1,1,2,NULL),
	 ('titular',NULL,NULL,'baja','DFDS123232',NULL,'GERENTE ADMINISTRATIVO','2021-11-12 04:00:00.000',NULL,NULL,NULL,NULL,true,'default','2023-01-14 11:08:57.887','default','2023-01-14 11:09:20.819',12,9,8,1,NULL),
	 (NULL,'contador','planta','activo','DFDSFSF',NULL,'CONTADOR','2022-12-08 04:00:00.000',NULL,NULL,NULL,NULL,true,'default','2023-01-14 11:13:39.047','default','2023-01-14 11:13:39.047',13,9,8,1,NULL),
	 ('titular',NULL,NULL,'baja','WERWREW3333',NULL,'GERENTE GENERAL','2020-06-11 04:00:00.000',NULL,NULL,NULL,NULL,true,'default','2023-01-14 11:15:17.064','default','2023-01-14 11:15:45.217',14,9,7,1,NULL),
	 ('suplente',NULL,NULL,'activo','343434',NULL,'ANALISTA','2022-08-10 04:00:00.000',NULL,NULL,NULL,NULL,true,'default','2023-01-14 11:17:10.647','default','2023-01-14 11:17:10.647',15,9,7,1,NULL),
	 ('titular',NULL,NULL,'activo','546212121','titular','gerente general','2023-01-12 04:00:00.000','15458','certificado de colegio profesional','2023-01-01 04:00:00.000',NULL,true,'default','2023-01-16 08:01:19.332','default','2023-01-16 08:01:19.332',16,1,7,1,NULL),
	 (NULL,'operativo','planta','activo','21313131313',NULL,'ejecutivo de siniestros','2022-10-19 04:00:00.000',NULL,NULL,NULL,NULL,true,'default','2023-01-16 08:20:18.837','default','2023-01-16 08:20:18.837',17,9,8,2,NULL),
	 (NULL,'contador','eventual','activo','45',NULL,'Contador Geenrallll ','2022-11-11 04:00:00.000',NULL,NULL,NULL,NULL,true,'default','2023-01-16 08:31:01.566','default','2023-01-16 08:31:01.566',18,8,8,1,NULL);
INSERT INTO public.registros_funcionarios (tipo_directivo,tipo_funcionario,tipo_contrato,estado,nro_contrato,tipo_apoderado,cargo,fecha_ingreso,codigo_colegiatura,nro_representacion_legal,fecha_inicio_representacion_legal,fecha_fin_representacion_legal,status,usuario_creacion,fecha_creacion,usuario_modificacion,fecha_modificacion,id_persona,id_empresa,id_tipo_cargo,id_estado_departamento,id_ciudad_municipio) VALUES
	 (NULL,'operativo','planta','activo','AS451',NULL,'cCONTADORRR gENERAL','2023-01-11 04:00:00.000',NULL,NULL,NULL,NULL,true,'default','2023-01-16 08:45:39.078','default','2023-01-16 08:45:39.078',19,8,8,1,NULL),
	 ('titular',NULL,NULL,'activo','No. 2020',NULL,'Gerente Administrativo ','2017-06-14 04:00:00.000',NULL,NULL,NULL,NULL,true,'default','2023-01-16 12:34:01.479','default','2023-01-16 12:34:01.479',20,1,8,1,NULL),
	 (NULL,'contador','eventual','activo','88',NULL,'Contador general','2022-12-14 04:00:00.000',NULL,NULL,NULL,NULL,true,'default','2023-01-16 08:57:17.971','default','2023-01-16 08:57:17.971',21,1,8,1,NULL),
	 (NULL,'operativo','planta','activo','42',NULL,'analista legal','2022-09-14 04:00:00.000',NULL,NULL,NULL,NULL,true,'default','2023-01-16 09:11:12.499','default','2023-01-16 09:11:12.499',22,1,8,2,NULL),
	 (NULL,'operativo','planta','baja','CD25',NULL,'gERENTE DE SINIESTROS Y RECLAMOS','2022-09-14 04:00:00.000',NULL,NULL,NULL,NULL,true,'default','2023-01-16 08:42:01.735','default','2023-01-16 09:38:38.047',23,9,8,2,NULL),
	 ('','operativo','planta','baja','45',NULL,'aNALISTA cOMERCIAL','2022-11-15 04:00:00.000',NULL,NULL,NULL,NULL,true,'default','2023-01-16 08:53:21.099','default','2023-01-16 09:41:43.330',24,1,8,1,NULL),
	 ('titular',NULL,NULL,'activo','nO. 5212 cONTRATO CONTRACTUAL',NULL,'Gerente de Auditoria interna','2023-11-16 04:00:00.000',NULL,NULL,NULL,NULL,true,'default','2023-01-16 12:48:34.146','default','2023-01-16 12:48:34.146',25,9,8,1,NULL),
	 ('suplente',NULL,NULL,'activo','11222311',NULL,'Gerente de Finanzas','2023-01-25 04:00:00.000',NULL,NULL,NULL,NULL,true,'default','2023-01-26 15:04:40.412','default','2023-01-26 15:04:40.412',26,1,8,1,NULL),
	 ('',NULL,NULL,'activo','''poiuhygtfrdes09%&/$#"','titular','Gerente de Administración','2023-01-02 04:00:00.000','8765432','ñlkjhgfds','2024-04-01 04:00:00.000','2038-11-30 04:00:00.000',true,'default','2023-01-26 15:22:25.551','default','2023-01-26 15:32:41.649',27,1,7,1,NULL),
	 (NULL,'operativo','planta','activo','1345678 xxxxxxx','titular','Ejecutivo de ventas','2023-01-28 04:00:00.000','12365','12347','2023-01-26 04:00:00.000','2023-01-26 04:00:00.000',true,'default','2023-01-26 16:24:28.059','default','2023-01-26 16:24:28.059',28,9,8,1,NULL);
INSERT INTO public.registros_funcionarios (tipo_directivo,tipo_funcionario,tipo_contrato,estado,nro_contrato,tipo_apoderado,cargo,fecha_ingreso,codigo_colegiatura,nro_representacion_legal,fecha_inicio_representacion_legal,fecha_fin_representacion_legal,status,usuario_creacion,fecha_creacion,usuario_modificacion,fecha_modificacion,id_persona,id_empresa,id_tipo_cargo,id_estado_departamento,id_ciudad_municipio) VALUES
	 ('',NULL,NULL,'activo','N° 451 ',NULL,'sINDICO','2039-11-26 04:00:00.000',NULL,NULL,NULL,NULL,true,'default','2023-01-16 09:48:57.208','default','2023-01-26 16:28:22.102',29,1,7,1,NULL),
	 ('titular',NULL,NULL,'activo','dfs','titular','fsf','2023-01-03 04:00:00.000','no aplica','fsdfs','2023-01-27 04:00:00.000','2023-01-28 04:00:00.000',true,'default','2023-01-26 17:27:08.623','default','2023-01-26 17:27:08.623',30,NULL,7,1,NULL),
	 ('','contador','planta','baja','7565412',NULL,'Supervisor General de Contabilidad','2023-01-13 04:00:00.000',NULL,NULL,NULL,NULL,true,'default','2023-01-16 08:04:56.160','default','2023-02-08 09:43:45.508',31,9,8,1,NULL),
	 ('titular',NULL,NULL,'activo','1234',NULL,'Director de Sistemssss','2023-02-15 04:00:00.000',NULL,NULL,NULL,NULL,true,'jmamani','2023-02-22 11:22:55.260','default','2023-02-22 11:22:55.260',32,1,7,1,NULL);`);

        await queryRunner.query(`
        INSERT INTO public.registros_bajas (fecha_baja,comentarios,status,usuario_creacion,fecha_creacion,usuario_modificacion,fecha_modificacion,id_registro_funcionario,id_categoria_baja,nro_baja) VALUES
            ('2022-12-14 04:00:00.000','',true,'default','2023-01-14 11:09:20.791','default','2023-01-14 11:09:20.791',1,16,'CARTA'),
            ('2023-01-31 04:00:00.000','',true,'default','2023-01-14 11:15:45.204','default','2023-01-14 11:15:45.204',2,18,'TRAMITE'),
            ('2022-10-12 04:00:00.000','',true,'default','2023-01-16 08:29:54.324','default','2023-01-16 08:29:54.324',3,18,'acta'),
            ('2023-01-17 04:00:00.000','',true,'default','2023-01-16 09:38:38.030','default','2023-01-16 09:38:38.030',4,18,'certificado de trabajo No. 45'),
            ('2023-01-02 04:00:00.000','POR CUMPLIMINETO DE CONTRATO ',true,'default','2023-01-16 09:41:43.319','default','2023-01-16 09:41:43.319',5,13,'nOTA nO. 458'),
            ('2023-01-02 04:00:00.000','cONFICTO DE INTERESES ',true,'default','2023-01-16 09:45:11.163','default','2023-01-16 09:45:11.163',6,18,'nOTA 4581'),
            ('2023-01-03 04:00:00.000','iNCUMPLIMINETO DE DEBERES, CONFILTO DE INTERESES',true,'default','2023-01-16 12:08:42.554','default','2023-01-16 12:08:42.554',7,16,'aCTA NO. 45'),
            ('2023-02-08 04:00:00.000','BAJA REALIZADA X JAMJ',true,'default','2023-02-08 09:43:45.429','default','2023-02-08 09:43:45.429',8,13,'rt ere '),
            ('2023-02-01 04:00:00.000','se suspende al funcionario',true,'default','2023-02-17 08:52:52.229','default','2023-02-17 08:52:52.229',9,18,'12/2022'),
            ('2023-02-17 04:00:00.000','se suspende',true,'default','2023-02-17 08:53:16.596','default','2023-02-17 08:53:16.596',10,18,'21');
        INSERT INTO public.registros_bajas (fecha_baja,comentarios,status,usuario_creacion,fecha_creacion,usuario_modificacion,fecha_modificacion,id_registro_funcionario,id_categoria_baja,nro_baja) VALUES
            ('2023-02-22 04:00:00.000','XXX',true,'default','2023-02-22 11:38:22.979','default','2023-02-22 11:38:22.979',11,13,'34'),
            ('2023-02-22 04:00:00.000','',false,'default','2023-02-23 17:41:39.590','default','2023-02-23 17:41:39.590',12,18,'535353'),
            ('2023-02-22 04:00:00.000','2342 wedf dwgs',false,'default','2023-02-23 17:43:21.003','default','2023-02-23 17:43:21.003',14,18,'23424'),
            ('2023-05-12 04:00:00.000','ESTOY DANDO DE BAJA AL USUARIO 4325345',true,'default','2023-05-19 17:52:09.357','default','2023-05-19 17:52:09.357',14,18,'4534 GDDG');        `);

        await queryRunner.query(`
            INSERT INTO public.registros_hechos_posteriores (fecha_registro,descripcion,estado,status,usuario_creacion,fecha_creacion,usuario_modificacion,fecha_modificacion,id_registros_baja,id_categoria_hechos_posteriores,observaciones) VALUES
            ('2023-01-16 04:00:00.000','Se evidencio el incumplimiento de deberes laborales','enProceso',true,'default','2023-01-16 13:00:58.502','default','2023-01-16 13:00:58.502',1,29,''),
            ('2023-01-19 04:00:00.000','prueba','enProceso',true,'default','2023-01-18 11:28:21.138','default','2023-01-18 11:28:21.138',2,28,''),
            ('2023-01-28 04:00:00.000','fsf','enProceso',true,'default','2023-01-26 10:45:22.182','default','2023-01-26 10:45:22.182',3,27,''),
            ('2023-01-27 04:00:00.000','mlk','enProceso',true,'default','2023-01-26 17:02:50.311','default','2023-01-26 17:02:50.311',4,27,''),
            ('2023-02-15 04:00:00.000','alguno','anulacion',true,'default','2023-02-10 16:42:16.736','default','2023-02-10 16:42:41.801',5,27,'algun observacion'),
            ('2023-02-09 04:00:00.000','dxcvxzcvzxv','definitivo',true,'default','2023-02-10 16:51:50.103','default','2023-02-10 16:51:57.121',6,27,'zcvzxcvxzv'),
            ('2023-02-15 04:00:00.000','setrgfhdhdfhfdh','enProceso',true,'default','2023-02-23 17:45:46.123','default','2023-02-23 17:45:46.123',7,30,'');
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`TRUNCATE TABLE public.persona_natural CASCADE;`);
        await queryRunner.query(`TRUNCATE TABLE public.registros_funcionarios CASCADE;`);
        await queryRunner.query(`TRUNCATE TABLE public.public.registros_bajas CASCADE;`);
        await queryRunner.query(`TRUNCATE TABLE public.registros_hechos_posteriores CASCADE;`);
    }

}
