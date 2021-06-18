const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'help', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://1.bp.blogspot.com/-MP9m28jeB2o/YKIYiztzvyI/AAAAAAAABXo/P6aXxlQWQv8LNSP6SnCLu7Fa9wkZKpZzACLcBGAsYHQ/s1280/annicon%2Bicons%2Band%2Bheaders.jpeg";
    r_text[1] = "https://1.bp.blogspot.com/-tqx8vh7ZVpc/YKIYi-Y5wLI/AAAAAAAABXw/8qTqoe8ttJMNW-JHvgDZcC904bD48MS8wCLcBGAsYHQ/s750/x%2Bnot%2Bmine%2Bx%2B%2Bshared%2Bby%2B%25EC%2586%259C%25EC%2582%25AC%25ED%2583%2595%2Bon%2BWe%2BHeart%2BIt.jpeg";
    r_text[2] = "https://1.bp.blogspot.com/-fDjuLKa-xTE/YKIYi7wCnmI/AAAAAAAABXs/aBxO3MbIpvQAFT3uG24fW7PR_4jfH6VeACLcBGAsYHQ/s604/%25D0%259A%25D0%25BE%25D0%25BC%25D0%25B0%25D0%25BD%25D0%25B4%25D0%25B0%2B%25E2%2584%25967.jpeg";
    r_text[3] = "https://1.bp.blogspot.com/-rl4FCHMLV2s/YKIYjxjMboI/AAAAAAAABX0/z0XsnWdHshsICQpGGva54AQCbVene4XIACLcBGAsYHQ/s600/%25E3%258D%25BF%25EF%25A1%2580%2B%25F0%259D%2598%25AC%25F0%259D%2598%25AF%25F0%259D%2598%25BA%2B%25F0%259D%2598%25A9%25F0%259D%2598%25A6%25F0%259D%2598%25A2%25F0%259D%2598%25A5%25F0%259D%2598%25A6%25F0%259D%2598%25B3%2B%25E2%25A0%2580%25F0%2596%25A3%2598.jpeg";
    r_text[4] = "https://1.bp.blogspot.com/-FhXQw33e8nU/YKIYkxg-1NI/AAAAAAAABX4/GcNVk8eDauUBNjbxnF2ApFq3eDgJgABFQCLcBGAsYHQ/s1500/%25EC%2586%258C%25EC%259D%2580%2Bon%2BTwitter.jpeg";
    r_text[5] = "https://1.bp.blogspot.com/-CilVPISVDT8/YKIYk5Rv9OI/AAAAAAAABX8/O7W2sn1r354iI3MzfORKHojMuCMq-mnHQCLcBGAsYHQ/s1500/%25F0%259F%25A6%258B%2Bon%2BTwitter.jpeg";
    
    var i = Math.floor(6*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `⛦━━━━━💮❪𝐇𝐞𝐥𝐩❫💮━━━━━⛦


𝐇𝐞𝐥𝐥𝐨👋 𝐈 𝐚𝐦 𝐚 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐛𝐨𝐭.
𝐌𝐲 𝐩𝐫𝐞𝐟𝐢𝐱 𝐢𝐬 (-)

■□■□■□■□■□■□■□■□■□■□
♕ *𝙈𝙚𝙙𝙞𝙖 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨* ♕

💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -song <text>
🍙𝙐𝙨𝙚➜ Downloads song for you.

💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -video <yt link>
🍙𝙐𝙨𝙚➜ Downloads video from YouTube link.

💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -profinsta<username>
🍙𝙐𝙨𝙚➜ Shows the ig profile of the person.
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -insta <link>
🍙𝙐𝙨𝙚➜   Downloads content from instagram.

💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -yt<text>
🍙𝙐𝙨𝙚➜   Gives you YT links.

💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -show <show name>
🍙𝙐𝙨𝙚➜   Get info related to tv series and shows.

💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -gif 
🍙𝙐𝙨𝙚➜ Converts video to gif.

💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -tomp3 
🍙𝙐𝙨𝙚➜ Converts video into audio.

💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -say <text>
🍙𝙐𝙨𝙚➜ Converts text into voice.

💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -img <text>
🍙𝙐𝙨𝙚➜ It sends image from google.

💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -trt <language code>
🍙𝙐𝙨𝙚➜ Translate the text you tag.

💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -wiki <text>
🍙𝙐𝙨𝙚➜ It sends Wikipedia result.

💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -lyric <text>
🍙𝙐𝙨𝙚➜ Finds the lyrics of the song.

💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -covid <country code>
🍙𝙐𝙨𝙚➜ Send the covid stats of your country.

💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -weather <city>
🍙𝙐𝙨𝙚➜ Tells you about the weather of your place.

💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -removebg 
🍙𝙐𝙨𝙚➜ Removes the background of tge image.

💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -ocr
🍙𝙐𝙨𝙚➜ Finds the text written on the image.

💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -wallpaper
🍙𝙐𝙨𝙚➜ It sends you random wallpaper.

■□■□■□■□■□■□■□■□■□■□
♟ *𝙁𝙪𝙣 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨* ♟

💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -joke 
🍙𝙐𝙨𝙚➜ It sends a random joke.

💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -bot 
🍙𝙐𝙨𝙚➜ Chat with ai bot simsimi.
 
💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -meme <text>
🍙𝙐𝙨𝙚➜ Cations the image into a meme.

💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -quote 
🍙𝙐𝙨𝙚➜ It sends a random quote.

💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -ss <website link>
🍙𝙐𝙨𝙚➜ It sends the screenshot of the website.

💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -changesay <text>
🍙𝙐𝙨𝙚➜ Converts text into changesay meme image.

💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -trumpsay
🍙𝙐𝙨𝙚➜ Convert text into Trump's tweet.

💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -compliment 
🍙𝙐𝙨𝙚➜ Gives you a compliment.

💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -bitly <link>
🍙𝙐𝙨𝙚➜   Shorten your link.

💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -dict 
🍙𝙐𝙨𝙚➜   Dictionary [-dict en;anime]

💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -zodiac <leo> 
🍙𝙐𝙨𝙚➜   Tells you about your horoscope.

💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -qr <text>
🍙𝙐𝙨𝙚➜   Converts text into qr code.

💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -movie 
🍙𝙐𝙨𝙚➜  Gives you info about movie.

💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -anime <text>
🍙𝙐𝙨𝙚➜  Gives you info about anime.
■□■□■□■□■□■□■□■□■□■□
♝ *𝙎𝙩𝙞𝙘𝙠𝙚𝙧 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨* ♝

💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -sticker 
🍙𝙐𝙨𝙚➜ Converts img/gif into a sticker.

💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -stk 
🍙𝙐𝙨𝙚➜ Converts img/gif into a square sticker.

💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -imagesticker 
🍙𝙐𝙨𝙚➜ Converts sticker into image.

💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -attp <text>
🍙𝙐𝙨𝙚➜ Converts text into glowing sticker.
■□■□■□■□■□■□■□■□■□■□

💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -blackpink
🍙𝙐𝙨𝙚➜  Sends random blackpink image.

💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -exo 
🍙𝙐𝙨𝙚➜  Sends random exo image.

💮𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -bts 
🍙𝙐𝙨𝙚➜  Sends random bts image.

▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣

`}) 

}));
