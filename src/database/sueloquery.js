export const sueloquery = {
    getAllRegistrosSuelo: "select *from tb_wap_rsuelo_pro_01",
    createNewRegSuelo: "insert into tb_wap_rsuelo_pro_01 values( @humedad, @fecha, @cultivo_revisado, @rancho_revisado, @metodo_aplicacion, @status_producto, @presion_riego_valvula, @presion_riego_cintilla_manguera, @ph_gotero, @ph_bomba, @ph_tierra, @ce_gotero, @ce_bomba, @ce_tierra, @evapotranspiracion, @comentario_general)",
    getRegSgetRegSueloById: "select *from tb_wap_rsuelo_pro_01 where pk_wap_rsuelo_pro_01 = @Id",
    getRegSgetRegSueloByFecha: "select *from tb_wap_rsuelo_pro_01 where fecha =  @fecha",
    deleteRegistroById: 'delete from tb_wap_rsuelo_pro_01 where pk_wap_rsuelo_pro_01 = @Id',
    UpdateRegSueloById: "update tb_wap_rsuelo_pro_01 set humedad = @humedad, fecha = @fecha, cultivo_revisado = @cultivo_revisado, rancho_revisado = @rancho_revisado, metodo_aplicacion = @metodo_aplicacion, status_producto = @status_producto, presion_riego_valvula = @presion_riego_valvula, presion_riego_cintilla_manguera = @presion_riego_cintilla_manguera, ph_gotero = @ph_gotero, ph_bomba = @ph_bomba, ph_tierra= @ph_tierra, ce_gotero = @ce_gotero, ce_bomba = @ce_bomba, ce_tierra = @ce_tierra, evapotranspiracion = @evapotranspiracion, comentario_general = @comentario_general where pk_wap_rsuelo_pro_01 = @Id"
}
