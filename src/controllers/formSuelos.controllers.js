
import { getConnection, sql, sueloquery } from "../database"; 

export const getRegSuelo = async (req, res) => {
    try {
        const pool = await getConnection();
const result = await pool.request().query(sueloquery.getAllRegistrosSuelo);
res.json(result.recordset);
console.log(result)
    } catch (error) {
      res.status(500);
      res.send(error.messsage);  
    }

};

export const createNewRegSuelo = async (req, res) => {
const { humedad, fecha, cultivo_revisado, rancho_revisado, metodo_aplicacion, status_producto, presion_riego_valvula, presion_riego_cintilla_manguera, ph_gotero, ph_bomba, ph_tierra, ce_gotero, ce_bomba, ce_tierra, evapotranspiracion, comentario_general } = req.body
if (humedad == null ||  fecha == null || cultivo_revisado == null || rancho_revisado == null || metodo_aplicacion == null || status_producto == null || presion_riego_valvula == null || presion_riego_cintilla_manguera == null || ph_gotero == null || ph_bomba == null || ph_tierra == null || ce_gotero == null || ce_bomba == null || ce_tierra == null || evapotranspiracion == null || comentario_general == null) {
    return res.status(404).json({msg: 'por favor llenar todos los campos'})
}
try {
    const pool = await getConnection()
const result = await pool.request()
.input("humedad", sql.Float, humedad)
.input("fecha", sql.DateTime, fecha)
.input("cultivo_revisado", sql.VarChar, cultivo_revisado)
.input("rancho_revisado", sql.VarChar, rancho_revisado)
.input("metodo_aplicacion", sql.VarChar, metodo_aplicacion)
.input("status_producto", sql.VarChar, status_producto)
.input("presion_riego_valvula", sql.Float, presion_riego_valvula)
.input("presion_riego_cintilla_manguera", sql.Float, presion_riego_cintilla_manguera)
.input("ph_gotero", sql.Float, ph_gotero)
.input("ph_bomba", sql.Float, ph_bomba)
.input("ph_tierra", sql.Float, ph_tierra)
.input("ce_gotero", sql.Float, ce_gotero)
.input("ce_bomba", sql.Float, ce_bomba)
.input("ce_tierra", sql.Float, ce_tierra)
.input("evapotranspiracion", sql.Float, evapotranspiracion)
.input("comentario_general", sql.VarChar, comentario_general)
.query(sueloquery.createNewRegSuelo)
res.json({humedad, fecha, cultivo_revisado, rancho_revisado, metodo_aplicacion, status_producto, presion_riego_valvula, presion_riego_cintilla_manguera, ph_gotero, ph_bomba, ph_tierra, ce_gotero, ce_bomba, ce_tierra, evapotranspiracion, comentario_general})

} catch (error) {
    res.status(500);
    res.send(error.messsage);  
}
}



export const getRegSgetRegSueloById = async (req, res) => { 
const { id } = req.params;

const pool = await getConnection();
const result = await pool.request()
.input('Id', id)
.query(sueloquery.getRegSgetRegSueloById)

res.send(result.recordset[0])

}

export const getRegSgetRegSueloByFecha = async (req, res) => { 
    const { fecha } = req.params;
    
    const pool = await getConnection();
    const result = await pool.request()
    .input('fecha', fecha)
    .query(sueloquery.getRegSgetRegSueloByFecha)
    
    res.send(result.recordset[0])
    
    }

    export const deleteRegistroById = async (req, res) => { 
        const { id } = req.params;
        
        const pool = await getConnection();
        const result = await pool.request()
        .input('Id', id)
        .query(sueloquery.deleteRegistroById);
        
        res.sendStatus(204);
        
        }

        export const UpdateRegSueloById = async (req, res) => {
            const { id } = req.params;
            const { humedad, fecha, cultivo_revisado, rancho_revisado, metodo_aplicacion, status_producto, presion_riego_valvula, presion_riego_cintilla_manguera, ph_gotero, ph_bomba, ph_tierra, ce_gotero, ce_bomba, ce_tierra, evapotranspiracion, comentario_general } = req.body
            if (humedad == null ||  fecha == null || cultivo_revisado == null || rancho_revisado == null || metodo_aplicacion == null || status_producto == null || presion_riego_valvula == null || presion_riego_cintilla_manguera == null || ph_gotero == null || ph_bomba == null || ph_tierra == null || ce_gotero == null || ce_bomba == null || ce_tierra == null || evapotranspiracion == null || comentario_general == null) {
                return res.status(404).json({msg: 'por favor llenar todos los campos'})
            } 
            const pool = await getConnection();
             await pool.request()
            .input("humedad", sql.Float, humedad)
            .input("fecha", sql.DateTime, fecha)
            .input("cultivo_revisado", sql.VarChar, cultivo_revisado)
            .input("rancho_revisado", sql.VarChar, rancho_revisado)
            .input("metodo_aplicacion", sql.VarChar, metodo_aplicacion)
            .input("status_producto", sql.VarChar, status_producto)
            .input("presion_riego_valvula", sql.Float, presion_riego_valvula)
            .input("presion_riego_cintilla_manguera", sql.Float, presion_riego_cintilla_manguera)
            .input("ph_gotero", sql.Float, ph_gotero)
            .input("ph_bomba", sql.Float, ph_bomba)
            .input("ph_tierra", sql.Float, ph_tierra)
            .input("ce_gotero", sql.Float, ce_gotero)
            .input("ce_bomba", sql.Float, ce_bomba)
            .input("ce_tierra", sql.Float, ce_tierra)
            .input("evapotranspiracion", sql.Float, evapotranspiracion)
            .input("comentario_general", sql.VarChar, comentario_general)
            .input('Id', id)
            .query(sueloquery.UpdateRegSueloById)

            res.json({humedad, fecha, cultivo_revisado, rancho_revisado, metodo_aplicacion, status_producto, presion_riego_valvula, presion_riego_cintilla_manguera, ph_gotero, ph_bomba, ph_tierra, ce_gotero, ce_bomba, ce_tierra, evapotranspiracion, comentario_general})

        }