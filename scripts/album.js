 var createSongRow = function(songNumber, songName, songLength) {
     var template =
        '<tr class="album-view-song-item">'
      + '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;
 
     var onHover = function(event) {
        var songNumberCell = $(this).find('.song-item-number');
        var songNumber = songNumberCell.attr('data-song-number'); // songNumber is being redefined within this function

        if (songNumber !== currentlyPlayingSongNumber) {
            songNumberCell.html(playButtonTemplate);
        }
     };
     
     var offHover = function(event) {
        var songNumberCell = $(this).find('.song-item-number');
        var songNumber = songNumberCell.attr('data-song-number'); // songNumber is being redefined within this function

        if (songNumber !== currentlyPlayingSongNumber) {
            songNumberCell.html(songNumber);
        }
//   console.log("songNumber type is " + typeof songNumber + "\n and currentlyPlayingSongNumber type is " + typeof currentlyPlayingSongNumber);
     };
  
     var $row = $(template);
     var clickHandler = function() {
         
         var songNumber = parseInt($(this).attr('data-song-number')); // songNumber is being redefined within this function

         if (currentlyPlayingSongNumber !== null) {
             // Revert to song number for currently playing song because user started playing new song.
             var currentlyPlayingCell = getSongNumberCell(currentlyPlayingSongNumber);
             currentlyPlayingCell.html(currentlyPlayingSongNumber);
            }
         if (currentlyPlayingSongNumber !== songNumber) {
             // Switch from Play -> Pause button to indicate new song is playing.
             $(this).html(pauseButtonTemplate);
//           currentlyPlayingSongNumber = songNumber;
//           currentSongFromAlbum = currentAlbum.songs[songNumber - 1]; 
             setSong(songNumber);
             updatePlayerBarSong();
         } else if (currentlyPlayingSongNumber === songNumber) {
             // Switch from Pause -> Play button to pause currently playing song.
             $(this).html(playButtonTemplate);
             $('.main-controls .play-pause').html(playerBarPlayButton);
             currentlyPlayingSongNumber = null;
             currentSongFromAlbum = null;
            }
     };

     var updatePlayerBarSong = function(){
         $('.currently-playing .song-name').text(currentSongFromAlbum.title);
         $('.currently-playing .artist-name').text(currentAlbum.artist);
         $('.currently-playing .artist-song-mobile').text(currentSongFromAlbum.title + " - " + currentAlbum.artist);
         $('.main-controls .play-pause').html(playerBarPauseButton);
        };
 
     $row.find('.song-item-number').click(clickHandler);
     $row.hover(onHover, offHover);
     return $row;
     
 }; // All the above functions are within createSongRow() !  So variables like "currentSongFromAlbum" are being referenced from within nested functions

var $albumTitle = $('.album-view-title');
var $albumArtist = $('.album-view-artist');
var $albumReleaseInfo = $('.album-view-release-info');
var $albumImage = $('.album-cover-art');
var $albumSongList = $('.album-view-song-list');

var setCurrentAlbum = function(album) {
    
     currentAlbum = album; 
     $albumTitle.text(album.title);
     $albumArtist.text(album.artist);
     $albumReleaseInfo.text(album.year + ' ' + album.label);
     $albumImage.attr('src', album.albumArtUrl);
 
     $albumSongList.empty();
 
     for (var i = 0; i < album.songs.length; i++) {
         var $newRow = createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
         $albumSongList.append($newRow);
     }
    
 };

var trackIndex = function(album, song) {
     return album.songs.indexOf(song) + 1;
 };

var nextSong = function() {
    
    var getLastSongNumber = function(index) {
        return index == 0 ? currentAlbum.songs.length : index;
    };
    
    var currentSongIndex = trackIndex(currentAlbum, currentSongFromAlbum);
    // Note that we're _incrementing_ the song here
    currentSongIndex++;
    if (currentSongIndex > currentAlbum.songs.length) {
        currentSongIndex = 1;
    }
    
    // Set a new current song
    setSong(currentSongIndex);
//  currentlyPlayingSongNumber = currentSongIndex + 1;
//  currentSongFromAlbum = currentAlbum.songs[currentSongIndex];

    // Update the Player Bar information
    $('.currently-playing .song-name').text(currentSongFromAlbum.title);
    $('.currently-playing .artist-name').text(currentAlbum.artist);
    $('.currently-playing .artist-song-mobile').text(currentSongFromAlbum.title + " - " + currentAlbum.title);
    $('.main-controls .play-pause').html(playerBarPauseButton);
    
    var lastSongNumber = getLastSongNumber(currentSongIndex);
    var $nextSongNumberCell = getSongNumberCell(currentlyPlayingSongNumber);
//  var $nextSongNumberCell = $('.song-item-number[data-song-number="' + currentlyPlayingSongNumber + '"]');
    var $lastSongNumberCell = getSongNumberCell(lastSongNumber);
//  var $lastSongNumberCell = $('.song-item-number[data-song-number="' + lastSongNumber + '"]');
    
    $nextSongNumberCell.html(pauseButtonTemplate);
    $lastSongNumberCell.html(lastSongNumber);
    
};

var previousSong = function() {
    
    // Note the difference between this implementation and the one in
    // nextSong()
    var getLastSongNumber = function(index) {
        return index == (currentAlbum.songs.length - 1) ? 1 : index + 2;
    };
    
    var currentSongIndex = trackIndex(currentAlbum, currentSongFromAlbum);
    // Note that we're _decrementing_ the index here - actually we're not decrementing!
    currentSongIndex--;
    if (currentSongIndex == 0) {
        currentSongIndex = currentAlbum.songs.length;
    }
    
    // Set a new current song
    setSong(currentSongIndex);
//  currentlyPlayingSongNumber = currentSongIndex + 1;
//  currentSongFromAlbum = currentAlbum.songs[currentSongIndex];

    // Update the Player Bar information
    $('.currently-playing .song-name').text(currentSongFromAlbum.title); 
    $('.currently-playing .artist-name').text(currentAlbum.artist);
    $('.currently-playing .artist-song-mobile').text(currentSongFromAlbum.title + " - " + currentAlbum.title);
    $('.main-controls .play-pause').html(playerBarPauseButton);
    
    var lastSongNumber = getLastSongNumber(currentSongIndex);
    
//  var $previousSongNumberCell = $('.song-item-number[data-song-number="' + currentlyPlayingSongNumber + '"]');
//  var $lastSongNumberCell = $('.song-item-number[data-song-number="' + lastSongNumber + '"]');
    var $previousSongNumberCell = getSongNumberCell(currentlyPlayingSongNumber);
    var $lastSongNumberCell = getSongNumberCell(lastSongNumber);
    
    $previousSongNumberCell.html(pauseButtonTemplate);
    $lastSongNumberCell.html(lastSongNumber);
    
};

var setSong = function(songNumber) {
    currentlyPlayingSongNumber = parseInt(songNumber);
    currentSongFromAlbum = currentAlbum.songs[songNumber - 1];
};

var getSongNumberCell = function(number) {
    return $('.song-item-number[data-song-number="' + number + '"]');
};

// Album button templates
var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';
var playerBarPlayButton = '<span class="ion-play"></span>';
var playerBarPauseButton = '<span class="ion-pause"></span>';

// Store state of playing songs
var currentlyPlayingSongNumber = null;
var currentSongFromAlbum = null;
var currentAlbum = null;
// Create variables to hold jQuery selectors for the next and previous buttons
var $previousButton = $('.main-controls .previous');
var $nextButton = $('.main-controls .next');

$(document).ready(function() {
    
    setCurrentAlbum(albumPicasso);
    $previousButton.click(previousSong);
    $nextButton.click(nextSong);

    albums = [albumPicasso, albumMarconi, albumZeppelin];
    var next = 1;
    $albumImage.click(function(event){
        setCurrentAlbum(albums[next]);
        next++;
        if (next == albums.length) {
            next = 0;
        }
        });
    
 });