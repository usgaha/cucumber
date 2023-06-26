let pool = require("pg");
let name:any;
let result:any;
let value:any;
export async function db() {
    let client = new pool.Client({
        user: "mindoula_non_production_admin",
        password: "YdecrC0JWVZcNUsp9v",
        database: "mmr_api_staging_22_11_14",
        port: 5432,
        host: "mindoula-non-production-v2.postgres.database.azure.com",
        ssl: { rejectUnauthorized: true, },
    });
    await client.connect();
    let output = await client.query('SELECT * FROM members');
    console.log(output.rows[0]['last_name']);
}
export async function databasewithparm(param:any) {
    let client = new pool.Client({
        user: "mindoula_non_production_admin",
        password: "YdecrC0JWVZcNUsp9v",
        database: "mmr_api_unified_05_15_23",
        port: 5432,
        host: "mindoula-non-production-v2.postgres.database.azure.com",
        ssl: { rejectUnauthorized: true, },
    });
    await client.connect();
    let output:any = await client.query(`select * from members where last_name LIKE '${param}%' ORDER BY id DESC`);
    result=output.rows[0][`last_name`];
    console.log(result);
    const numberPart:any = result.replace("CMR", "");
    const number:any=parseInt(numberPart)+1;
    console.log(parseInt(numberPart)+1);
    console.log(param+number)
    value=param+number;
    return param+number;
}
export function namevalue() {
    name=value;
    console.log("nam"+name);
    return name;
}
//  databasewithparm("CMR");
//  ORDER BY last_name DESC
//database: "mmr_api_staging_22_11_14",

export async function phnumbeer(params:any) {
    let client = new pool.Client({
        user: "mindoula_non_production_admin",
        password: "YdecrC0JWVZcNUsp9v",
        database: "mmr_api_unified_05_15_23",
        port: 5432,
        host: "mindoula-non-production-v2.postgres.database.azure.com",
        ssl: { rejectUnauthorized: true, },
    });
    await client.connect();
    let output:any = await client.query(` select mobile_number from members where mobile_number LIKE '${params}%' ORDER BY id DESC`);
    const result:any=output.rows[0][`mobile_number`];
    console.log(result);
    const number:any=parseInt(result)+1;
    console.log(number);
    return number;
}
phnumbeer("212556");
    
