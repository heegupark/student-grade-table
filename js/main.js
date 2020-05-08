var mainTable = document.getElementById('main-table')
var noGradeElement = document.getElementById('no-grade-p')

var gradeTable = new GradeTable(mainTable, noGradeElement)

var headerElement = document.querySelector('header')

var pageHeader = new PageHeader(headerElement)

var gradeFormElement = document.getElementById('grade-form')

var gradeForm = new GradeForm(gradeFormElement)

// for avoid frequent GET request
var resultArray = {}
var patchId

var app = new App(
  gradeTable,
  pageHeader,
  gradeForm
)

app.start()
