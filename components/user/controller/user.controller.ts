import { UserService } from '../services/user.services';


export class UserController {

    public GetUsers(page: number) {
        try {
            return new UserService().GetUsers(page);
        } catch (error) {
            throw error;
        }
    }

    public UpdateUser(data: any) {
        try {
            return new UserService().UpdateUser(data);
        } catch (error) {
            throw error;
        }
    }
}
