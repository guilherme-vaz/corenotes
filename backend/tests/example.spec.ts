/* eslint-disable prettier/prettier */
import test from 'japa'

test.group('List notes', () => {
  test('get a paginated list of notes', async ({ client }) => {
    const response = await client.get('/notes')

    console.log(response.body())
  })
})
