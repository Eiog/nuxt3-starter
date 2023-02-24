import mongoose from 'mongoose'
import { defineNuxtPlugin } from '#app'
export default defineNuxtPlugin(async (nuxtApp) => {
  // Doing something with nuxtApp
  const url = 'mongodb://admin:995801@101.200.179.232:27017/blog'
  try {
    const connection = await mongoose.connect(url)
  }
  catch (error) {
    process.exit(1)
  }
})
