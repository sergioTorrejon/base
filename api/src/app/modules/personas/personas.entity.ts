import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Paises } from '../catalogos/paises/paises.entity';

@Entity({name:'persona_natural'})
export class Personas{
  //PRIMARY INT
  @PrimaryGeneratedColumn()
  id: number;

  // COLUMNS TABLE 
  @Column({ type: 'varchar', name:'tipo_identificacion' ,length: 50 , nullable: false })
  tipoIdentificacion: string;

  @Column({ type: 'varchar', name:'nro_identificacion' ,length: 50 , nullable: false })
  nroIdentificacion: string;

  @Column({ type: 'varchar', name:'complemento' ,length: 5 , nullable: true })
  complemento: string;

  @ManyToOne(() => Paises)
  @JoinColumn({name:'id_pais'})
  pais: Paises | number = 30

  @Column({ type: 'varchar', name:'nombres' ,length: 50 , nullable: false })
  nombres: string;

  @Column({ type: 'varchar', name:'primer_apellido' ,length: 50 , nullable: false })
  primerApellido: string;

  @Column({ type: 'varchar', name:'segundo_apellido' ,length: 50 , nullable: true })
  segundoApellido: string;

  @Column({ type: 'varchar', name:'apellido_casada' ,length: 50 , nullable: true })
  apellidoCasada: string;

  @Column({name:'fecha_nacimiento', nullable:true})
  fechaNacimiento: Date;

  @Column({ type: 'varchar', name:'genero' ,length: 10 , nullable: true, default: 'hombre' })
  genero: string;

  @Column({ type: 'varchar', name:'email' ,length: 100 , nullable: true })
  email: string;

  @Column({ type: 'varchar', name:'telefono' ,length: 10 , nullable: true })
  telefono: string;

  @Column({ type: 'varchar', name:'direccion' ,length: 250 , nullable: true })
  direccion: string;

  @Column({ type: 'varchar', name:'profesion' ,length: 50 , nullable: true, default: 'estudiante' })
  profesion: string;

  @Column({ type: 'varchar', name:'verificado_segip' ,length: 5 , nullable: true, default: '0' })
  verificadoSegip: string;


  /******************************AUDIT************************************** */
  // COLUMNS AUDIT
  @Column({ type: 'boolean', default: true })
  status: boolean;
  
  @Column({ type: 'varchar', name: 'usuario_creacion',length: 50, default: 'default', select: false })
  userCreate: string;

  @CreateDateColumn({ type: 'timestamp', name: 'fecha_creacion', nullable: false, select: false })
  dateCreate: Date;

  @Column({ type: 'varchar', name: 'usuario_modificacion',length: 50, default: 'default', select: false })
  userUpdate: string;

  @UpdateDateColumn({ type: 'timestamp', name: 'fecha_modificacion', nullable: true, select: false })
  dateUpdate: Date;
}
