we connect db ---> db kai folder kai under he connect kr diya.



video 9 start here
start user and video model with hooks and JWT


step:1 In models/ create user.model.js and video.model.js   (we create models inside this files)


step:2 ye jo user.model jo watchHistory hain ye akela esai bhut complex bna dega so we install mongoose aggregate package. (npm i mongoose-aggregate-paginate-v2).
this package help us to aggregate data from multiple collections.(means complex qurey ko defeat krta h)

step:3 import in video.model.js, or also add plugin

step:4 install bcrypt packege (npm i bcrypt)
A library to help you hash passwords. ke jaise hume cleartext password nhi rakhna, so hume hash password rakhna hoga. (hash password means password ko encrypt krna)


step:5 install jsonwebtoken package (npm i jsonwebtoken) short form (JWT)
A JSON Web Token (JWT) is a compact, URL-safe way to represent claims between two parties

import both in user.model.js (bcrypt, jsonwebtoken)


step:6 direct encryption krna possible nhi hota toh hume help lane hoge mongoose ke hooks ke
read this link: https://mongoosejs.com/docs/middleware.html

step:7 jaise he data save hone waala hoge just usai save hone sai pahle aager hum es hook ko run krana chaye toh ke jaise mai ne chata ke data esai save ho mai pahle usai kuch kr du jaise password encrypt toh eskai like humare pass hooks hote h.

(Pre middleware functions are executed one after another, when each middleware calls next.)


or kub kub krna h hooks ka use 
jub 
1)validate
2)save
3)updateOne
4)deleteOne
5)init (note: init hooks are synchronous)


step:8 hum hooks mai custom method bhi define kr sakte hain. (custom method) jaise he hume koi bhi validation krni hain toh hum usai custom method mai define kr sakte hain . ka use krke

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password)
}



step:9 jwt ek bearer token means ye token jiske bhi pass h mai use data bhej sakta hu. ye ek key ke trha h or kaafi strong security h eski.


step:10 .env mai access_token_secret, access_token_expiry, refresh_token_secret, refresh_token_expiry use krange security k liye (JWT)

refresh_token he database mai save hoge access_token ne hoga


step:11 user.model.js mai hum fir sai custom method ka use krange jisme (jwt.sign()) kai sath data bhi lange or expiry bhi. (access_token, refresh_token)

