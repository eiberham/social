import { Model } from "sequelize";

class User extends Model {
    public id!          : number; 
    public name!        : string;
    public email!       : string; 
    public country!     : string | null;
    public username!    : string;
    public password!    : string;
  
}

export default User;