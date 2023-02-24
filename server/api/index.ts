import DefaultModel from '../models/default.model'
export default defineEventHandler(async () => {
  try {
    const result = await DefaultModel.find()
    return result
  }
  catch (error) {
    return error
  }
})
