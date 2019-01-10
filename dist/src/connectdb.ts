import * as mysql from 'mysql';




export default class ConnectBD {


   async connectBD() {
        return new Promise((resolve, reject) => {
            const conn = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "12345"
            })
            if (resolve) {
                conn.connect((err) => {
                    if (err) throw err;
                    console.log("connected!")
                })
            }
            else {
                console.log(reject)
            }

        })


    }

}

