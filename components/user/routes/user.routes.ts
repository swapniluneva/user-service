import { Request, Response, Router, NextFunction } from 'express';
import { UserController } from '../controller/user.controller';

const route = Router();

export default (app: any) => {

      app.use(route);

      let UserObject = new UserController();

      route.get(
            "/GetUsers/:page",
            async (req: Request, res: Response, next: NextFunction) => {
                  try {
                        let data = req.params;
                        let response = await UserObject.GetUsers(parseInt(data.page));
                        res.status(200).send({
                              status: true,
                              data: {
                                    GetUsers: response,
                              },
                              message: "Users fetched successfully.",
                        });
                  } catch (e) {
                        next(e);
                  }
            });
      
      route.put(
            "/UpdateUser",
            async (req: Request, res: Response, next: NextFunction) => {
                  try {
                        let data = req.body;
                        let response = await UserObject.UpdateUser(data);
                        res.status(200).send({
                              status: true,
                              data: {
                                    UpdateUser: response,
                              },
                              message: "User updated successfully.",
                        });
                  } catch (e) {
                        next(e);
                  }
            });
}
