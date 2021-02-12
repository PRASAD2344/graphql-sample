import { Customer } from './dbConnectors'

//Resolver map
export const resolvers = {
  Query: {
    getCustomer: async (root, {customer_id}) => {
      const customer = await Customer.findByPk(customer_id)
      return customer
    },
    getCustomers: async (root) => {
      const customers = await Customer.findAll()
      return customers
    },
  },
  Mutation: {
    createCustomer: async (root, {input}) => {
      const newCustomer = await Customer.create({
        cust_code: input.cust_code,
        customer_name: input.customer_name,
        group_name: input.group_name,
        topic_name: input.topic_name,
      })
      return newCustomer
    },
    updateCustomer: async (root, {input}) => {
      await Customer.update({
        cust_code: input.cust_code,
        customer_name: input.customer_name,
        group_name: input.group_name,
        topic_name: input.topic_name,
      }, {
        returning:true, 
        plain: true,
        where: {customer_id: input.customer_id}
      })
      return input
    },
    deleteCustomer: async (root, {customer_id}) => {
      await Customer.destroy({
        where: {customer_id: customer_id}
      })
      return 'Successfully deleted customer'
    }
  },
}
