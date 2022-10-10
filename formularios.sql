DROP TABLE tb_wap_rsuelo_pro_01
/*suelo*/
CREATE TABLE tb_wap_rsuelo_pro_01(
pk_wap_rsuelo_pro_01 INT IDENTITY(1,1),
humedad float not null,
fecha datetime unique,
cultivo_revisado varchar(50) not null,
rancho_revisado varchar(50) not null,
metodo_aplicacion varchar(50) not null,
status_producto varchar(5) not null,
presion_riego_valvula float not null,
presion_riego_cintilla_manguera float not null,
ph_gotero float not null,
ph_bomba float not null,
ph_tierra float not null,
ce_gotero float not null,
ce_bomba float not null,
ce_tierra float not null,
evapotranspiracion float not null,
comentario_general varchar(255) not null,

primary key (pk_wap_rsuelo_pro_01)
)

insert into tb_wap_rsuelo_pro_01 values(2.5, '07/10/2022', '02568 arandano', 'casa blanca', 'charco', 'si', 5.2, 2.5, 3.5, 3.2, 6, 6.2, 8.2, 5.1, 2.2, 'se revento una manguera')


/*delete from tb_wap_rsuelo_pro_01 where pk_wap_rsuelo_pro_01 = 1*/

select *from tb_wap_rsuelo_pro_01 where pk_wap_rsuelo_pro_01 = 1

update tb_wap_rsuelo_pro_01 set humedad = 2.6, fecha = '11/10/2022', cultivo_revisado = '02558 fresas', rancho_revisado = 'poblado lejano', metodo_aplicacion = 'charquera', status_producto = 'no', presion_riego_valvula = 3.3, presion_riego_cintilla_manguera = 2.2, ph_gotero = 3.2, ph_bomba = 3.3, ph_tierra= 5.5, ce_gotero = 9.9, ce_bomba = 4.4, ce_tierra = 1.2, evapotranspiracion = 6.6, comentario_general = 'demasiada agua' where pk_wap_rsuelo_pro_01 = 1

/*ciclos*/

CREATE TABLE tb_wap_rciclos_pro_01(
pk_wap_rciclo_pro_01 INT IDENTITY(1,1),
fecha datetime unique,
cultivo_revisado varchar(50) not null,
rancho_revisado varchar(50) not null,
#_ciclo float not null,
status_producto varchar(5) not null,
tiempo float not null,
presion_riego_cintilla_manguera float not null,
ph_gotero float not null,
ph_bomba float not null,
ph_tierra float not null,
ce_gotero float not null,
ce_bomba float not null,
ce_tierra float not null,
evapotranspiracion float not null,
comentario_general varchar(255) not null,

primary key (pk_wap_rsuelo_pro_01)
)

