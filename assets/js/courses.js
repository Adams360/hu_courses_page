
// Nav Hamburger Button
const hamburger = document.querySelector('.hamburger');
const navMenu   = document.querySelector('.main-nav__menu');
// const navBar    = document.querySelector('.nav');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    navMenu.classList.toggle('is-active');
});


// Slider
$('.courses-nav__list').slick({
  accessibility: true,
  arrows: false,
  mobileFirst: true,
  waitForAnimate: false,
  slidesToShow: 3,
  swipeToSlide: true,
  infinite: false,
  responsive: [
    {
    breakpoint: 991,
    settings: 'unslick'
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 4,
    }
  }

]
});


// Courses Display 
function setupCourses() {
  const navBtns = document.querySelectorAll('.nav-btn');
  navBtns.forEach(navBtn => {
    navBtn.addEventListener('click', () => {


      // Determine the content generated height 
      
      // and apply it to the div 



      // Removes the active class from the .nav-btn:
      navBtns.forEach(navBtn => {
        navBtn.classList.remove('nav-btn--active');
      })
      // Removes the active class from the .courses-menu__layout:
      const courseLayouts = document.querySelectorAll('.courses-menu__layout');
      courseLayouts.forEach(layout => {
        layout.classList.remove('courses-menu__layout--active');
      });

      // Get the course number
      const courseNum = navBtn.dataset.forCourse;
      // And show the corresponding course in the menu
      const courseItem = document.querySelector(`.courses-menu__layout[data-course="${courseNum}"]`);
      courseItem.classList.add('courses-menu__layout--active');
      navBtn.classList.add('nav-btn--active');

      const courseItemHeight = courseItem.scrollHeight + 30 + 'px';
      document.querySelector('.courses-menu').style.height = courseItemHeight;


    });
  });
   // Count checked items
   function updateCount() {
    var x = $(".courses-menu__input:checked").length;
    document.querySelector('.counter__number').innerHTML = x;

    if(x > 0) {
      document.querySelector('.text--empty').style.display = "none";
    } else {
      document.querySelector('.text--empty').style.display = "block";

    }
    

   if(x === 1) {
      document.querySelector('.counter__text').innerHTML = "Course Selected";
    } else {
      document.querySelector('.counter__text').innerHTML = "Courses Selected";
    }

};


$('.courses-menu__input').change((e) => {
    let courseLabelElem = e.target.parentNode.querySelector('label');
    let courseName = courseLabelElem.querySelector('.courses-menu__text').innerText
    let courseId = courseLabelElem.querySelector('.courses-menu__text--sub').innerText
    
    if(e.target.checked){
        $('#selected___courses').append(
            `<li class="selected___course___item" id="selected_${courseId}">
                <button class="remove__course__button" id="remove_${courseId}">
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
       <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
      </svg>
                </button>
                ${courseName} ${courseId}
            </li>`)
        $(`#remove_${courseId}`).click(() =>{
             e.target.checked = false
             $(`#selected_${courseId}`).remove();
             updateCount();
        })

    } else {
        $(`#selected_${courseId}`).remove();
    }

    updateCount();
    
});


}


document.addEventListener('DOMContentLoaded', () => {
  setupCourses();
  document.querySelector('.nav-btn').classList.add('nav-btn--active');
  const layout = document.querySelector('.courses-menu__layout');
  layout.classList.add('courses-menu__layout--active');
      const layoutHeight = layout.scrollHeight + 30 + 'px';
      document.querySelector('.courses-menu').style.height = layoutHeight;
});