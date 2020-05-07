class PageHeader {
  constructor(headerElement) {
    this.headerElement = headerElement
  }

  updateAverage(newAverage) {
    var badgeElement = document.getElementById('badge')
    var h5Element = document.createElement('h5')
    h5Element.textContent = 'Average Grade '

    var spanElement = document.createElement('span')
    spanElement.classList.add('badge')
    spanElement.classList.add('badge-secondary')
    spanElement.textContent = newAverage
    h5Element.append(spanElement)
    badgeElement.append(h5Element)
  }
}
