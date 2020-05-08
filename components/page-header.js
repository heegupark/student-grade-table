class PageHeader {
  constructor(headerElement) {
    this.headerElement = headerElement
  }

  updateAverage(resultArray) {
    var badgeElement = document.getElementById('badge')
    var countElement = document.getElementById('count')
    var averageElement = document.getElementById('average')

    while (badgeElement.firstChild) {
      badgeElement.firstChild.remove()
    }

    var sum = 0
    for (var i = 0; i < resultArray.length; i++) {
      sum += Number(resultArray[i].grade)
    }

    if (resultArray.length > 0) {
      var average = sum / resultArray.length
    } else {
      var average = 0
    }

    var h5Element = document.createElement('h5')
    h5Element.textContent = 'Average Grade '

    var spanElement = document.createElement('span')
    spanElement.classList.add('badge')
    spanElement.classList.add('badge-secondary')
    spanElement.textContent = average.toFixed(1)

    h5Element.append(spanElement)
    badgeElement.append(h5Element)
  }
}
