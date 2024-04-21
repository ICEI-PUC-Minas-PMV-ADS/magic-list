import * as SQLite from 'expo-sqlite';

const Database = {

  getConnection: () =>{

    const db = SQLite.openDatabase('magic_list.db');

    db.transaction((tx) =>{
      tx.executeSql('create table if not exists checklists (id_list integer primary key not null, nome text not null);');
      tx.executeSql('create table if not exists listunic (id_tarefa integer primary key not null, nome text not null);')
    });

    const ExecuteQuery = (sql, params = []) =>
      new Promise((resolve, reject) => {
        db.transaction((trans) => {
          trans.executeSql(
            sql,
            params,
            (trans, results) => {
              resolve(results);
            },
            (error) => {
              reject(error);
            }
          );
       });
      });

    return ExecuteQuery;
  },
};
export default Database;