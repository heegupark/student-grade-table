class App {
  constructor(gradeTable) {
    this.gradeTable = gradeTable
    this.handleGetGradesError = this.handleGetGradesError.bind(this)
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this)
  }

  handleGetGradesError(error) {
    console.error(error)
  }

  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades)
  }

  getGrades() {
    var url = 'https://sgt.lfzprototypes.com/api/grades'
    var apiKey = '6LXyHIPT'
    $.ajax({
      method: 'GET',
      url: url,
      headers: {
        "X-Access-Token": apiKey
      },
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
    })
  }

  start() {
    this.getGrades()
  }
}
