"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var titleWrap = document.querySelectorAll('.title--wrap');

if (titleWrap) {
  var _iterator = _createForOfIteratorHelper(titleWrap),
      _step;

  try {
    var _loop = function _loop() {
      var titleWrapItem = _step.value;
      var titlePreParents = titleWrapItem.parentElement.parentElement;
      var titleParents = titleWrapItem.parentElement;

      var titleClass = function titleClass() {
        return titleWrapItem.classList.contains('moved');
      };

      function innerTitle() {
        if (window.innerWidth <= 767 && !titleClass()) {
          titleWrapItem.classList.add('moved');
          titlePreParents.prepend(titleWrapItem);
        }

        if (window.innerWidth > 767 && titleClass()) {
          titleWrapItem.classList.remove('moved');
          titleParents.prepend(titleWrapItem);
        }
      }

      innerTitle();
      window.addEventListener('resize', function () {
        innerTitle();
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  ;
}

;
"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var title = document.querySelectorAll('.tomography__title--wrap');

if (title) {
  var _iterator = _createForOfIteratorHelper(title),
      _step;

  try {
    var _loop = function _loop() {
      var titleItem = _step.value;
      var titlePreParents = titleItem.closest('.tomography__inner');
      var titleParents = titleItem.closest('.tomography__text');

      var titleClass = function titleClass() {
        return titleItem.classList.contains('moved');
      };

      function innerTitle() {
        if (window.innerWidth <= 1024 && !titleClass()) {
          titleItem.classList.add('moved');
          titlePreParents.prepend(titleItem);
        }

        if (window.innerWidth > 1025 && titleClass()) {
          titleItem.classList.remove('moved');
          titleParents.prepend(titleItem);
        }
      }

      innerTitle();
      window.addEventListener('resize', function () {
        innerTitle();
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  ;
}

;
var casesContent = document.querySelector('.cases__content');

if (casesContent) {
  var marginTopResize = function marginTopResize() {
    if (window.innerWidth > 768) {
      casesContent.style.marginTop = -(document.documentElement.clientHeight - (topCasesBodyHeight + 160)) + 'px';
      brushCases.style.bottom = document.documentElement.clientHeight - (topCasesBodyHeight + 240) + 'px';
    }

    if (window.innerWidth <= 768) {
      casesContent.style.marginTop = -(window.innerHeight - (topCasesBodyHeight + 130)) + 'px';
    }
  };

  var topCasesBody = document.querySelector('.top-cases__body');
  var brushCases = document.querySelector('.top-cases__decor-left');
  var topCasesBodyHeight = topCasesBody.clientHeight;
  ;
  window.addEventListener('resize', function () {
    marginTopResize();
  });
  marginTopResize();
}

var tomographySituation = document.querySelector('.tomography__situation');

if (tomographySituation) {
  new Swiper('.tomography__situation', {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      renderFraction: function renderFraction(currentClass) {
        return '0<span class="' + currentClass + '"></span>';
      }
    },
    navigation: {
      nextEl: '.tomography-button-next',
      prevEl: '.tomography-button-prev'
    },
    loop: true,
    observeParents: true,
    observer: true,
    speed: 300,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    on: {
      init: function init() {
        var progressBar = document.querySelector('.progress-bar');
        progressBar.classList.remove('animate');
        progressBar.classList.remove('active');
        progressBar.classList.add('animate');
        progressBar.classList.add('active');
      },
      slideChangeTransitionStart: function slideChangeTransitionStart() {
        var progressBar = document.querySelector('.progress-bar');
        progressBar.classList.remove('animate');
        progressBar.classList.remove('active');
        progressBar.classList.add('active');
      },
      slideChangeTransitionEnd: function slideChangeTransitionEnd() {
        var progressBar = document.querySelector('.progress-bar');
        progressBar.classList.add('animate');
      }
    }
  });
}

;
var tomographyStages = document.querySelector('.tomography__stages');

if (tomographyStages) {
  new Swiper('.tomography__stages', {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      renderFraction: function renderFraction(currentClass) {
        return '0<span class="' + currentClass + '"></span>';
      }
    },
    navigation: {
      nextEl: '.tomography-button-next',
      prevEl: '.tomography-button-prev'
    },
    loop: true,
    observeParents: true,
    observer: true,
    speed: 300,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    on: {
      init: function init() {
        var progressBar = document.querySelector('.progress-stages');
        progressBar.classList.remove('animate');
        progressBar.classList.remove('active');
        progressBar.classList.add('animate');
        progressBar.classList.add('active');
      },
      slideChangeTransitionStart: function slideChangeTransitionStart() {
        var progressBar = document.querySelector('.progress-stages');
        progressBar.classList.remove('animate');
        progressBar.classList.remove('active');
        progressBar.classList.add('active');
      },
      slideChangeTransitionEnd: function slideChangeTransitionEnd() {
        var progressBar = document.querySelector('.progress-stages');
        progressBar.classList.add('animate');
      }
    }
  });
}

;
var tomographyWeeks = document.querySelector('.tomography__weeks');

if (tomographyWeeks) {
  new Swiper('.tomography__weeks', {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      renderFraction: function renderFraction(currentClass) {
        return '0<span class="' + currentClass + '"></span>';
      }
    },
    navigation: {
      nextEl: '.tomography-button-next',
      prevEl: '.tomography-button-prev'
    },
    loop: true,
    observeParents: true,
    observer: true,
    speed: 300,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    on: {
      init: function init() {
        var progressBar = document.querySelector('.progress-week');
        progressBar.classList.remove('animate');
        progressBar.classList.remove('active');
        progressBar.classList.add('animate');
        progressBar.classList.add('active');
      },
      slideChangeTransitionStart: function slideChangeTransitionStart() {
        var progressBar = document.querySelector('.progress-week');
        progressBar.classList.remove('animate');
        progressBar.classList.remove('active');
        progressBar.classList.add('active');
      },
      slideChangeTransitionEnd: function slideChangeTransitionEnd() {
        var progressBar = document.querySelector('.progress-week');
        progressBar.classList.add('animate');
      }
    }
  });
}

;
var resultSwiper = new Swiper('.result__gallery.open', {
  watchOverflow: true,
  observeParents: true,
  observeSlipeChildren: true,
  observer: true,
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
var anchorsLink = document.querySelectorAll('.anchors__link');
var speed = .2;

var _iterator2 = _createForOfIteratorHelper(anchorsLink),
    _step2;

try {
  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    var anchorsLinkItem = _step2.value;
    anchorsLinkItem.addEventListener('click', function (el) {
      el.preventDefault();
      var windowTop = window.pageYOffset;
      var id = this.getAttribute('href');
      var scrollTo = document.querySelector(id);
      var scrollSize = scrollTo.getBoundingClientRect().top - 130;
      var start = null;
      requestAnimationFrame(step);

      function step(time) {
        if (start === null) start = time;
        var progress = time - start,
            r = scrollSize < 0 ? Math.max(windowTop - progress / speed, windowTop + scrollSize) : Math.min(windowTop + progress / speed, windowTop + scrollSize);
        window.scrollTo(0, r);

        if (r != windowTop + scrollSize) {
          requestAnimationFrame(step);
        } else {
          location.scrollTo = scrollTo;
        }
      }
    }, false);
  }
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}

;
var casesAnchors = document.querySelector('.cases__anchors');

if (casesAnchors) {
  var ancorFixed = function ancorFixed() {
    if (window.innerWidth >= 768) {
      var casesAnchorsScroll = casesAnchors.getBoundingClientRect().top;
      window.addEventListener('scroll', function () {
        var anchorScroll = function anchorScroll() {
          return casesAnchors.classList.contains('active');
        };

        if (casesAnchorsScroll <= window.pageYOffset + 130 && !anchorScroll()) {
          casesAnchors.classList.add('active');
        }

        ;

        if (casesAnchorsScroll >= window.pageYOffset + 130 && anchorScroll()) {
          casesAnchors.classList.remove('active');
        }

        ;
      });
    }

    ;
  };

  ;
  window.addEventListener('resize', function () {
    ancorFixed();
  });
  ancorFixed();
}
"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var filterBtn = document.querySelector('.portfolio__filter');
var filterContent = document.querySelector('.portfolio__inner');
var allBtn = document.querySelector('.portfolio__all');
var sidebarBtn = document.querySelectorAll('.portfolio__btn');
var casesCard = document.querySelectorAll('.portfolio__item');

if (filterBtn) {
  var filterCategories = function filterCategories() {
    var _iterator3 = _createForOfIteratorHelper(sidebarBtn),
        _step3;

    try {
      var _loop2 = function _loop2() {
        var button = _step3.value;
        var currentCategory = button.dataset.filter;
        button.addEventListener('click', function () {
          filterContent.style.height = 0;
          filterContent.classList.remove('open');
          filterBtn.classList.remove('open');
          body.classList.remove('open');

          for (var _i = 0; _i < sidebarBtn.length; _i++) {
            var _button = sidebarBtn[_i];

            _button.classList.remove('active');
          }

          button.classList.add('active');

          var _loop3 = function _loop3(_i2) {
            var card = casesCard[_i2];
            card.classList.add('hide');

            card.ontransitionend = function () {
              if (card.classList.contains('hide')) {
                card.classList.add('hidden');
              }
            };
          };

          for (var _i2 = 0; _i2 < casesCard.length; _i2++) {
            _loop3(_i2);
          }

          var currentCard = document.getElementsByClassName(currentCategory);

          var _iterator4 = _createForOfIteratorHelper(currentCard),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var currentCardItem = _step4.value;
              currentCardItem.classList.remove('hide');
              currentCardItem.classList.remove('hidden');
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        });
      };

      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        _loop2();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  };

  var portfolioBtn = document.querySelectorAll('.portfolio__button');

  var _loop = function _loop(i) {
    var portfolioBtnItem = portfolioBtn[i];
    portfolioBtnItem.addEventListener('click', function () {
      var portfolioImage = portfolioBtnItem.closest('.portfolio__images').querySelectorAll('.portfolio__image');

      for (var _i3 = 0; _i3 < portfolioImage.length; _i3++) {
        var portfolioImageItem = portfolioImage[_i3];
        portfolioImageItem.classList.toggle('open');
      }
    });
  };

  for (var i = 0; i < portfolioBtn.length; i++) {
    _loop(i);
  }

  ;
  filterBtn.addEventListener('click', function () {
    var scrollToFilter = filterContent.getBoundingClientRect().top;
    filterBtn.classList.toggle('open');

    var dropHidden = function dropHidden() {
      return filterBtn.classList.contains('open');
    };

    if (dropHidden()) {
      filterContent.style.height = windowHeight - scrollToFilter + 'px';
      filterContent.classList.toggle('open');
      body.classList.toggle('open');
    } else {
      filterContent.style.height = 0;
      filterContent.classList.remove('open');
      body.classList.remove('open');
    }
  });
  allBtn.addEventListener('click', function () {
    filterContent.style.height = 0;
    filterContent.classList.remove('open');
    filterBtn.classList.remove('open');
    body.classList.remove('open');

    var _iterator = _createForOfIteratorHelper(sidebarBtn),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var button = _step.value;
        button.classList.remove('active');
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var _iterator2 = _createForOfIteratorHelper(casesCard),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var card = _step2.value;
        card.classList.remove('active');
        card.classList.remove('hide-mobile');
        card.classList.remove('hide');
        card.classList.remove('hidden');
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  });
  filterCategories();
} // const loadMoreBlock = document.querySelector('.portfolio__content') //Получаем блок в который происходит автоподгрузка
// function LoadMore() {//Отслеживаем когда пора добавлять кейсы
// 	const loadMoreBlockPos = loadMoreBlock.getBoundingClientRect().top + pageXOffset;
// 	const loadMoreBlockHeight = loadMoreBlock.offsetHeight;
// 	if (pageXOffset > (loadMoreBlockPos + loadMoreBlockHeight) - windowHeight - 300 && !loading) {//Если скролл достиг нужного положения и загрузка еще не чачалась, то
// 		getContent();//Вызываем функцию автоподгрузки
// 	}
// }
// async function getContent() {
// 	loadMoreBlock.classList.add('loading')//Объявляем запуск автоподгрузки
// 	let response = await fetch('more.html', {//Берем кейсы из файла more.html
// 		method: 'GET'
// 	});
// 	if (response.ok) {//Если файл есть и в нем есть кейсы то
// 		let result = await response.text();
// 		loadMoreBlock.insertAdjacentHTML('beforeend', result);//Вставляем содержимое файла в блок с кейсами
// 		loadMoreBlock.classList.remove('loading')//Объявляем что автоподгрузка завершена
// 	} else {
// 		alert('Ошибка');
// 	}
// }
// window.addEventListener('scroll', lazyScroll);//Отслеживаем скролл
// function lazyScroll() {
// 	if (!loadMoreBlock.classList.contains('loading')) {//Если автоподгрузка еще не начата, то запускаем функцию
// 		LoadMore();
// 	}
// }
"use strict";

var diagnosticsSlider = document.querySelector('.diagnostics__slider');

if (diagnosticsSlider) {
  new Swiper('.diagnostics__slider', {
    watchOverflow: true,
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      480: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 87,
        pagination: false,
        navigation: {
          nextEl: '.reliability-next',
          prevEl: '.reliability-prev'
        }
      }
    }
  });
}
"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
}); //Инициализация WOW

var wow = new WOW({
  boxClass: 'wow',
  animateClass: 'animation'
});
wow.init();
var body = document.querySelector('body');
var header = document.querySelector('.header');
var footer = document.querySelector('.footer');
var btnTop = document.querySelector('.btn__top');
var social = document.querySelector('.portfolio__social');
var defaultOffset = 300;
var headerHeight = header.clientHeight;
var windowHeight = document.documentElement.clientHeight;
var footerHeight = footer.clientHeight;
var footerScroll = footer.offsetTop;
var prevScroll = window.pageYOffset;
var currentScroll;

var onScrollHeader = function onScrollHeader() {
  currentScroll = window.pageYOffset;
  var hidden = footerScroll - windowHeight < prevScroll;

  var headerHidden = function headerHidden() {
    return header.classList.contains('header-hidden');
  };

  if (currentScroll > 0) {
    header.classList.add('header-fill');
  } else {
    header.classList.remove('header-fill');
  }

  if (currentScroll > prevScroll && !headerHidden() && currentScroll > defaultOffset) {
    header.classList.add('header-hidden');
  }

  if (currentScroll < prevScroll) {
    if (hidden === true && !headerHidden()) {
      header.classList.add('header-hidden');
    }

    if (hidden === false && headerHidden()) {
      header.classList.remove('header-hidden');
    }
  }

  var btnHidden = function btnHidden() {
    return btnTop.classList.contains('btn-hidden');
  };

  if (currentScroll > prevScroll && !btnHidden()) {
    btnTop.classList.add('btn-hidden');
  }

  if (currentScroll < prevScroll) {
    if (hidden === true && !btnHidden()) {
      btnTop.classList.add('btn-hidden');
    }

    if (hidden === false && btnHidden()) {
      btnTop.classList.remove('btn-hidden');
    }
  }

  if (currentScroll <= 300 && !btnHidden()) {
    btnTop.classList.add('btn-hidden');
  }

  if (social) {
    var socialHidden = function socialHidden() {
      return social.classList.contains('social-hidden');
    };

    if (!socialHidden() && hidden === true) {
      social.classList.add('social-hidden');
    }

    if (socialHidden() && hidden === false) {
      social.classList.remove('social-hidden');
    }
  }

  prevScroll = currentScroll;
};

window.addEventListener('scroll', function () {
  onScrollHeader();
});
onScrollHeader(); //Слайдер Swiper tomography

var tomographyDiagnostics = document.querySelector('.tomography__diagnostics');

if (tomographyDiagnostics) {
  new Swiper('.tomography__diagnostics', {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      renderFraction: function renderFraction(currentClass) {
        return '0<span class="' + currentClass + '"></span>';
      }
    },
    navigation: {
      nextEl: '.tomography__button-next',
      prevEl: '.tomography__button-prev'
    },
    loop: true,
    observeParents: true,
    observer: true,
    speed: 300,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    on: {
      init: function init() {
        var progressBar = document.querySelector('.progress-bar');
        progressBar.classList.remove('animate');
        progressBar.classList.remove('active');
        progressBar.classList.add('animate');
        progressBar.classList.add('active');
      },
      slideChangeTransitionStart: function slideChangeTransitionStart() {
        var progressBar = document.querySelector('.progress-bar');
        progressBar.classList.remove('animate');
        progressBar.classList.remove('active');
        progressBar.classList.add('active');
      },
      slideChangeTransitionEnd: function slideChangeTransitionEnd() {
        var progressBar = document.querySelector('.progress-bar');
        progressBar.classList.add('animate');
      }
    }
  });
} //Слайдер Swiper diagnostics


var diagnosticsSlider = document.querySelector('.diagnostics__slider');

if (diagnosticsSlider) {
  new Swiper('.diagnostics__slider', {
    watchOverflow: true,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      480: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3,
        pagination: false
      }
    }
  });
} //Слайдер Swiper visiography


var visiographySwiper = new Swiper('.visiography__gallery', {
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar'
  },
  watchOverflow: true,
  observeParents: true,
  observer: true,
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    480: {
      spaceBetween: 27,
      slidesPerView: 2
    }
  }
}); //Слайдер Swiper diagnocam

var diagnocamSwiper = new Swiper('.diagnocam__gallery', {
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar'
  },
  watchOverflow: true,
  observeParents: true,
  observer: true,
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    480: {
      spaceBetween: 27,
      slidesPerView: 2
    }
  }
}); //Показываем Popup галерею слайдера tomography

var tomographyLink = document.querySelectorAll('.tomography__image');
var productsLink = document.querySelectorAll('.products__image');

var _iterator = _createForOfIteratorHelper(tomographyLink),
    _step;

try {
  var _loop = function _loop() {
    var tomographyLinkItem = _step.value;
    tomographyLinkItem.addEventListener('click', function (el) {
      el.preventDefault();

      var tomographyOpen = function tomographyOpen() {
        return tomographyLinkItem.closest('.tomography__modal').classList.contains('open');
      };

      if (window.innerWidth > 480 && !tomographyOpen()) {
        this.closest('.tomography__modal').classList.add('open');
        body.classList.add('open');
      }

      ;
    });
    document.addEventListener('click', function (e) {
      var tomographyOpen = function tomographyOpen() {
        return tomographyLinkItem.closest('.tomography__modal').classList.contains('open');
      };

      if (window.innerWidth > 480 && tomographyOpen()) {
        var target = e.target;

        if (!target.closest('.tomography__image') && !target.closest('.tomography__button-next') && !target.closest('.tomography__button-prev')) {
          body.classList.remove('open');
          tomographyLinkItem.closest('.tomography__modal').classList.remove('open');
        }

        ;
      }

      ;
    });
  };

  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

;

var _iterator2 = _createForOfIteratorHelper(productsLink),
    _step2;

try {
  var _loop2 = function _loop2() {
    var productsLinkItem = _step2.value;
    productsLinkItem.addEventListener('click', function (el) {
      el.preventDefault();

      var productsOpen = function productsOpen() {
        return productsLinkItem.closest('.products__modal').classList.contains('open');
      };

      if (window.innerWidth > 480 && !productsOpen()) {
        this.closest('.products__modal').classList.add('open');
        this.closest('.products__gallery').classList.add('open');
        body.classList.add('open');
        visiographySwiper.params.breakpoints[480].slidesPerView = 1;
        visiographySwiper.params.spaceBetween = 0;
        visiographySwiper.params.slidesPerView = 1;
        diagnocamSwiper.params.breakpoints[480].slidesPerView = 1;
        diagnocamSwiper.params.spaceBetween = 0;
        diagnocamSwiper.params.slidesPerView = 1;
        resultSwiper.init();
      }

      ;
    });
    document.addEventListener('click', function (e) {
      var target = e.target;

      var productsOpen = function productsOpen() {
        return productsLinkItem.closest('.products__modal').classList.contains('open');
      };

      if (window.innerWidth > 480 && productsOpen()) {
        if (!target.closest('.products__image') && !target.closest('.swiper-button-next') && !target.closest('.swiper-button-prev')) {
          body.classList.remove('open');
          productsLinkItem.closest('.products__modal').classList.remove('open');
          productsLinkItem.closest('.products__gallery').classList.remove('open');
          visiographySwiper.params.breakpoints[480].slidesPerView = 2;
          visiographySwiper.params.spaceBetween = 27;
          visiographySwiper.params.slidesPerView = 2;
          diagnocamSwiper.params.breakpoints[480].slidesPerView = 2;
          diagnocamSwiper.params.spaceBetween = 27;
          diagnocamSwiper.params.slidesPerView = 2;
          resultSwiper.destroy(false);
        }

        ;
      }

      ;
    });
  };

  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    _loop2();
  }
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}

; //Кнопка бургера

var menuBtn = document.querySelectorAll('.header__burger');
var menu = document.querySelector('.menu');

for (var i = 0; i < menuBtn.length; i++) {
  var menuBtnItem = menuBtn[i];
  menuBtnItem.addEventListener('click', function () {
    for (var _i = 0; _i < menuBtn.length; _i++) {
      var _menuBtnItem = menuBtn[_i];

      _menuBtnItem.classList.toggle('open');

      body.classList.toggle('open');
      menu.classList.toggle('open');
    }
  });
} //Скролл к якорям


var diagnosticsLink = document.querySelectorAll('.diagnostics__link');
var speed = .2;

var _iterator3 = _createForOfIteratorHelper(diagnosticsLink),
    _step3;

try {
  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
    var diagnosticsLinkItem = _step3.value;
    diagnosticsLinkItem.addEventListener('click', function (el) {
      el.preventDefault();
      var windowTop = window.pageYOffset;
      var id = this.getAttribute('href');
      var scrollTo = document.querySelector(id);
      var scrollSize = scrollTo.getBoundingClientRect().top;
      var start = null;
      requestAnimationFrame(step);

      function step(time) {
        if (start === null) start = time;
        var progress = time - start,
            r = scrollSize < 0 ? Math.max(windowTop - progress / speed, windowTop + scrollSize) : Math.min(windowTop + progress / speed, windowTop + scrollSize);
        window.scrollTo(0, r);

        if (r != windowTop + scrollSize) {
          requestAnimationFrame(step);
        } else {
          location.scrollTo = scrollTo;
        }
      }
    }, false);
  }
} catch (err) {
  _iterator3.e(err);
} finally {
  _iterator3.f();
}

; //Кнопки наверх

var btnTopFooter = document.querySelector('.footer__top-btn');
btnTop.addEventListener('click', function () {
  var windowTop = window.pageYOffset;
  var scrollTo = document.querySelector('.wrapper');
  var scrollSize = scrollTo.getBoundingClientRect().top - 121;
  var start = null;
  requestAnimationFrame(step);

  function step(time) {
    if (start === null) start = time;
    var progress = time - start,
        r = scrollSize < 0 ? Math.max(windowTop - progress / speed, windowTop + scrollSize) : Math.min(windowTop + progress / speed, windowTop + scrollSize);
    window.scrollTo(0, r);

    if (r != windowTop + scrollSize) {
      requestAnimationFrame(step);
    } else {
      location.scrollTo = scrollTo;
    }
  }
}, false);
btnTopFooter.addEventListener('click', function () {
  var windowTop = window.pageYOffset;
  var scrollTo = document.querySelector('.wrapper');
  var scrollSize = scrollTo.getBoundingClientRect().top - 121;
  var start = null;
  requestAnimationFrame(step);

  function step(time) {
    if (start === null) start = time;
    var progress = time - start,
        r = scrollSize < 0 ? Math.max(windowTop - progress / speed, windowTop + scrollSize) : Math.min(windowTop + progress / speed, windowTop + scrollSize);
    window.scrollTo(0, r);

    if (r != windowTop + scrollSize) {
      requestAnimationFrame(step);
    } else {
      location.scrollTo = scrollTo;
    }
  }
}, false); //Аккордион

var questionsLink = document.querySelectorAll('.questions__link');

var _iterator4 = _createForOfIteratorHelper(questionsLink),
    _step4;

try {
  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
    var questionsLinkItem = _step4.value;
    questionsLinkItem.addEventListener('click', function (el) {
      var _this = this;

      el.preventDefault();
      this.classList.toggle('open');

      var dropHidden = function dropHidden() {
        return _this.classList.contains('open');
      };

      if (dropHidden()) {
        this.nextElementSibling.style.height = this.nextElementSibling.scrollHeight + 'px';
        this.nextElementSibling.classList.add('open');
      } else {
        this.nextElementSibling.style.height = 0 + 'px';
        this.nextElementSibling.classList.remove('open');
      }
    });
  }
} catch (err) {
  _iterator4.e(err);
} finally {
  _iterator4.f();
}

;
"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var casesSwiper = new Swiper('.services-slider__gallery--cases', {
  watchOverflow: true,
  slidesPerView: 1,
  observeParents: true,
  observer: true,
  navigation: {
    nextEl: '.cases__next',
    prevEl: '.cases__prev'
  },
  pagination: {
    el: '.services-slider__pagination--cases',
    type: 'fraction'
  },
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  on: {
    init: function init() {
      var nextBtn = document.querySelector('.cases__next span');
      nextBtn.classList.remove('animate');
      nextBtn.classList.add('animate');
    },
    slideChangeTransitionStart: function slideChangeTransitionStart() {
      var nextBtn = document.querySelector('.cases__next span');
      nextBtn.classList.remove('animate');
    },
    slideChangeTransitionEnd: function slideChangeTransitionEnd() {
      var nextBtn = document.querySelector('.cases__next span');
      nextBtn.classList.add('animate');
    }
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
      pagination: {
        el: '.services-slider__pagination--cases',
        type: 'progressbar'
      }
    },
    1024: {
      spaceBetween: 15,
      slidesPerView: 3,
      pagination: {
        el: '.services-slider__pagination--cases',
        type: 'progressbar'
      }
    },
    1461: {
      spaceBetween: 56,
      slidesPerView: 3,
      pagination: {
        el: '.services-slider__pagination--cases',
        type: 'progressbar'
      }
    }
  }
});
var clientsSwiper = new Swiper('.clients__gallery', {
  watchOverflow: true,
  slidesPerView: 1,
  observeParents: true,
  observer: true,
  navigation: {
    nextEl: '.clients__next',
    prevEl: '.clients__prev'
  },
  pagination: {
    el: '.clients__pagination',
    type: 'fraction'
  },
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  },
  on: {
    init: function init() {
      var nextBtn = document.querySelector('.clients__next span');
      nextBtn.classList.remove('animate');
      nextBtn.classList.add('animate');
    },
    slideChangeTransitionStart: function slideChangeTransitionStart() {
      var nextBtn = document.querySelector('.clients__next span');
      nextBtn.classList.remove('animate');
    },
    slideChangeTransitionEnd: function slideChangeTransitionEnd() {
      var nextBtn = document.querySelector('.clients__next span');
      nextBtn.classList.add('animate');
    }
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
      pagination: {
        el: '.clients__pagination',
        type: 'progressbar'
      }
    },
    1024: {
      spaceBetween: 15,
      slidesPerView: 3,
      pagination: {
        el: '.clients__pagination',
        type: 'progressbar'
      }
    },
    1461: {
      spaceBetween: 56,
      slidesPerView: 3,
      pagination: {
        el: '.clients__pagination',
        type: 'progressbar'
      }
    }
  }
});
var popup = document.querySelectorAll('.popup-clients');
var popupLink = document.querySelectorAll('.clients__item');
var i = 0;

var _iterator = _createForOfIteratorHelper(popup),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var popupItem = _step.value;
    i++;
    popupItem.setAttribute('id', 'item-' + i);
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

;
var timer = null;

var _iterator2 = _createForOfIteratorHelper(popupLink),
    _step2;

try {
  var _loop = function _loop() {
    var popupLinkItem = _step2.value;
    popupLinkItem.addEventListener('mouseenter', function () {
      var _this = this;

      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(function () {
        _this.classList.add('open');

        var dataId = _this.getAttribute('data-id');

        var id = document.getElementById(dataId);
        id.classList.add('open');
        id.querySelector('video').play();
        body.classList.add('open');
      }, 4000);
    });
    popupLinkItem.addEventListener('mouseleave', function () {
      clearTimeout(timer);
    });
    popupLinkItem.addEventListener('click', function (el) {
      el.preventDefault();
      this.classList.add('open');
      var dataId = this.getAttribute('data-id');
      var id = document.getElementById(dataId);
      id.classList.add('open');
      id.querySelector('video').play();
      body.classList.add('open');
    });
    document.addEventListener('click', function (e) {
      var target = e.target;

      var swiperOpen = function swiperOpen() {
        return popupLinkItem.classList.contains('open');
      };

      if (swiperOpen()) {
        if (!target.closest('.clients__item') && !target.closest('.popup-clients__video')) {
          body.classList.remove('open');
          popupLinkItem.classList.remove('open');
          var dataId = popupLinkItem.getAttribute('data-id');
          var id = document.getElementById(dataId);
          id.classList.remove('open');
          id.querySelector('video').pause();
          id.querySelector('video').currentTime = 0;
        }
      }
    });
  };

  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    _loop();
  }
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}

;
var tomographyServices = document.querySelector('.tomography__services');

if (tomographyServices) {
  new Swiper('.tomography__services', {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      renderFraction: function renderFraction(currentClass) {
        return '0<span class="' + currentClass + '"></span>';
      }
    },
    navigation: {
      nextEl: '.tomography-button-next',
      prevEl: '.tomography-button-prev'
    },
    loop: true,
    observeParents: true,
    observer: true,
    speed: 300,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    on: {
      init: function init() {
        var progressBar = document.querySelector('.progress-bar');
        progressBar.classList.remove('animate');
        progressBar.classList.remove('active');
        progressBar.classList.add('animate');
        progressBar.classList.add('active');
      },
      slideChangeTransitionStart: function slideChangeTransitionStart() {
        var progressBar = document.querySelector('.progress-bar');
        progressBar.classList.remove('animate');
        progressBar.classList.remove('active');
        progressBar.classList.add('active');
      },
      slideChangeTransitionEnd: function slideChangeTransitionEnd() {
        var progressBar = document.querySelector('.progress-bar');
        progressBar.classList.add('animate');
      }
    }
  });
}
"use strict";

var casesSwiper = new Swiper('.services-slider__gallery--microscope', {
  watchOverflow: true,
  slidesPerView: 1,
  observeParents: true,
  observer: true,
  navigation: {
    nextEl: '.cases__next',
    prevEl: '.cases__prev'
  },
  pagination: {
    el: '.services-slider__pagination--microscope',
    type: 'fraction'
  },
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  on: {
    init: function init() {
      var nextBtn = document.querySelector('.cases__next span');
      nextBtn.classList.remove('animate');
      nextBtn.classList.add('animate');
    },
    slideChangeTransitionStart: function slideChangeTransitionStart() {
      var nextBtn = document.querySelector('.cases__next span');
      nextBtn.classList.remove('animate');
    },
    slideChangeTransitionEnd: function slideChangeTransitionEnd() {
      var nextBtn = document.querySelector('.cases__next span');
      nextBtn.classList.add('animate');
    }
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
      pagination: {
        el: '.services-slider__pagination--microscope',
        type: 'progressbar'
      }
    },
    1024: {
      spaceBetween: 15,
      slidesPerView: 3,
      pagination: {
        el: '.services-slider__pagination--microscope',
        type: 'progressbar'
      }
    },
    1461: {
      spaceBetween: 56,
      slidesPerView: 3,
      pagination: {
        el: '.services-slider__pagination--microscope',
        type: 'progressbar'
      }
    }
  }
});