/** When load extension */
document.addEventListener('DOMContentLoaded', () => {

  // Arrow func to CAPITALIZE text
  const upper = text => text.toUpperCase()

  // Arrow func to decapitalize text
  const lower = text => text.toLowerCase()

  // Arrow func that copy text to clipboard
  const copy = str => // TODO

  // Listener to CAPITALIZE with button is clicked
  document.querySelector('#cap-btn').addEventListener('click', () => {
    let text = document.querySelector('#text').value

    document.querySelector("#result").innerHTML = upper(text)
    if (text.length > 0) {
      document.querySelector("#copy-btn").hidden = false
    }
  })

  // Listener to decapitalize with button is clicked
  document.querySelector('#decap-btn').addEventListener('click', () => {
    let text = document.querySelector('#text').value

    document.querySelector("#result").innerHTML = lower(text)
    if (text.length > 0) {
      document.querySelector("#copy-btn").hidden = false
    }
  })

  // Listener to copy to clipboard button
  document.querySelector('#copy-btn').addEventListener('click', () => {
    let text = document.querySelector("#result").value
    copy(text)
  })
})