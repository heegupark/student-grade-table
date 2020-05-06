var mainTable = document.getElementById('main-table')

var gradeTable = new GradeTable(mainTable)

var app = new App(
  gradeTable
)

app.start()
