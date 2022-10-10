import sql from 'mssql'

const dbSettings = {
    user : "desarrollo",
    password: "Cerezo.2022",
    server: "192.168.1.142",
    database: "GAECTIDB",
    options: {
        encrypt: false, // for azure que es la nube de microsoft
        trustServerCertificate: true // change to true for local dev / self-signed certs confia en el certificado del servidor actual
      },
}

export async function getConnection() {
    try {
        const pool = await sql.connect(dbSettings)
        return pool;    
    } catch (error) {
      console.log(error)  
    }
    
}

export { sql};


