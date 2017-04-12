;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-jinlingyingcaiwangtubiao50" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M963.8912 822.3744l-193.0752-227.3792c-3.3792-3.9936-8.2432-6.4256-13.4656-6.7328-5.0688-0.1792-10.3168 1.536-14.208 5.0688l-133.9136 123.9552c-127.1552-67.0208-242.6624-225.7152-270.4128-265.6256l74.0608-142.08c3.6608-7.0144 2.6368-15.5392-2.5856-21.504L217.216 67.0976C213.3504 62.6944 208.0768 60.3136 201.7792 60.5696c-5.8624 0.3072-11.264 3.2768-14.6688 8.0896l-139.4176 197.3504c-2.1504 3.0208-3.3536 6.6048-3.5072 10.3168-4.4544 111.3088 67.9168 244.0448 70.4256 248.5248C253.4912 821.5296 539.5712 939.9296 552.4992 945.152c52.3008 18.4064 103.1168 27.7248 151.0912 27.7248 176.128 0 258.3296-122.368 261.7344-127.5648C970.0096 838.1952 969.4208 828.8512 963.8912 822.3744zM703.5904 934.4768c-43.6224 0-90.1376-8.6016-137.5232-25.2416-2.816-1.1264-284.3648-118.016-417.2544-401.792-0.6912-1.2544-67.7632-124.416-66.4576-224.0256l122.0096-172.672 168.3712 192.6912-73.2928 140.6464c-3.2256 6.1696-2.8416 13.5936 0.9728 19.4048 5.8368 8.8576 144.2048 217.7024 303.7696 294.2208 7.0912 3.4048 15.5648 2.1504 21.3504-3.2256l128.9728-119.3984 170.112 200.2944C901.12 863.4368 829.184 934.4768 703.5904 934.4768z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-arrowdown" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M930.666 323.731c0 14.331-5.512 27.677-15.529 37.657l-365.99 365.34c-1.306 1.336-2.417 2.379-3.607 3.234l-2.723 2.16c-10.703 10.653-23.296 15.887-36.627 15.887-13.571 0-26.26-5.351-35.729-15.053l-363.953-367.853c-9.813-9.951-15.222-23.238-15.222-37.401 0-13.849 5.25-26.931 14.769-36.832 9.549-9.841 22.867-15.506 36.518-15.506 13.484 0 26.259 5.365 35.969 15.134l328.283 331.846 336.964-336.081c9.666-9.607 22.296-14.915 35.619-14.915 13.958 0 27.055 5.673 36.876 15.937 9.271 9.768 14.381 22.734 14.381 36.444z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-arrowleft" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M700.269 930.666c-14.331 0-27.677-5.512-37.657-15.529l-365.34-365.99c-1.337-1.306-2.38-2.417-3.234-3.607l-2.16-2.723c-10.653-10.703-15.888-23.296-15.888-36.627 0-13.571 5.351-26.26 15.053-35.73l367.853-363.953c9.951-9.813 23.238-15.222 37.401-15.222 13.848 0 26.931 5.25 36.832 14.769 9.841 9.549 15.507 22.867 15.506 36.518 0 13.484-5.365 26.259-15.134 35.969l-331.846 328.283 336.081 336.964c9.607 9.666 14.915 22.296 14.915 35.619 0 13.958-5.673 27.055-15.937 36.876-9.768 9.271-22.734 14.381-36.444 14.381z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-arrowright" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M323.731 93.334c14.331 0 27.677 5.512 37.657 15.529l365.34 365.99c1.337 1.306 2.38 2.417 3.234 3.607l2.16 2.723c10.653 10.703 15.888 23.296 15.888 36.627 0 13.571-5.351 26.26-15.053 35.73l-367.853 363.953c-9.951 9.813-23.238 15.222-37.401 15.222-13.848 0-26.931-5.25-36.832-14.769-9.841-9.549-15.507-22.867-15.506-36.518 0-13.484 5.365-26.259 15.134-35.969l331.846-328.283-336.081-336.964c-9.607-9.666-14.915-22.296-14.915-35.619 0-13.958 5.673-27.055 15.937-36.876 9.768-9.271 22.734-14.381 36.444-14.381z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-arrowup" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M93.334 700.269c0-14.331 5.512-27.677 15.529-37.657l365.99-365.34c1.306-1.337 2.417-2.38 3.607-3.234l2.723-2.16c10.703-10.653 23.296-15.888 36.627-15.888 13.571 0 26.26 5.351 35.73 15.053l363.953 367.853c9.813 9.951 15.222 23.238 15.222 37.401 0 13.848-5.25 26.931-14.769 36.832-9.549 9.841-22.867 15.507-36.518 15.506-13.484 0-26.259-5.365-35.969-15.134l-328.283-331.846-336.964 336.081c-9.666 9.607-22.296 14.915-35.619 14.915-13.958 0-27.055-5.673-36.876-15.937-9.271-9.768-14.381-22.734-14.381-36.444z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sousuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M991.418182 972.8L791.272727 772.654545c79.127273-83.781818 130.327273-195.490909 130.327273-316.50909 0-251.345455-200.145455-451.490909-446.836364-451.49091C232.727273 0 32.581818 204.8 32.581818 451.490909s200.145455 451.490909 446.836364 451.490909c97.745455 0 190.836364-32.581818 265.309091-88.436363l200.145454 204.8 46.545455-46.545455zM102.4 451.490909c0-209.454545 167.563636-381.672727 377.018182-381.672727s377.018182 172.218182 377.018182 381.672727-172.218182 386.327273-381.672728 386.327273c-204.8 0-372.363636-172.218182-372.363636-386.327273z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gouwuche" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M269.963636 893.672727m-60.509091 0a60.509091 60.509091 0 1 0 121.018182 0 60.509091 60.509091 0 1 0-121.018182 0Z"  ></path>' +
    '' +
    '<path d="M805.236364 893.672727m-60.509091 0a60.509091 60.509091 0 1 0 121.018182 0 60.509091 60.509091 0 1 0-121.018182 0Z"  ></path>' +
    '' +
    '<path d="M968.145455 237.381818c-4.654545-9.309091-13.963636-13.963636-27.927273-13.963636H204.8l-13.963636-144.290909C186.181818 60.509091 172.218182 46.545455 158.254545 46.545455H46.545455v69.818181h79.127272l69.818182 637.672728c0 18.618182 18.618182 32.581818 32.581818 32.581818h642.327273c18.618182 0 32.581818-13.963636 32.581818-27.927273L977.454545 265.309091c0-9.309091 0-18.618182-9.30909-27.927273zM837.818182 716.8H256l-46.545455-423.563636h693.527273L837.818182 716.8z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)