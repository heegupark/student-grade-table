class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement
  }

  updateGrades(grades) {
    var tbodyElement = this.tableElement.querySelector('tbody')

    while (tbodyElement.fistChild) {
      tbodyElement.removeChild()
    }

    var theadElement = this.tableElement.querySelector('thead')

    var trTitle = document.createElement('tr')
    var tdName = document.createElement('td')
    var tdCourse = document.createElement('td')
    var tdGrade = document.createElement('td')

    tdName.textContent = 'Name'
    tdCourse.textContent = 'Course'
    tdGrade.textContent = 'Grade'

    trTitle.append(tdName, tdCourse, tdGrade)
    tbodyElement.appendChild(trTitle)

    var td = {}

    for (var i = 0; i < grades.length; i++) {
      var tr = document.createElement('tr')

      for (var key in grades[i]) {
        td[key] = document.createElement('td')
        td[key].textContent = grades[i][key]
      }

      tr.append(td.name, td.course, td.grade)
      tbodyElement.appendChild(tr)
    }
  }
}
