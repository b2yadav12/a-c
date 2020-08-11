$('#aboutus').readmore({
  collapsedHeight: 88,
  moreLink: '<a class="link-grey weight600 font14">Show all about us</a>',
  lessLink: '<a class="link-grey weight600 font14">Hide all about us</a>',
  afterToggle: function (trigger, element, expanded) {
    if (!expanded) { // The "Close" link was clicked
      $('html, body').animate({ scrollTop: element.offset().top }, { duration: 100 });
    }
  }
});

$('#services').readmore({
  collapsedHeight: 162,
  moreLink: '<a class="link-grey weight600 font14">Show all services</a>',
  lessLink: '<a class="link-grey weight600 font14">Hide all services</a>',
  afterToggle: function (trigger, element, expanded) {
    if (!expanded) { // The "Close" link was clicked
      $('html, body').animate({ scrollTop: element.offset().top }, { duration: 100 });
    }
  }
});

$('#specializations').readmore({
  collapsedHeight: 162,
  moreLink: '<a class="link-grey weight600 font14">Show all specializations</a>',
  lessLink: '<a class="link-grey weight600 font14">Hide all specializations</a>',
  afterToggle: function (trigger, element, expanded) {
    if (!expanded) { // The "Close" link was clicked
      $('html, body').animate({ scrollTop: element.offset().top }, { duration: 100 });
    }
  }
});

$('#specialist').readmore({
  collapsedHeight: 130,
  moreLink: '<a class="link-grey weight600 font14">Show all specialist</a>',
  lessLink: '<a class="link-grey weight600 font14">Hide all specialist</a>',
  afterToggle: function (trigger, element, expanded) {
    if (!expanded) { // The "Close" link was clicked
      $('html, body').animate({ scrollTop: element.offset().top }, { duration: 100 });
    }
  }
});

$('#remarks').readmore({
  collapsedHeight: 46,
  moreLink: '<a class="link-grey weight600 font14">Show all remarks</a>',
  lessLink: '<a class="link-grey weight600 font14">Hide all remarks</a>',
  afterToggle: function (trigger, element, expanded) {
    if (!expanded) { // The "Close" link was clicked
      $('html, body').animate({ scrollTop: element.offset().top }, { duration: 100 });
    }
  }
});

$('article').readmore({ speed: 500 });

$(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});