class GradeForm {
  constructor(formElement) {
    this.formElement = formElement
    this.handleSubmit = this.handleSubmit.bind(this)
    this.formElement.addEventListener('submit', this.handleSubmit)
  }

  onSubmit(createGrade) {
    this.createGrade = createGrade
  }

  onPatchClick(patchGrade) {
    this.patchGrade = patchGrade
  }

  handleSubmit(event) {
    event.preventDefault()

    var msgElement = document.getElementById('msg')
    var submitElement = document.getElementById('submit')

    var formData = new FormData(event.target)
    var name = formData.get('name')
    var course = formData.get('course')
    var grade = formData.get('grade')
    var id = document.getElementById('id').value

    if(!name.trim()) {
      msgElement.classList.remove('d-none')
      msgElement.textContent = 'Please write a name.'
      msgElement.style.color = 'red'
      return false;
    }

    if (!name.trim()) {
      msgElement.classList.remove('d-none')
      msgElement.textContent = 'Please write a name.'
      msgElement.style.color = 'red'
      return false
    }

    if (!course.trim()) {
      msgElement.classList.remove('d-none')
      msgElement.textContent = 'Please type a course.'
      msgElement.style.color = 'red'
      return false
    }

    if (!grade.trim()) {
      msgElement.classList.remove('d-none')
      msgElement.textContent = 'Please type a grade.'
      msgElement.style.color = 'red'
      return false
    }

    if (isNaN(Number(grade))) {
      msgElement.classList.remove('d-none')
      msgElement.textContent = 'Grade should be a number'
      msgElement.style.color = 'red'
      return false
    }

    if (Number(grade) < 0 || Number(grade) > 100 ) {
      msgElement.classList.remove('d-none')
      msgElement.textContent = 'Grade should be between 0 and 100'
      msgElement.style.color = 'red'
      return false
    }

    msgElement.classList.add('d-none')

    if (submitElement.textContent === 'Add') {
      this.createGrade(name, course, grade)
    } else if (submitElement.textContent === 'Update') {
      submitElement.textContent = 'Add'
      this.patchGrade(id, name, course, grade)

    }
    // Clearing the fields after submiting the form
    this.formElement.reset()
  }
}
