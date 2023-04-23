window.addEventListener('load' ,() => {
    const h1 = document.querySelector('#animate-me')
    h1.style.transform = 'translateX(0)'
});



/*  code selects all the project-container elements and adds a click event listener to each one. When a user clicks on a project container,
 the JavaScript code gets the href attribute of the child a element and navigates to that URL using window.location */



const projectContainers = document.querySelectorAll('.project-container');

projectContainers.forEach(container => {
  container.addEventListener('click', () => {
    const link = container.querySelector('a').href;
    window.location = link;
  });
});



