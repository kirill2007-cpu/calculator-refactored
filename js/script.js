let screen = document.querySelector('.calculator__input')
let isResultOnScreen = false

function clickOnKey(key) {
  if (isResultOnScreen) {
    screen.value = ''
    isResultOnScreen = false
  }
  screen.value = screen.value + key
}

function clickOnResetKey() {
  screen.value = ''
}

function clickOnResultKey() {
  try {
    screen.value = eval(screen.value)
    isResultOnScreen = true
  } catch (error) {
    screen.value = 'Oooops!!! Error :('
  }
}
