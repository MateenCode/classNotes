$(()=> {
    let output = 0;
    // let number = '';

    const $add = $('#add');
    const $subtract = $('#subtract')
    const $inputBox = $('#input-box')
    let $outputDisplay = $('#count-display')

    // console.log($add)

    addUp = (event) => {
        event.preventDefault();
        const number = parseInt($inputBox.val(),10);
        const outputV = $outputDisplay;
        output = output + number
        $outputDisplay.val(output)
        
    }

    sub = (event) => {
        event.preventDefault();
        number = parseInt($inputBox.val(),10) 
        output = $outputDisplay; 
        output = output.val() - number
        $outputDisplay.val(output)
        
    }

    addHover = () => {
        $add.css('background-color', 'white');
        $add.css('color', 'gray');
        
    }

    addOffHover = () => {
        $add.css('background-color', 'gray');
        $add.css('color', 'white');
    }

    subHover = () => {
        $subtract.css('background-color', 'white');
        $subtract.css('color', 'gray');
    }

    subOffHover = () => {
        $subtract.css('background-color', 'gray');
        $subtract.css('color', 'white');
    }

    $add.on('click', addUp)
    $subtract.on('click', sub)
    $add.on('mouseover', addHover)
    $add.on('mouseout', addOffHover)
    $subtract.on('mouseover', subHover)
    $subtract.on('mouseout', subOffHover)



})