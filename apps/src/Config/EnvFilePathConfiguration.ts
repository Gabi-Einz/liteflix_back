import EnumEnv from "./EnumEnv";

export const envFilePathConfiguration = ():string => {
    console.log(`--->` + process.env.MY_ENV);
    let envFilePath;
    switch (process.env.MY_ENV){
    case EnumEnv.LOCAL:
        envFilePath = '.env.local';
        break;
    case EnumEnv.TEST:
        envFilePath = '.env.test';
        break;
    case EnumEnv.PRE_PROD:
        envFilePath = '.env.preprod';        
        break;
    case EnumEnv.PRODUCTION:
        envFilePath = '.env';            
        break;
    default:
        envFilePath = '.env';
    }
    console.log(`envFilePath: ` + envFilePath)
    return envFilePath;
}