let   photo       = $("#photo"),
      title       = $("#photo-title"),
      description = $("#photo-description"),
      back        = $("#back"),
      forward     = $("#forward");

let data = [
  {
    photo: "https://images.unsplash.com/photo-1555918242-d583dc853435?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    title: "Brown Turtle",
    description: "The brown wood turtle or brown land turtle (Rhinoclemmys annulata) is a species of turtle in the family Geoemydidae. The species is endemic to Central America and northern South America."
  }, {
    photo: "https://scontent-vie1-1.xx.fbcdn.net/v/t31.0-8/706187_10200137098898715_740822055_o.jpg?_nc_cat=105&_nc_sid=e007fa&_nc_ohc=9XN07_jkL-cAX-y49m3&_nc_ht=scontent-vie1-1.xx&oh=b8b9eca59b6e49a1e3a96c6e782d5640&oe=5EB89AB3",
    title: "A Dragon on a Hunt",
    description: "A digital painting done in Adobe Photoshop."
  }, {
    photo: "https://images.unsplash.com/photo-1499823382510-3990e4b8a04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    title: "Surfing",
    description: "Seems like a perfectly spent vacation."
  }, {
    photo: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    title: "A Distant Galaxy",
    description: "A galaxy is a gravitationally bound system of stars, stellar remnants, interstellar gas, dust, and dark matter. The word galaxy is derived from the Greek galaxias (γαλαξίας), literally 'milky', a reference to the Milky Way. Galaxies range in size from dwarfs with just a few hundred million stars to giants with one hundred trillion stars, each orbiting its galaxy's center of mass."
  }, {
    photo: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2252&q=80",
    title: "From Outer Space",
    description: "This picture was taken by NASA."
  }, {
    photo: "https://images.unsplash.com/photo-1506804886640-20a2c0857946?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2048&q=80",
    title: "Las Vegas",
    description: "Las Vegas is an internationally renowned major resort city, known primarily for its gambling, shopping, fine dining, entertainment, and nightlife. The Las Vegas Valley as a whole serves as the leading financial, commercial, and cultural center for Nevada."
  }, {
    photo: "https://images.unsplash.com/photo-1576941026827-bccc82341bdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80",
    title: "Big Island, Hawaii, USA",
    description: "Hot lava pouring straight into the ocean creating dangerous fumes and fiberglass like dust particles."
  }, {
    photo: "https://scontent-vie1-1.xx.fbcdn.net/v/t31.0-8/704463_10200117890298512_1352869640_o.jpg?_nc_cat=106&_nc_sid=e007fa&_nc_ohc=JNI2BuDIS1MAX9BrdNt&_nc_ht=scontent-vie1-1.xx&oh=824d1ce7d695ec394809a22b6af77c7d&oe=5EBAA0E9",
    title: "Some angry fantasy creature",
    description: "Created in Adobe Photoshop. An attemp to create a photorealistic painting with nothing just a digital paintbrush"
  }, 
];

let currentPhoto = 0;

// photo.attr("src", data[currentPhoto].photo);
// title.text(data[currentPhoto].title);
// description.text(data[currentPhoto].description);

let loadPhoto = (photoNumber) => {
  photo.attr("src", data[photoNumber].photo);
  title.text(data[photoNumber].title);
  description.text(data[photoNumber].description);
};

loadPhoto(currentPhoto);

forward.on("click", () => {
  currentPhoto++;
  if(currentPhoto === data.length){
    currentPhoto = 0;
    loadPhoto(currentPhoto);
  } else {
    loadPhoto(currentPhoto);
  }
});

back.on("click", () => {
  currentPhoto--;
  if(currentPhoto === -1){
    currentPhoto = data.length-1;
    loadPhoto(currentPhoto);
  } else {
    loadPhoto(currentPhoto);
  }
});

data.forEach((picture) => {
  dataNum = data.indexOf(picture);
  let thumbnail = `<div class="thumbnail">
                    <img class="thumbnail-img" src="${picture.photo}" data-number="${dataNum}" alt="">
                  </div>`;
  $(".thumbnails").append(thumbnail);
});

$(".thumbnail-img").on("click", (event) => {
  currentPhoto = $(event.target).data("number");
  loadPhoto(currentPhoto);
});