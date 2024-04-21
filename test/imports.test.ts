describe('import vue components', () => {
  it('normal imports as expected', async () => {
    const cmp = await import('../app.vue')
    expect(cmp).toBeDefined()
  })
})
