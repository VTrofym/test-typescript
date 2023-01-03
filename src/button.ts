const button = document.querySelector('#buttonId')!;

button.addEventListener('click', () => {
  console.log('click',)
})


// const input = <HTMLInputElement> document.querySelector('#inputId')
// input.value = 'test'

const input = document.querySelector('#inputId')! as HTMLInputElement
input.value = 'test'