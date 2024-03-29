'use strict'

const Antl = use('Antl')

class Task {
  get rules () {
    return {
      title: 'required',
      due_date: 'date'
    }
  }

  get messages () {
    return Antl.list('validations')
  }
}

module.exports = Task
