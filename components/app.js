class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.gradeTable = gradeTable
    this.pageHeader = pageHeader
    this.gradeForm = gradeForm
    this.resultArray = resultArray
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
    this.resultArray = grades
    this.gradeTable.updateGrades(this.resultArray )
    this.pageHeader.updateAverage(this.resultArray)
  }

  handleCreateGradeError(error) {
    console.error(error)
  }

  handleCreateGradeSuccess(grade) {
    this.gradeTable.addOneGradeToTable(grade)
    this.resultArray.push(grade)
    this.pageHeader.updateAverage(this.resultArray)
  }

  handleDeleteGradeError(error) {
    console.error(error)
  }

  handleDeleteGradeSuccess() {
    for(var i=0; i<this.resultArray.length;i++) {
      if(this.resultArray[i].id === this.id) {
        this.resultArray.splice(i, 1)
      }
    }

    this.gradeTable.updateGrades(this.resultArray)
    this.pageHeader.updateAverage(this.resultArray)
  }

  handlePatchGradeError(error) {
    console.error(error)
  }

  handlePatchGradeSuccess(grade) {
    for (var i = 0; i < this.resultArray.length; i++) {
      if (this.resultArray[i].id === grade.id) {
        this.resultArray[i].name = grade.name
        this.resultArray[i].course = grade.course
        this.resultArray[i].grade = grade.grade
      }
    }

    this.gradeTable.updateGrades(this.resultArray)
    this.pageHeader.updateAverage(this.resultArray)
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
    this.id = id
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
