/**
 * Function to get the current active element
 */
function getActiveItemIdx(...arr) {
    return arr.indexOf(document.querySelector('[data-active="active"]'));
}

const prevBtn = document.querySelector('[data-prev-btn]'); // previous button
const nxtBtn = document.querySelector('[data-next-btn]'); // next button
const carousel = document.querySelector('[data-carousel-list]').children; // all elements in the carousel

/**
 * Event listener for adding on click bg change
 */
prevBtn.addEventListener(`mousedown`, (event) => {
    event.stopPropagation();
    prevBtn.setAttribute('data-btn-click-bg', '');
});

prevBtn.addEventListener(`mouseup`, (event) => {
    event.stopPropagation();
    prevBtn.removeAttribute('data-btn-click-bg');
});

prevBtn.addEventListener(`mouseleave`, (event) => {
    event.stopPropagation();
    prevBtn.removeAttribute('data-btn-click-bg');
});

/**
 * Event listener for previous button
 */
prevBtn.addEventListener(`click`, (event) => {
    event.stopPropagation();
    let currIdx = getActiveItemIdx(...carousel); // Active element index
    const itemsArr = [...carousel]; // All carousel elements
    const curr = itemsArr[currIdx]; // Active element 

    // Setting current active element to inactive
    curr.setAttribute('data-active', 'inactive');

    // Re-setting active index to avoid array out of bound
    if (currIdx == 0) {
        currIdx = itemsArr.length;
    }

    const prev = itemsArr[currIdx - 1]; // Previous element

    //Setting previous element to active
    prev.setAttribute('data-active', 'active');
});

/**
 * Event listener for adding on click bg change
 */
nxtBtn.addEventListener(`mousedown`, (event) => {
    event.stopPropagation();
    nxtBtn.setAttribute('data-btn-click-bg', '');
});

nxtBtn.addEventListener(`mouseup`, (event) => {
    event.stopPropagation();
    nxtBtn.removeAttribute('data-btn-click-bg');
});

nxtBtn.addEventListener(`mouseleave`, (event) => {
    event.stopPropagation();
    nxtBtn.removeAttribute('data-btn-click-bg');
});

/**
 * Event listener for next button
 */
nxtBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    let currIdx = getActiveItemIdx(...carousel); //active element index
    const itemsArr = [...carousel]; // all elements array
    const curr = itemsArr[currIdx]; // current element

    // setting current active element to inactive
    curr.setAttribute('data-active', 'inactive');

    // re-setting active index to avoid array out of bound
    if (currIdx == itemsArr.length - 1) {
        currIdx = -1;
    }

    const next = itemsArr[currIdx + 1]; // next element

    // Setting next element to active
    next.setAttribute('data-active', 'active');
});
