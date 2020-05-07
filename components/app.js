class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.gradeTable = gradeTable
    this.pageHeader = pageHeader
    this.gradeForm = gradeForm
    this.createGrade = this.createGrade.bind(this)
    this.handleGetGradesError = this.handleGetGradesError.bind(this)
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this)
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this)
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this)
  }

  handleGetGradesError(error) {
    console.error(error)
  }

  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades)

    var sum = 0

    for(var i =0; i<grades.length; i++) {
      sum += grades[i].grade
    }

    var average = sum / grades.length
    this.pageHeader.updateAverage(average)
  }

  handleCreateGradeError(error) {
    console.error(error)
  }

  handleCreateGradeSuccess() {
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

  start() {
    this.getGrades()
    this.gradeForm.onSubmit(this.createGrade)
  }
}
