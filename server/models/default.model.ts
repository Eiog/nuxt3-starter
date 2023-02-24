// user.model.ts
import mongoose from 'mongoose'

// 模板接口
export interface DefaultDocument extends mongoose.Document {
  createdAt: Date
  updatedAt: Date
  deletedAt: Date
}

// 模板校验规则
const userSchema = new mongoose.Schema(
  {},
  {
    timestamps: true,
  },
)

// 唯一
userSchema.index({}, { unique: true })

// 创建模板 执行之后会自动在mongodb中创建相应的模板
const DefaultModel = mongoose.model<DefaultDocument>('User', userSchema)

export default DefaultModel
