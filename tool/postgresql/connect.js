const {
  Pool,
  Client
} = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'alarm',
  password: 'root',
  port: 5432,
})

pool.connect(function(err, client, done) { 
  if(err) {
  return console.error('数据库连接出错', err);
  }
  // 简单输出个 Hello World
  pool.query('SELECT $1::varchar AS OUT', ["Hello World"], function(err, result) {
  done();// 释放连接（将其返回给连接池）
  if(err) {
  return console.error('查询出错', err);
  }
  console.log(result.rows[0].out); //output: Hello World
  });
 });
// const pool2 = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'stoneu',
//   password: 'root',
//   port: 5432,
// })

// pool.query('select * from company', (err, res1) => {
//   pool2.query('select * from t_waring_record', (err, res2) => {
//     console.log(res1.rows.concat(res2.rows))
//   })
// })
