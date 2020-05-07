class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement
    this.noGradesElement = noGradesElement
  }

  updateGrades(grades) {
    var theadElement = this.tableElement.querySelector('thead')
    var tbodyElement = this.tableElement.querySelector('tbody')

    while (theadElement.firstChild) {
      theadElement.firstChild.remove()
    }

    while (tbodyElement.firstChild) {
      tbodyElement.firstChild.remove()
    }

    var trTitle = document.createElement('tr')
    var tdName = document.createElement('td')
    var tdCourse = document.createElement('td')
    var tdGrade = document.createElement('td')
    var tdOp = document.createElement('td')

    tdName.textContent = 'Name'
    tdCourse.textContent = 'Course'
    tdGrade.textContent = 'Grade'
    tdOp.textContent = 'Operations'

    trTitle.append(tdName, tdCourse, tdGrade, tdOp)
    theadElement.appendChild(trTitle)

    if (grades.length > 0) {
      for (var i = 0; i < grades.length; i++) {
        this.renderGradeRow(grades[i], this.deleteGrade)
      }
      this.noGradesElement.classList.add('d-none')
    } else {
      this.noGradesElement.classList.remove('d-none')
    }
  }

  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade
  }

  renderGradeRow(data, deleteGrade) {
    var td = {}

    var tr = document.createElement('tr')

    for (var key in data) {
      td[key] = document.createElement('td')
      td[key].textContent = data[key]
    }
    var tdOpCol = document.createElement('td')
    var tdOpColBtn = document.createElement('button')
    tdOpColBtn.textContent = 'Delete'
    tdOpColBtn.classList.add('btn-sm', 'btn-danger')
    tdOpColBtn.addEventListener('click', function () {
      deleteGrade(data.id)
    })
    tdOpCol.append(tdOpColBtn)

    tr.append(td.name, td.course, td.grade, tdOpCol)
    this.tableElement.querySelector('tbody').appendChild(tr)
  }
}
