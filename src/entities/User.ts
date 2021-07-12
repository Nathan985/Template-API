import { Entity, Column, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4} from 'uuid';

@Entity("Tbl_Users")
export class User{

  @PrimaryColumn()
  _id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  constructor(){
    if(!this._id){
      this._id = uuidV4();
    }
  }
}