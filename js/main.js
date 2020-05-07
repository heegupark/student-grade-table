var mainTable = document.getElementById('main-table')

var gradeTable = new GradeTable(mainTable)

var headerElement = document.querySelector('header')

var pageHeader = new PageHeader(headerElement)

var gradeFormElement = document.getElementById('grade-form')

var gradeForm = new GradeForm(gradeFormElement)

var app = new App(
  gradeTable,
  pageHeader,
  gradeForm
)

app.start()
