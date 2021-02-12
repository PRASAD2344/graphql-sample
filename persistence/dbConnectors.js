import Sequelize from 'sequelize'

const sequelize = new Sequelize('iot', 'root', '*****', {
  dialect: 'mysql',
  host: 'localhost',
})

const Customer = sequelize.define('customer',{
  customer_id: {
    type: Sequelize.BIGINT,
    autoIncrement: true,
    primaryKey: true
  },
  cust_code: {type: Sequelize.STRING},
  customer_name: {type: Sequelize.STRING},
  group_name: {type: Sequelize.STRING},
  topic_name: {type: Sequelize.STRING},
},{
  freezeTableName: true,
  timestamps: false,
})

export {
  Customer,
}