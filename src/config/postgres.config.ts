import { registerAs } from "@nestjs/config";
import { Dialect } from "sequelize";
import { EnumConfig } from "./enumConfig/enumConfig";

export const pgConfig = registerAs(EnumConfig.DATABASE, ()=>{
    return{
        dialect:<Dialect>process.env.SQL_DIALECT || "postgres"
    }
})