// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"stripe/client/css/global.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"stripe/client/css/index.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"stripe/client/css/normalize.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"stripe/client/script.js":[function(require,module,exports) {
var __dirname = "/Users/chemenda/Desktop/getpitchtank/stripe/client";
"use strict";

require("./css/global.css");

require("./css/index.css");

require("./css/normalize.css");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var stripe, customer, price, card;
var priceInfo = {
  basic: {
    amount: '500',
    name: 'Basic',
    interval: 'monthly',
    currency: 'USD'
  },
  premium: {
    amount: '1500',
    name: 'Premium',
    interval: 'monthly',
    currency: 'USD'
  }
};

function stripeElements(publishableKey) {
  stripe = Stripe(publishableKey);

  if (document.getElementById('card-element')) {
    var elements = stripe.elements(); // Card Element styles

    var style = {
      base: {
        fontSize: '16px',
        color: '#32325d',
        fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
        fontSmoothing: 'antialiased',
        '::placeholder': {
          color: '#a0aec0'
        }
      }
    };
    card = elements.create('card', {
      style: style
    });
    card.mount('#card-element');
    card.on('focus', function () {
      var el = document.getElementById('card-element-errors');
      el.classList.add('focused');
    });
    card.on('blur', function () {
      var el = document.getElementById('card-element-errors');
      el.classList.remove('focused');
    });
    card.on('change', function (event) {
      displayError(event);
    });
  }

  var signupForm = document.getElementById('signup-form');

  if (signupForm) {
    signupForm.addEventListener('submit', function (evt) {
      evt.preventDefault();
      changeLoadingState(true); // Create customer

      createCustomer().then(function (result) {
        customer = result.customer;
        console.log('aaa');
        console.log(__dirname); //window.location.href = '/prices.html?customerId=' + customer.id; c'était là avant 

        window.location.href = './prices.html';
      });
    });
  }

  var paymentForm = document.getElementById('payment-form');

  if (paymentForm) {
    paymentForm.addEventListener('submit', function (evt) {
      evt.preventDefault();
      changeLoadingStatePrices(true); // If a previous payment was attempted, get the lastest invoice

      var latestInvoicePaymentIntentStatus = localStorage.getItem('latestInvoicePaymentIntentStatus');

      if (latestInvoicePaymentIntentStatus === 'requires_payment_method') {
        var invoiceId = localStorage.getItem('latestInvoiceId');
        var isPaymentRetry = true; // create new payment method & retry payment on invoice with new payment method

        createPaymentMethod({
          card: card,
          isPaymentRetry: isPaymentRetry,
          invoiceId: invoiceId
        });
      } else {
        // create new payment method & create subscription
        createPaymentMethod({
          card: card
        });
      }
    });
  }
}

function displayError(event) {
  changeLoadingStatePrices(false);
  var displayError = document.getElementById('card-element-errors');

  if (event.error) {
    displayError.textContent = event.error.message;
  } else {
    displayError.textContent = '';
  }
}

function createPaymentMethod(_ref) {
  var card = _ref.card,
      isPaymentRetry = _ref.isPaymentRetry,
      invoiceId = _ref.invoiceId;
  var params = new URLSearchParams(document.location.search.substring(1));
  var customerId = params.get('customerId'); // Set up payment method for recurring usage

  var billingName = document.querySelector('#name').value;
  var priceId = document.getElementById('priceId').innerHTML.toUpperCase();
  stripe.createPaymentMethod({
    type: 'card',
    card: card,
    billing_details: {
      name: billingName
    }
  }).then(function (result) {
    if (result.error) {
      displayError(result);
    } else {
      if (isPaymentRetry) {
        // Update the payment method and retry invoice payment
        retryInvoiceWithNewPaymentMethod({
          customerId: customerId,
          paymentMethodId: result.paymentMethod.id,
          invoiceId: invoiceId,
          priceId: priceId
        });
      } else {
        // Create the subscription
        createSubscription({
          customerId: customerId,
          paymentMethodId: result.paymentMethod.id,
          priceId: priceId
        });
      }
    }
  });
}

function goToPaymentPage(priceId) {
  // Show the payment screen
  document.querySelector('#payment-form').classList.remove('hidden');
  document.getElementById('total-due-now').innerText = getFormattedAmount(priceInfo[priceId].amount); // Add the price selected

  document.getElementById('price-selected').innerHTML = '→ Subscribing to ' + '<span id="priceId" class="font-bold">' + priceInfo[priceId].name + '</span>'; // Show which price the user selected

  if (priceId === 'premium') {
    document.querySelector('#submit-premium-button-text').innerText = 'Selected';
    document.querySelector('#submit-basic-button-text').innerText = 'Select';
  } else {
    document.querySelector('#submit-premium-button-text').innerText = 'Select';
    document.querySelector('#submit-basic-button-text').innerText = 'Selected';
  } // Update the border to show which price is selected


  changePriceSelection(priceId);
}

function changePrice() {
  demoChangePrice();
}

function switchPrices(newPriceIdSelected) {
  var params = new URLSearchParams(document.location.search.substring(1));
  var currentSubscribedpriceId = params.get('priceId');
  var customerId = params.get('customerId');
  var subscriptionId = params.get('subscriptionId'); // Update the border to show which price is selected

  changePriceSelection(newPriceIdSelected);
  changeLoadingStatePrices(true); // Retrieve the upcoming invoice to display details about
  // the price change

  retrieveUpcomingInvoice(customerId, subscriptionId, newPriceIdSelected).then(function (upcomingInvoice) {
    // Change the price details for price upgrade/downgrade
    // calculate if it's upgrade or downgrade
    document.getElementById('current-price-subscribed').innerHTML = capitalizeFirstLetter(currentSubscribedpriceId);
    document.getElementById('new-price-selected').innerText = capitalizeFirstLetter(newPriceIdSelected);
    document.getElementById('new-price-price-selected').innerText = '$' + upcomingInvoice.amount_due / 100;
    var nextPaymentAttemptDateToDisplay = getDateStringFromUnixTimestamp(upcomingInvoice.next_payment_attempt);
    document.getElementById('new-price-start-date').innerHTML = nextPaymentAttemptDateToDisplay;
    changeLoadingStatePrices(false);
  });

  if (currentSubscribedpriceId != newPriceIdSelected) {
    document.querySelector('#price-change-form').classList.remove('hidden');
  } else {
    document.querySelector('#price-change-form').classList.add('hidden');
  }
}

function confirmPriceChange() {
  var params = new URLSearchParams(document.location.search.substring(1));
  var subscriptionId = params.get('subscriptionId');
  var newPriceId = document.getElementById('new-price-selected').innerHTML;
  updateSubscription(newPriceId.toUpperCase(), subscriptionId).then(function (result) {
    var searchParams = new URLSearchParams(window.location.search);
    searchParams.set('priceId', newPriceId.toUpperCase());
    searchParams.set('priceHasChanged', true);
    window.location.search = searchParams.toString();
  });
}

function createCustomer() {
  var billingEmail = document.querySelector('#email').value;
  return fetch('/create-customer', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: billingEmail
    })
  }).then(function (response) {
    return response.json();
  }).then(function (result) {
    return result;
  });
}

function handleCustomerActionRequired(_ref2) {
  var subscription = _ref2.subscription,
      invoice = _ref2.invoice,
      priceId = _ref2.priceId,
      paymentMethodId = _ref2.paymentMethodId,
      isRetry = _ref2.isRetry;

  if (subscription && subscription.status === 'active') {
    // subscription is active, no customer actions required.
    return {
      subscription: subscription,
      priceId: priceId,
      paymentMethodId: paymentMethodId
    };
  } // If it's a first payment attempt, the payment intent is on the subscription latest invoice.
  // If it's a retry, the payment intent will be on the invoice itself.


  var paymentIntent = invoice ? invoice.payment_intent : subscription.latest_invoice.payment_intent;

  if (paymentIntent.status === 'requires_action' || isRetry === true && paymentIntent.status === 'requires_payment_method') {
    return stripe.confirmCardPayment(paymentIntent.client_secret, {
      payment_method: paymentMethodId
    }).then(function (result) {
      if (result.error) {
        // start code flow to handle updating the payment details
        // Display error message in your UI.
        // The card was declined (i.e. insufficient funds, card has expired, etc)
        throw result;
      } else {
        if (result.paymentIntent.status === 'succeeded') {
          // There's a risk of the customer closing the window before callback
          // execution. To handle this case, set up a webhook endpoint and
          // listen to invoice.payment_succeeded. This webhook endpoint
          // returns an Invoice.
          return {
            priceId: priceId,
            subscription: subscription,
            invoice: invoice,
            paymentMethodId: paymentMethodId
          };
        }
      }
    });
  } else {
    // No customer action needed
    return {
      subscription: subscription,
      priceId: priceId,
      paymentMethodId: paymentMethodId
    };
  }
}

function handlePaymentMethodRequired(_ref3) {
  var subscription = _ref3.subscription,
      paymentMethodId = _ref3.paymentMethodId,
      priceId = _ref3.priceId;

  if (subscription.status === 'active') {
    // subscription is active, no customer actions required.
    return {
      subscription: subscription,
      priceId: priceId,
      paymentMethodId: paymentMethodId
    };
  } else if (subscription.latest_invoice.payment_intent.status === 'requires_payment_method') {
    // Using localStorage to store the state of the retry here
    // (feel free to replace with what you prefer)
    // Store the latest invoice ID and status
    localStorage.setItem('latestInvoiceId', subscription.latest_invoice.id);
    localStorage.setItem('latestInvoicePaymentIntentStatus', subscription.latest_invoice.payment_intent.status);
    throw {
      error: {
        message: 'Your card was declined.'
      }
    };
  } else {
    return {
      subscription: subscription,
      priceId: priceId,
      paymentMethodId: paymentMethodId
    };
  }
}

function onSubscriptionComplete(result) {
  console.log(result); // Payment was successful. Provision access to your service.
  // Remove invoice from localstorage because payment is now complete.

  clearCache(); // Change your UI to show a success message to your customer.

  onSubscriptionSampleDemoComplete(result); // Call your backend to grant access to your service based on
  // the product your customer subscribed to.
  // Get the product by using result.subscription.price.product
}

function createSubscription(_ref4) {
  var customerId = _ref4.customerId,
      paymentMethodId = _ref4.paymentMethodId,
      priceId = _ref4.priceId;
  return fetch('/create-subscription', {
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      customerId: customerId,
      paymentMethodId: paymentMethodId,
      priceId: priceId
    })
  }).then(function (response) {
    return response.json();
  }) // If the card is declined, display an error to the user.
  .then(function (result) {
    if (result.error) {
      // The card had an error when trying to attach it to a customer
      throw result;
    }

    return result;
  }) // Normalize the result to contain the object returned
  // by Stripe. Add the addional details we need.
  .then(function (result) {
    return {
      // Use the Stripe 'object' property on the
      // returned result to understand what object is returned.
      subscription: result,
      paymentMethodId: paymentMethodId,
      priceId: priceId
    };
  }) // Some payment methods require a customer to do additional
  // authentication with their financial institution.
  // Eg: 2FA for cards.
  .then(handleCustomerActionRequired) // If attaching this card to a Customer object succeeds,
  // but attempts to charge the customer fail. You will
  // get a requires_payment_method error.
  .then(handlePaymentMethodRequired) // No more actions required. Provision your service for the user.
  .then(onSubscriptionComplete).catch(function (error) {
    // An error has happened. Display the failure to the user here.
    // We utilize the HTML element we created.
    displayError(error);
  });
}

function retryInvoiceWithNewPaymentMethod(_ref5) {
  var customerId = _ref5.customerId,
      paymentMethodId = _ref5.paymentMethodId,
      invoiceId = _ref5.invoiceId,
      priceId = _ref5.priceId;
  return fetch('/retry-invoice', {
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      customerId: customerId,
      paymentMethodId: paymentMethodId,
      invoiceId: invoiceId
    })
  }).then(function (response) {
    return response.json();
  }) // If the card is declined, display an error to the user.
  .then(function (result) {
    if (result.error) {
      // The card had an error when trying to attach it to a customer
      throw result;
    }

    return result;
  }) // Normalize the result to contain the object returned
  // by Stripe. Add the addional details we need.
  .then(function (result) {
    return {
      // Use the Stripe 'object' property on the
      // returned result to understand what object is returned.
      invoice: result,
      paymentMethodId: paymentMethodId,
      priceId: priceId,
      isRetry: true
    };
  }) // Some payment methods require a customer to be on session
  // to complete the payment process. Check the status of the
  // payment intent to handle these actions.
  .then(handleCustomerActionRequired) // No more actions required. Provision your service for the user.
  .then(onSubscriptionComplete).catch(function (error) {
    // An error has happened. Display the failure to the user here.
    // We utilize the HTML element we created.
    displayError(error);
  });
}

function retrieveUpcomingInvoice(customerId, subscriptionId, newPriceId) {
  return fetch('/retrieve-upcoming-invoice', {
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      customerId: customerId,
      subscriptionId: subscriptionId,
      newPriceId: newPriceId
    })
  }).then(function (response) {
    return response.json();
  }).then(function (invoice) {
    return invoice;
  });
}

function cancelSubscription() {
  changeLoadingStatePrices(true);
  var params = new URLSearchParams(document.location.search.substring(1));
  var subscriptionId = params.get('subscriptionId');
  return fetch('/cancel-subscription', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      subscriptionId: subscriptionId
    })
  }).then(function (response) {
    return response.json();
  }).then(function (cancelSubscriptionResponse) {
    return subscriptionCancelled(cancelSubscriptionResponse);
  });
}

function updateSubscription(priceId, subscriptionId) {
  return fetch('/update-subscription', {
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      subscriptionId: subscriptionId,
      newPriceId: priceId
    })
  }).then(function (response) {
    return response.json();
  }).then(function (response) {
    return response;
  });
}

function retrieveCustomerPaymentMethod(paymentMethodId) {
  return fetch('/retrieve-customer-payment-method', {
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      paymentMethodId: paymentMethodId
    })
  }).then(function (response) {
    return response.json();
  }).then(function (response) {
    return response;
  });
}

function getConfig() {
  return fetch('/config', {
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(function (response) {
    return response.json();
  }).then(function (response) {
    // Set up Stripe Elements
    stripeElements(response.publishableKey);
  });
}

getConfig();
/* ------ Sample helpers ------- */

function getFormattedAmount(amount) {
  // Format price details and detect zero decimal currencies
  var amount = amount;
  var numberFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'symbol'
  });
  var parts = numberFormat.formatToParts(amount);
  var zeroDecimalCurrency = true;

  var _iterator = _createForOfIteratorHelper(parts),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var part = _step.value;

      if (part.type === 'decimal') {
        zeroDecimalCurrency = false;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  amount = zeroDecimalCurrency ? amount : amount / 100;
  var formattedAmount = numberFormat.format(amount);
  return formattedAmount;
}

function capitalizeFirstLetter(string) {
  var tempString = string.toLowerCase();
  return tempString.charAt(0).toUpperCase() + tempString.slice(1);
}

function getDateStringFromUnixTimestamp(date) {
  var nextPaymentAttemptDate = new Date(date * 1000);
  var day = nextPaymentAttemptDate.getDate();
  var month = nextPaymentAttemptDate.getMonth() + 1;
  var year = nextPaymentAttemptDate.getFullYear();
  return month + '/' + day + '/' + year;
} // For demo purpose only


function getCustomersPaymentMethod() {
  var params = new URLSearchParams(document.location.search.substring(1));
  var paymentMethodId = params.get('paymentMethodId');

  if (paymentMethodId) {
    retrieveCustomerPaymentMethod(paymentMethodId).then(function (response) {
      document.getElementById('credit-card-last-four').innerText = capitalizeFirstLetter(response.card.brand) + ' •••• ' + response.card.last4;
      document.getElementById('subscribed-price').innerText = capitalizeFirstLetter(params.get('priceId'));
    });
  }
}

getCustomersPaymentMethod(); // Shows the cancellation response

function subscriptionCancelled() {
  document.querySelector('#subscription-cancelled').classList.remove('hidden');
  document.querySelector('#subscription-settings').classList.add('hidden');
}
/* Shows a success / error message when the payment is complete */


function onSubscriptionSampleDemoComplete(_ref6) {
  var priceId = _ref6.priceId,
      subscription = _ref6.subscription,
      paymentMethodId = _ref6.paymentMethodId,
      invoice = _ref6.invoice;
  var subscriptionId;
  var currentPeriodEnd;
  var customerId;

  if (subscription) {
    subscriptionId = subscription.id;
    currentPeriodEnd = subscription.current_period_end;

    if (_typeof(subscription.customer) === 'object') {
      customerId = subscription.customer.id;
    } else {
      customerId = subscription.customer;
    }
  } else {
    var params = new URLSearchParams(document.location.search.substring(1));
    subscriptionId = invoice.subscription;
    currentPeriodEnd = params.get('currentPeriodEnd');
    customerId = invoice.customer;
  }

  window.location.href = '/account.html?subscriptionId=' + subscriptionId + '&priceId=' + priceId + '&currentPeriodEnd=' + currentPeriodEnd + '&customerId=' + customerId + '&paymentMethodId=' + paymentMethodId;
}

function demoChangePrice() {
  document.querySelector('#basic').classList.remove('border-pasha');
  document.querySelector('#premium').classList.remove('border-pasha');
  document.querySelector('#price-change-form').classList.add('hidden'); // Grab the priceId from the URL
  // This is meant for the demo, replace with a cache or database.

  var params = new URLSearchParams(document.location.search.substring(1));
  var priceId = params.get('priceId').toLowerCase(); // Show the change price screen

  document.querySelector('#prices-form').classList.remove('hidden');
  document.querySelector('#' + priceId.toLowerCase()).classList.add('border-pasha');
  var elements = document.querySelectorAll('#submit-' + priceId + '-button-text');

  for (var i = 0; i < elements.length; i++) {
    elements[0].childNodes[3].innerText = 'Current';
  }

  if (priceId === 'premium') {
    document.getElementById('submit-premium').disabled = true;
    document.getElementById('submit-basic').disabled = false;
  } else {
    document.getElementById('submit-premium').disabled = false;
    document.getElementById('submit-basic').disabled = true;
  }
} // Changes the price selected


function changePriceSelection(priceId) {
  document.querySelector('#basic').classList.remove('border-pasha');
  document.querySelector('#premium').classList.remove('border-pasha');
  document.querySelector('#' + priceId.toLowerCase()).classList.add('border-pasha');
} // Show a spinner on subscription submission


function changeLoadingState(isLoading) {
  if (isLoading) {
    document.querySelector('#button-text').classList.add('hidden');
    document.querySelector('#loading').classList.remove('hidden');
    document.querySelector('#signup-form button').disabled = true;
  } else {
    document.querySelector('#button-text').classList.remove('hidden');
    document.querySelector('#loading').classList.add('hidden');
    document.querySelector('#signup-form button').disabled = false;
  }
} // Show a spinner on subscription submission


function changeLoadingStatePrices(isLoading) {
  console.log(isLoading);

  if (isLoading) {
    document.querySelector('#button-text').classList.add('hidden');
    document.querySelector('#loading').classList.remove('hidden');
    document.querySelector('#submit-basic').classList.add('invisible');
    document.querySelector('#submit-premium').classList.add('invisible');

    if (document.getElementById('confirm-price-change-cancel')) {
      document.getElementById('confirm-price-change-cancel').classList.add('invisible');
    }
  } else {
    document.querySelector('#button-text').classList.remove('hidden');
    document.querySelector('#loading').classList.add('hidden');
    document.querySelector('#submit-basic').classList.remove('invisible');
    document.querySelector('#submit-premium').classList.remove('invisible');

    if (document.getElementById('confirm-price-change-cancel')) {
      document.getElementById('confirm-price-change-cancel').classList.remove('invisible');
      document.getElementById('confirm-price-change-submit').classList.remove('invisible');
    }
  }
}

function clearCache() {
  localStorage.clear();
}

function resetDemo() {
  /* clearCache();
  window.location.href = '/'; */
  window.location.href = '/realBattleCards';
}
},{"./css/global.css":"stripe/client/css/global.css","./css/index.css":"stripe/client/css/index.css","./css/normalize.css":"stripe/client/css/normalize.css"}],"../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51459" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","stripe/client/script.js"], null)
//# sourceMappingURL=/script.fd59f6b3.js.map