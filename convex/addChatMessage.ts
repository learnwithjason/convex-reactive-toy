import { mutation } from './_generated/server'

export default mutation(
  async ({ db }, msg: { author: string; message: string }) => {
    db.insert('chat_table', msg)
  }
)
