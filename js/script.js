// Set current year on footer
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const navLinks = document.querySelectorAll(".header a:link");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (headerEl.classList.contains("nav-open")) {
        headerEl.classList.remove("nav-open");
      }
    });
  });


  // Sticky navigation

  const sectionHeroEl = document.querySelector('.section-hero');

  const obs = new IntersectionObserver(function(entries) {
    const ent = entries[0];
    if ( ent.isIntersecting === false) {
        document.body.classList.add('sticky');
    } 
    else if (ent.isIntersecting === true) {
        document.body.classList.remove('sticky');
    }
  }, 
  {
    //In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px"
  });
  obs.observe(sectionHeroEl);

  //Fixing flexbox gap property missing in some Safari version
  // Safari 16 was released 2022 and support the "gap" property in flexbox

/*   function checkFlexGap() {
    const flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";

    flex.appendChild(document.createElement("div"));

    document.body.appendChild(flex);
    const isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log (isSupported);

    if (!isSupported) {
        document.body.classList.add("no-flexbox-gap");
    } 
    
}
checkFlexGap() */





/* 1. Fix smooth scrolling on older versions of Safari (before Safari 15 or iOS 15)
   3. **mention -  'scroll-behavior: smooth;' on CSS was released in September 2021
*/
/* const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const href = link.getAttribute("href");

    //Scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    };
  });
}); */
