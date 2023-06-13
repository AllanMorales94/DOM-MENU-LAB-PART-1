// Task 3.0 Menu data structure
const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '/catalog'},
  {text: 'orders', href: '/orders'},
  {text: 'account', href: '/account'},
];


// Task 1.0 selecting our main element from our document 
const mainEl = document.querySelector('main')

// Task 1.1 using style to link our color from our css file
mainEl.style.backgroundColor = 'var(--main-bg)'

// Task 1.2 using innerHTML to update our html with a new element 
mainEl.innerHTML = '<h1>Polish Your Mastering Skills!</h1>'

// Task 1.3 using classList to assign a class
mainEl.classList = 'flex-ctr'

// Task 2.0 selecting an id using #
const topMenuEl = document.querySelector('#top-menu')

// Task 2.1 using style to add a height to our css file
topMenuEl.style.height = '100%'

// Task 2.2 using var as asked to on Task 1.1
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'

// Task 2.3 using classList to assign a class 
topMenuEl.classList = 'flex-around'

// Task 3.1 Iterating over menuLinks
menuLinks.forEach(link => {
  // Creating an <a> element
  let aEl = document.createElement('a')
  // Adding a href with setAttribute() with a property of link object
  aEl.setAttribute('href', link.href)
  // Set the new element's content to the value of the text property of the link object.
  aEl.textContent = link.text
  // Append the new element to the topMenuEl element.
  topMenuEl.append(aEl)
});

// Task 4.0 selecting the id using #
const subMenuEl = document.querySelector('#sub-menu')

// Task 4.1 using style to add a height to our css file
subMenuEl.style.height = '100%'

// Task 4.2 using style to link our color from our css file
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'

// Task 4.3 using classList to assign a class
subMenuEl.classList = 'flex-around'

// Task 4.4 using CSS styling to position 
subMenuEl.style.position = 'absolute'

// Task 4.5 using CSS to adjust top property
subMenuEl.style.top = '0'