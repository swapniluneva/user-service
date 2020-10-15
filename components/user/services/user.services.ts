import { UserModel } from "../model/user.model";
import * as request from "request-promise-native";

export class UserService {
    
    readonly GOREST_ENDPOINT = 'https://gorest.co.in/public-api/users?page=';

    public async RequestUsers(pageNumber: any) {
        try {
            var options = {
                uri: this.GOREST_ENDPOINT + pageNumber,
            };
            return await request.get(options);
        }
        catch (err) {
            throw err;
        }
    }
    
    public GetCount() {
        try {
            return new UserModel().GetCount();
        }
        catch (err) {
            throw err;
        }
    }

    public AddUsers(values: string) {
        try {
            return new UserModel().AddUsers(values);
        }
        catch (err) {
            throw err;
        }
    }

    public GetUsers(page: number) {
        try {
            return new UserModel().GetUsers(page);
        }
        catch (err) {
            throw err;
        }
    }

    public UpdateUser(data: any) {
        try {
            return new UserModel().UpdateUser(data);
        }
        catch (err) {
            throw err;
        }
    } 
}