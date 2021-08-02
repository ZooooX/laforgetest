/* File used to allow express Request object extension */ 
declare namespace Express {
    export interface Request {
      userID?: string
    }
  }
  