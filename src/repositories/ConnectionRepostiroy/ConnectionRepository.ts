import { createConnection, ConnectionOptions, Connection } from 'typeorm';
import Settings from '../../../ormconfig';

export class ConnectionRepository{

  private SettingsConnection: ConnectionOptions
  public Connection: Connection

  constructor(){
    this.SettingsConnection = Settings;
  }

  async openConnection(){
    this.Connection = await createConnection(Settings);
  }

}