import Database from './DbService';

const DB_EXEC = Database.getConnection();

export const getCheckList = async () =>{
  let results = await DB_EXEC(`select * from checklists`);
  return results.rows._array;
}

export const insertCheckList = async (param) =>{
  let results = await DB_EXEC(`insert into checklists(nome)
  values(?)`, [param.nome]);
  return results.rowsAffected;
}

export const updateChecklist = async (param) => {
  let results = await DB_EXEC(`update checklists set nome=? where id_list=?`, [param.nome, param.id_list]);
  return results.rowsAffected;
}

export const deleteChecklist = async (id_list) => {
  let results = await DB_EXEC(`delete from checklists where id_list=?`, [id_list]);
  return results.rowsAffected;
}