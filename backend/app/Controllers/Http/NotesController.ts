import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Note from 'App/Models/Note'

export default class NotesController {
  public async index({}: HttpContextContract) {
    const notes = await Note.all()

    return notes
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['title', 'content', 'favorite'])
    const note = await Note.create(data)

    return note
  }

  public async show({ params }: HttpContextContract) {
    const note = await Note.findOrFail(params.id)

    return note
  }

  public async update({ request, params }: HttpContextContract) {
    const note = await Note.findOrFail(params.id)
    const data = request.only(['title', 'content', 'favorite', 'color'])
    note.merge(data)
    await note.save()
    return note
  }

  public async destroy({ params }: HttpContextContract) {
    const note = await Note.findOrFail(params.id)
    await note.delete()
  }
}
