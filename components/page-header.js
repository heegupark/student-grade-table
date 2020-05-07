class PageHeader {
  constructor(headerElement) {
    this.headerElement = headerElement
  }

  updateAverage(newAverage) {
    var badgeElement = document.getElementById('badge')

    while(badgeElement.firstChild) {
      badgeElement.firstChild.remove()
    }

    var h5Element = document.createElement('h5')
    h5Element.textContent = 'Average Grade '

    var spanElement = document.createElement('span')
    spanElement.classList.add('badge')
    spanElement.classList.add('badge-secondary')
    spanElement.textContent = newAverage.toFixed(2)
    h5Element.append(spanElement)
    badgeElement.append(h5Element)
  }
}
