class App {
  constructor(gradeTable, pageHeader) {
    this.gradeTable = gradeTable
    this.pageHeader = pageHeader
    this.handleGetGradesError = this.handleGetGradesError.bind(this)
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this)
  }

  handleGetGradesError(error) {
    console.error(error)
  }

  handleGetGradesSuccess(grades) {
    gradeTable.updateGrades(grades)

    var sum = 0

    for(var i =0; i<grades.length; i++) {
      sum += grades[i].grade
    }

    var average = sum / grades.length
    pageHeader.updateAverage(average)
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
