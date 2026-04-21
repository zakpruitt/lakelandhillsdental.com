document.addEventListener('DOMContentLoaded', function () {
  function scrollTo(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }

  document.querySelector('.nav-cta').addEventListener('click', function () {
    scrollTo('contact');
  });

  document.querySelector('.btn-primary').addEventListener('click', function () {
    scrollTo('contact');
  });

  document.querySelector('.btn-outline').addEventListener('click', function () {
    scrollTo('services');
  });

  var testiGrid = document.querySelector('.testi-grid');
  document.querySelector('.testi-nav-prev').addEventListener('click', function () {
    testiGrid.scrollBy({ left: -354, behavior: 'smooth' });
  });
  document.querySelector('.testi-nav-next').addEventListener('click', function () {
    testiGrid.scrollBy({ left: 354, behavior: 'smooth' });
  });

  document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Form submission is a demo—wire this up to your backend or a service like Formspree.');
  });
});
