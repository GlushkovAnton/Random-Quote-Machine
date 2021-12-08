const projectName = 'random-quote-machine';
let quotesData;


var colors = [
'#16a085',
'#27ae60',
'#2c3e50',
'#f39c12',
'#e74c3c',
'#9b59b6',
'#FB6964',
'#342224',
'#472E32',
'#BDBB99',
'#77B1A9',
'#73A857'];

var currentQuote = '',
currentAuthor = '';

function getQuotes() {
  quotesData = [
{quote: 'Life isn’t about getting and having, it’s about giving and being.', author: 'Kevin Kruse'},
{quote: 'Whatever the mind of man can conceive and believe, it can achieve.', author: 'Napoleon Hill'},
{quote: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
{quote: 'Two roads diverged in a wood, and I—I took the one…raveled by, And that has made all the difference.', author: 'Robert Frost'},
{quote: 'I attribute my success to this: I never gave or took any excuse.', author: 'Florence Nightingale'},
{quote: 'You miss 100% of the shots you don’t take.', author: 'Wayne Gretzky'},
{quote: 'I’ve missed more than 9000 shots in my career. I’v…over again in my life. And that is why I succeed.', author: 'Michael Jordan'},
{quote: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'}
];
console.log(quotesData);
return quotesData;

}



function getRandomQuote() {
  return quotesData[Math.floor(Math.random() * quotesData.length)];

}

function getQuote() {
  let randomQuote = getRandomQuote();

  currentQuote = randomQuote.quote;
  currentAuthor = randomQuote.author;

  $('#tweet-quote').attr(
  'href',
  'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
  encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));

  
  $('.quote-text').animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    $('#text').text(randomQuote.quote);
  });

  $('.quote-author').animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    $('#author').html(randomQuote.author);
  });

  var color = Math.floor(Math.random() * colors.length);
  $('html body').animate(
  {
    backgroundColor: colors[color],
    color: colors[color] },

  800);

  $('.button').animate(
  {
    backgroundColor: colors[color] },

  1800);

}

$(document).ready(function () {
  getQuotes(),getQuote();

  $('#new-quote').on('click', getQuote);
});