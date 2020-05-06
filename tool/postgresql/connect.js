const {
  Pool,
  Client
} = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'stoneu',
  password: 'root',
  port: 5432,
})


 pool.connect(function(err, client, done) { 
  if(err) {
  return console.error('数据库连接出错', err);
  }
  // 简单输出个 Hello World
  pool.query(`select * from t_dev_variant left join t_dev_property on t_dev_property.uid = t_dev_variant.uid where t_dev_variant.uid='9.1.114.1' or t_dev_variant.uid='9.1.114.2'`, function(err, result) {
    if(err) {
    return console.error('查询出错', err);
    }
  console.log(result.rows); 
  result.rows.forEach((e)=>{
    var sql = `select * from t_waring_record where equip_desc='${e.devicename}' and type_desc='${e.description}' order by happen_time desc limit 1`;
    pool.query(sql ,(err,res)=>{
      console.log('-------')
      console.log(res.rows)
    })
  })
  });
 });
