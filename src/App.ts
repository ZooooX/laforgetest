import express,{ Application } from "express";
import ApiRoutes from "./app/routes/Api.routes";

export default class App {
    private port : number | string
    private app : Application;

    constructor(port : number | string){
        this.app = express();
        this.port = port;

        this.initMiddlewares();
        this.initRoutes();
    }

    private initMiddlewares(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    private initRoutes(){
        const apiRoutes : ApiRoutes = new ApiRoutes(this.app);
    }

    public listen(){
        this.app.listen(this.port, () => {
            console.log(`Server started on port ${this.port}`);
        });
    }
}