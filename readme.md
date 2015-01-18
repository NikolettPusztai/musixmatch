[![Build Status](http://img.shields.io/travis/ayhankuru/musixmatch.svg?style=flat-square)](https://travis-ci.org/ayhankuru/musixmatch)

[![Build Status](https://img.shields.io/david/ayhankuru/musixmatch.svg?style=flat-square)](https://david-dm.org/ayhankuru/musixmatch)
 
NodeJS musixmatch community api

### Install

```bash
$ npm install musicmatch
```


#### Usage

```js

music = require('musicmatch')({usertoken:"",method:"",appid:""});

// or

music =  require('musicmatch')();

```


#### Artist Search

```js
music.artist({q:"Tove lo",page:1,page_size:10}).exec(function(err, data){

    

});

```

#### Track Search


```js

music.track({q_track_artist:"Habits",page:1,page_size:30}).exec(function(err, data){

    

});
```

#### Get Lyrics


```js

music.lyrics({commontrack_vanity_id:"Tove-Lo/Habits",page:1,page_size:30}).exec(function(err, data){

    

});
```
