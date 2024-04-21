import Database from './DbService';

const DB_EXEC = Database.getConnection();

export const getListUnic = async () =>{
  let results = await DB_EXEC(`select * from listunic`);
  return results.rows._array;
}

export const insertListUnic = async (param) =>{
  let results = await DB_EXEC(`insert into listunic(nome)
  values(?)`, [param.nome]);
  return results.rowsAffected;
}

export const updateListUnic = async (param) => {
  let results = await DB_EXEC(`update listunic set nome=?, where id_tarefa=?`, [param.nome, param.id_tarefa]);
  return results.rowsAffected;
}

export const deleteListUnic = async (id_tarefa) => {
  let results = await DB_EXEC(`delete from listunic where id_tarefa=?`, [id_tarefa]);
  return results.rowsAffected;
}