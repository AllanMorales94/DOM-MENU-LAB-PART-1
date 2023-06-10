// Task 1.0 selecting our main element from our document 
const mainEl = document.querySelector('main')

// Task 1.1 using style to link our color from our css file
mainEl.style.backgroundColor = 'var(--main-bg)'

// Task 1.2 using innerHTML to update our html with a new element 
mainEl.innerHTML = '<h1>Polish Your Mastering Skills!</h1>'

// Task 1.3 using classList to assign a class
mainEl.classList = 'flex-ctr'