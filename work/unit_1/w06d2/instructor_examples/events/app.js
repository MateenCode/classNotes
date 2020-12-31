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
    for (person of data) {
        // console.log(person);
        const $infoContainer = $('<div>').addClass('info-container');
        const $nameDiv = $('<div>').addClass('name').text(person.name);
        const $addressDiv = $('<div>').addClass('address').text(person.address);
        $infoContainer.append($nameDiv);
        $infoContainer.append($addressDiv);
        $('body').append($infoContainer);
    }
}

const addData = (name, address) => {
    data.push({ name: name, address: address });
    $('body').empty();
    populateData();
}


const removeData = (name) => {
    const dataIndex = data.map((el) => el.name).indexOf(name);

    data.splice(dataIndex, 1)
    $('body').empty();
    populateData();
}

$(() => {
    // populateData();
    // setTimeout(() => {
    //     addData('Madeline', "Philadelpia");
    // }, 2000)
    // removeData("Slimer")

    const $btn = $('#btn');

    const addText = () => {
        $('body').append("It seems as if it has been clicked!")
    }

    const changeClass = () => {
        $('body').toggleClass('black');
    }

    $btn.on('click', populateData);

})