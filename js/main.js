var mainTable = document.getElementById('main-table')

var gradeTable = new GradeTable(mainTable)

var headerElement = document.querySelector('header')

var pageHeader = new PageHeader(headerElement)

var app = new App(
  gradeTable,
  pageHeader
)

app.start()
