const image = document.querySelector('.container'),
      heartIcon = document.querySelector('.heart');

//create dblclick event
image.addEventListener('dblclick', (e) => {
    //get x and y position of mouse
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    heartIcon.style.top = `${y}px`;
    heartIcon.style.left = `${x}px`;

    //add active class to heart
    heartIcon.classList.add('active');
    setTimeout(() => {
        //remove active class after 1s
        heartIcon.classList.remove('active');
    }
    , 1000);
});
