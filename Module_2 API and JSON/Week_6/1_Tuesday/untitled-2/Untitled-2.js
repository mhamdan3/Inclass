// # Sort By File Extension

// ## File

// * *None*

// ## Instructions

// You have an array of filenames with extensions. Sort the files into arrays based on whether or not they are videos or images.

// ```javascript
  var files = [
    "pavans_first_birthday.mov",
    "owens_asleep_at_the_computer.jpg",
    "michael_fights_a_polar_bear.mp4",
    "nate_road_rage.avi",
    "ruby_skydiving.jpeg",
    "ken_getting_his_black_belt.png",
    "dan_winning_underground_street_race.mov",
    "its_hard_to_come_up_with_file_names.gif",
    "seriously_this_is_taking_too_long.mpg",
    "i_wonder_how_many_of_these_i_should_have.png",
    "probably_a_few_more.avi",
    "nutmeg_is_clawing_my_sneakers_again.mp4",
    "cat_i_will_destroy_you.gif",
    "i_wish_we_had_a_dog.jpeg",
    "stop_looking_at_me_like_that_nutmeg.mpeg",
    "aww_i_cant_hate_you.png",
    "omg_my_sneakers.avi",
    "cat_you_are_the_worst.mp4"
  ];

var imageExtension = ["jpg","gif", "png", "jpeg"];
var videoExtension = ["mov", "avi", "mp4", "mpeg", "mpg"];

  var images = [];
  var videos = [];

  files.forEach(function (val, i) {
    var extension = val.split('.').pop();

    if (imageExtension.indexOf(extension) !== -1)
   images.push(val);

   if (videoExtension.indexOf(extension) !== -1)
   images.push(val);

});

console.log(images);
console.log(videos);


// ```

// ## Info

// ### Image File Extensions

// * jpg
// * gif
// * jpeg
// * png

// ### Video File Extensions

// * mov
// * avi
// * mpeg
// * mp4
// * mpg