class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.gradeTable = gradeTable
    this.pageHeader = pageHeader
    this.gradeForm = gradeForm
    this.createGrade = this.createGrade.bind(this)
    this.deleteGrade = this.deleteGrade.bind(this)
    this.patchGrade = this.patchGrade.bind(this)
    this.handleGetGradesError = this.handleGetGradesError.bind(this)
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this)
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this)
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this)
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this)
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this)
    this.handlePatchGradeError = this.handlePatchGradeError.bind(this)
    this.handlePatchGradeSuccess = this.handlePatchGradeSuccess.bind(this)
  }

  handleGetGradesError(error) {
    console.error(error)
  }

  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades)

    var sum = 0

    for (var i = 0; i < grades.length; i++) {
      sum += grades[i].grade
    }

    if(grades.length > 0) {
      var average = sum / grades.length
    } else {
      var average = 0
    }

    this.pageHeader.updateAverage(average)
  }

  handleCreateGradeError(error) {
    console.error(error)
  }

  handleCreateGradeSuccess() {
    this.getGrades()
  }

  handleDeleteGradeError(error) {
    console.error(error)
  }

  handleDeleteGradeSuccess() {
    this.getGrades()
  }

  handlePatchGradeError(error) {
    console.error(error)
  }

  handlePatchGradeSuccess() {
    console.log('aaa')
    this.getGrades()
  }

  getGrades() {
    var url = 'https://sgt.lfzprototypes.com'
    var path = '/api/grades'
    var apiKey = '6LXyHIPT'
    $.ajax({
      method: 'GET',
      url: url + path,
      headers: {
        "X-Access-Token": apiKey
      },
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
    })
  }

  createGrade(name, course, grade) {
    var url = 'https://sgt.lfzprototypes.com'
    var path = '/api/grades'
    var apiKey = '6LXyHIPT'
    $.ajax({
      method: 'POST',
      url: url + path,
      headers: {
        "X-Access-Token": apiKey
      },
      data: {
        "name": name,
        "course": course,
        "grade": grade
      },
      success: this.handleCreateGradeSuccess,
      error: this.handleCreateGradeError
    })
  }

  deleteGrade(id) {
    var url = 'https://sgt.lfzprototypes.com'
    var path = '/api/grades/' + id
    var apiKey = '6LXyHIPT'
    $.ajax({
      method: 'DELETE',
      url: url + path,
      headers: {
        "X-Access-Token": apiKey
      },
      success: this.handleDeleteGradeSuccess,
      error: this.handleDeleteGradeError
    })
  }

  patchGrade(id, name, course, grade) {
    var url = 'https://sgt.lfzprototypes.com'
    var path = '/api/grades/' + id
    var apiKey = '6LXyHIPT'
    $.ajax({
      method: 'PATCH',
      url: url + path,
      headers: {
        "X-Access-Token": apiKey
      },
      data: {
        "name": name,
        "course": course,
        "grade": grade
      },
      success: this.handlePatchGradeSuccess,
      error: this.handlePatchGradeError
    })
  }

  start() {
    this.getGrades()
    this.gradeForm.onSubmit(this.createGrade)
    this.gradeTable.onDeleteClick(this.deleteGrade)
    this.gradeForm.onPatchClick(this.patchGrade)
  }
}
