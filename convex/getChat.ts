import { query } from './_generated/server'

export default query(async ({ db }): Promise<object[]> => {
  const messages = await db.query('chat_table').collect()

  return messages
})
