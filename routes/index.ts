import { Router } from "express";

import UserRoute from "../components/user/routes/user.routes";

import CronClass from "../crons";

const route = Router();

UserRoute(route);

CronClass();
export default route;
