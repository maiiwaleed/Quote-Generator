
var arr=[
    {writer:'-- Oscar Wilde', quote:'Be yourself; everyone else is already taken.'},
    {writer:'-- Marilyn Monroe', quote:'I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.'},
    {writer:'-- Albert Einstein', quote:'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.'},
    {writer:'-- Frank Zappa', quote:'So many books, so little time.'},
    {writer:'-- Marcus Tullius Cicero', quote:'A room without books is like a body without a soul.'},
    {writer:'-- Bernard M. Baruch', quote:'Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.'},
    {writer:'-- William W. Purkey', quote:'You\'ve gotta dance like there\'s nobody watching,Love like you\'ll never be hurt,Sing like there\'s nobody listening,And live like it\'s heaven on earth.'},
    {writer:'-- Dr. Seuss', quote:'You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.'},
    {writer:'-- Mae West', quote:'You only live once, but if you do it right, once is enough.'},
    {writer:'-- Mahatma Gandhi', quote:'Be the change that you wish to see in the world.'},
    {writer:'-- Robert Frost', quote:'In three words I can sum up everything I\'ve learned about life: it goes on.'},
    {writer:'-- J.K. Rowling, Harry Potter and the Goblet of Fire', quote:'If you want to know what a man\'s like, take a good look at how he treats his inferiors, not his equals.'}
];




function rand(){
 var x=Math.floor(Math.random()*(arr.length + 1));
 document.getElementById('quote').innerHTML=arr[x].quote;

 document.getElementById('writer').innerHTML=arr[x].writer;
}

