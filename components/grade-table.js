class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement
    this.noGradesElement = noGradesElement
  }

  addOneGradeToTable(grade) {
    var tbodyElement = this.tableElement.querySelector('tbody')
    this.renderGradeRow(grade, this.deleteGrade, this.patchGrade)
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
    var thName = document.createElement('th')
    var thCourse = document.createElement('th')
    var thGrade = document.createElement('th')
    var thOp = document.createElement('th')

    thName.textContent = 'Name'
    thCourse.textContent = 'Course'
    thGrade.textContent = 'Grade'
    thOp.textContent = 'Operations'

    trTitle.append(thName, thCourse, thGrade, thOp)
    theadElement.appendChild(trTitle)

    if (grades.length > 0) {
      for (var i = 0; i < grades.length; i++) {
        this.renderGradeRow(grades[i], this.deleteGrade, this.patchGrade)
      }
      this.noGradesElement.classList.add('d-none')
    } else {
      this.noGradesElement.classList.remove('d-none')
    }
  }

  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade
  }

  renderGradeRow(data, deleteGrade, patchGrade) {
    var td = {}

    var tr = document.createElement('tr')

    for (var key in data) {
      td[key] = document.createElement('td')
      td[key].textContent = data[key]
    }

    var tdOpCol = document.createElement('td')
    var tdOpColUpBtn = document.createElement('button')
    var iUpElement = document.createElement('i')
    iUpElement.classList.add('fas', 'fa-edit')
    tdOpColUpBtn.classList.add('btn-sm', 'btn-warning', 'mr-3')
    tdOpColUpBtn.append(iUpElement)

    tdOpColUpBtn.addEventListener('click', (event) => {
      this.fillForm(data)
    })

    var tdOpColDelBtn = document.createElement('button')
    var iDelElement = document.createElement('i')
    iDelElement.classList.add('far', 'fa-trash-alt')
    tdOpColDelBtn.classList.add('btn-sm', 'btn-danger', 'mr-3')
    tdOpColDelBtn.append(iDelElement)

    tdOpColDelBtn.addEventListener('click', function () {
      deleteGrade(data.id)
    })

    tdOpCol.append(tdOpColUpBtn, tdOpColDelBtn)

    tr.append(td.name, td.course, td.grade, tdOpCol)
    this.tableElement.querySelector('tbody').appendChild(tr)
  }

  fillForm(data) {
    document.getElementById('name').value = data.name
    document.getElementById('course').value = data.course
    document.getElementById('grade').value = data.grade
    patchId = data.id
    document.getElementById('submit').textContent = 'Update'
  }
}
