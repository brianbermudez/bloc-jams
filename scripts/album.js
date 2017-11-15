// Example Album
 var albumPicasso = {
     title: 'The Colors',
     artist: 'Pablo Picasso',
     label: 'Cubism',
     year: '1881',
     albumArtUrl: 'assets/images/album_covers/01.png',
     songs: [
         { title: 'Blue', duration: '4:26' },
         { title: 'Green', duration: '3:14' },
         { title: 'Red', duration: '5:01' },
         { title: 'Pink', duration: '3:21'},
         { title: 'Magenta', duration: '2:15'}
     ]
 };

 // Another Example Album
 var albumMarconi = {
     title: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { title: 'Hello, Operator?', duration: '1:01' },
         { title: 'Ring, ring, ring', duration: '5:01' },
         { title: 'Fits in your pocket', duration: '3:21'},
         { title: 'Can you hear me now?', duration: '3:14' },
         { title: 'Wrong phone number', duration: '2:15'}
     ]
 };

 // MY Example Album
 var albumJohnMayer = {
     title: 'Continuum',
     artist: 'John Mayer',
     label: 'Columbia Records',
     year: '2006',
     albumArtUrl: 'assets/images/album_covers/22.png',
     songs: [
         { title: 'Waiting On The World To Change', duration: '3:21' },
         { title: 'I Dont Trust Myself(With Loving You)', duration: '4:52' },
         { title: 'Belief', duration: '4:02'},
         { title: 'The Heart of Life', duration: '3:18' },
         { title: 'Vultures', duration: '4:11'}
     ]
 };

 var createSongRow = function(songNumber, songName, songLength) {
     var template =
        '<tr class="album-view-song-item">'
      + '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;

     var $row = $(template);

     var clickHandler = function() {
         // clickHandler logic
     };

     var onHover = function(event) {
         // Placeholder for function logic
     };
     var offHover = function(event) {
         // Placeholder for function logic
     };
     // #1
     $row.find('.song-item-number').click(clickHandler);
     // #2
     $row.hover(onHover, offHover);
     // #3
     return $row;
 };


 var setCurrentAlbum = function(album) {

     var $albumTitle = $('.album-view-title');
     var $albumArtist = $('.album-view-artist');
     var $albumReleaseInfo = $('.album-view-release-info');
     var $albumImage = $('.album-cover-art');
     var $albumSongList = $('.album-view-song-list');

     // #2
     $albumTitle.text(album.title);
     $albumArtist.text(album.artist);
     $albumReleaseInfo.text(album.year + ' ' + album.label);
     $albumImage.attr('src', album.albumArtUrl);

     // #3
     $albumSongList.empty();


         // #4
         for (var i = 0; i < album.songs.length; i++) {
           var $newRow = createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
           $albumSongList.append($newRow);
         }
     };


     // Album button templates
     var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
     var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';

     // Store state of playing songs
     var currentlyPlayingSong = null;

     $(document).ready(function() {
         setCurrentAlbum(albumPicasso);
     });

         var albums = [albumPicasso, albumMarconi, albumJohnMayer];
         var index = 1;
         albumImage.addEventListener("click", function(event) {
           setCurrentAlbum(albums[index]);
           index++;
           if (index == albums.length) {
             index = 0;
           }
         });
