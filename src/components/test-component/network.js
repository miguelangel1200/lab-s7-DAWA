import { Router } from "express";
import * as Controller from "./controller";

const testRouter = Router();

testRouter.route("/").get(Controller.findAll);
testRouter.route("/").post(Controller.create);
testRouter.route("/:id").delete(Controller.remove);
testRouter.route("/:id").put(Controller.update);

export default testRouter;
