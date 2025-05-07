console.log('TWEET CHECKER EXERCISE');

let tweet=prompt('PLEASE! type your tweet here.');
if(tweet.length<=140)
{
    console.log(`That ${tweet.length} cahr tweet will work!`);
}
else{
    console.log(`your ${tweet.length} char tweet is ${tweet.length - 140} char too long`);
    
}
