const CACHE_NAME = "pooja-uc-store-v1";


const FILES_TO_CACHE = [

"index.html",
"style.css",
"script.js",
"manifest.json"

];



// Install

self.addEventListener("install", function(event){

event.waitUntil(

caches.open(CACHE_NAME)
.then(function(cache){

return cache.addAll(FILES_TO_CACHE);

})

);

});




// Activate

self.addEventListener("activate", function(event){

event.waitUntil(

caches.keys().then(function(keys){

return Promise.all(

keys.map(function(key){

if(key !== CACHE_NAME){

return caches.delete(key);

}

})

);

})

);

});





// Fetch

self.addEventListener("fetch", function(event){

event.respondWith(

caches.match(event.request)
.then(function(response){

return response || fetch(event.request);

})

);

});