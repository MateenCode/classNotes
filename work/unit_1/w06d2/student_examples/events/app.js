console.log('app.js');



const data = [
    { name: "Megatron", address: "Cybertron" },
    { name: "Some guy", address: "Some street" },
    { name: "Grace Hopper", address: "Arlington, Virginia" },
    { name: "Ching Shih", address: "The High Seas" },
    { name: "Slimer", address: "The Library" },
    { name: "Umbra", address: "The Void" },
    { name: "Hypatia", address: "The Neoplatonic school at Alexandria" },
    { name: "Matt Huntington", address: "Remote" },
    { name: "Ronald McDonald", address: "Casa del McDonalds" },
    { name: "Jem", address: "Starlight Music" }
  ];

  const populateData = () => {
    for(person of data) {
        console.log(person);
        const $infoContainer = $('<div>').addClass('info-container');
        const $nameDiv = $('<div>').addClass('name').text(person.name);
        const $addressDiv = $('<div>').addClass('address').text(person.address);
        $infoContainer.append($nameDiv,$addressDiv);
        $('body').append($infoContainer);
      
      }

  }
//   figure out how to create a removeData function that takes
//    a name of a person you want to remove, 
//   removes them from the data array, then refreshes the rolodex.

  const removeData = (name) => {
    const dataIndex = data.map((el) => {
        return el.name
    }).indexOf(name);
    data.splice(dataIndex, 1)
    $('body').empty();
    populateData();
}
//   const removeData = (person) => {
//      for(person of data){
//          if(data[person].name === name) {
//              data.splice(person,1)
//          } 
//      }
//   }

  const addData = (name,address) => {
      data.push({name: name, address: address});
      $('body').empty();
      populateData();
  }

  $(() =>{
      
    //   populateData();
    //   setTimeout(() => {
    //     addData('Khoury', 'Miami');
    //   }, 2000)
     
const $btn = $('#btn');

// set up event listener

$btn.on('click', () => {
    $('body').append('it seema as if it has been clicked')
})

// if you going to re use over and over again use this way

const addText = () => {
    $('body').append('it seema as if it has been clicked')
}


const changeClass = () => {
    /**toggle class means turn on and turn off */
    $('body').toggleClass('black')
}
$btn.on('click', populateData);

// vanilla way
// $btn.addEventLister()
    
})