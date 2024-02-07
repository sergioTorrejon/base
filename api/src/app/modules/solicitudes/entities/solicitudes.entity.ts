import { Empresas } from 'src/app/modules/rms/empresas/empresas.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import {
  RegistrosFuncionarios,
} from '../../rms/registros-funcionarios/entities';

@Entity({name:'solicitudes'})
export class Solicitudes{
  @PrimaryGeneratedColumn()
  id: number;
  
  @ManyToOne(() => Empresas)
  @JoinColumn({name:'id_empresa'})
  Empresa: Empresas
  
  @ManyToOne(() => RegistrosFuncionarios)
  @JoinColumn({name:'id_registro'})
  idRegistro: RegistrosFuncionarios

  @Column({ type: 'varchar', name:'tipo_solicitud' ,length: 50 , nullable: true })
  TipoSolicitud: string;

  @Column({ type: 'varchar', name:'descripcion' ,length: 500 , nullable: true })
  Descripcion: string;

  @Column({ type: 'varchar', name:'respuesta' ,length: 500 , nullable: true })
  Respuesta: string;

  @Column({ type: 'varchar', length: 50 , nullable: true})
  estado: string;

  @Column({ type: 'varchar', name: 'usuario_solicitud',length: 50, nullable: true})
  UsuarioSolicitud: string;

  @Column({ type: 'timestamp', name: 'fecha_solicitud', nullable: true })
  FechaSolicitud: Date;

  @Column({ type: 'varchar', name: 'usuario_aprobacion',length: 50, nullable: true  })
  UsuarioAprobador: string;

  @Column({ type: 'timestamp', name: 'fecha_aprobacion', nullable: true })
  FechaAprobacion: Date;

  @Column({ type: 'varchar', length: 500 , nullable: true })
  observaciones: string;


  /* STATUS */
  @Column({ type: 'boolean', default: true })
  status: boolean;
  
  
  /* AUDIT */
  @Column({ type: 'varchar', name: 'usuario_creacion',length: 50, default: 'default', select: false })
  UsuarioCreacion: string;

  @CreateDateColumn({ type: 'timestamp', name: 'fecha_creacion', nullable: false, select: false })
  FechaCreacion: Date;

}
