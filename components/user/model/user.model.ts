import sql from 'mssql'
import { Container } from 'typedi';
export class UserModel {
    
    public sqlConnection: any;

    constructor() {
        this.sqlConnection = Container.get('sqlConnection');
    }
    
    public async GetUsers(page: number){
        try {
            let result = await this.sqlConnection
                .request()
                .input('page', sql.Int, page-1)
                .query("SELECT * FROM sm_users ORDER BY user_key OFFSET (@page * 20) ROWS FETCH NEXT 20 ROWS ONLY ");
            return result.recordset;
        } catch (err) {
            throw err;
        }
    }
    
    public async GetCount(){
        try {
            let result = await this.sqlConnection
                .request()
                .query("SELECT COUNT(*) cnt FROM sm_users");
            return result.recordset;
        } catch (err) {
            throw err;
        }
    }     

    public async AddUsers(values: string){
        try {
            let result = await this.sqlConnection
                .request()
                .query(`INSERT INTO sm_users (id, name, gmail, gender, status, created_at, updated_at) VALUES ${values} `);
            return result.recordset;
        } catch (err) {
            throw err;
        }
    }    

    public async UpdateUser(user: any){
        try {
            console.log('user', user)
            let result = await this.sqlConnection
                .request()
                .input('id', sql.VarChar, user.id)
                .input('name', sql.VarChar, user.name)
                .input('gmail', sql.VarChar, user.gmail)
                .input('gender', sql.VarChar, user.gender)
                .input('status', sql.VarChar, user.status)
                .input('created_at', sql.VarChar, user.created_at)
                .input('updated_at', sql.VarChar, user.updated_at)
                .input('user_key', sql.Int, user.user_key)
                .query(`UPDATE sm_users
                SET 
                    id = @id,
                    name = @name,
                    gmail = @gmail,
                    gender = @gender,
                    status = @status,
                    created_at = @created_at,
                    updated_at = @updated_at
                WHERE
                    user_key = @user_key`);
            return result.recordset;
        } catch (err) {
            throw err;
        }
    }   
    
}
