function getParagraph() {
    const paragraphDiv = document.getElementsByClassName('inputPanel')[0].firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild;
    const paragraph = paragraphDiv.textContent + paragraphDiv.nextSibling.textContent;
    if (paragraphDiv.nextSibling.textContent.length < 10) {
        return paragraph + paragraphDiv.nextSibling.nextSibling.textContent;
    }
    return paragraph;
}

function type(wpm) {
    let letters = [];
    let textBox = undefined;
    let index = 0;
    let paragraph = '';
    let notWaitForTrafficLight = false;
    const interval = setInterval(() => {
        if (!notWaitForTrafficLight) {
            if (document.getElementsByClassName('trafficLight').length === 1) {
                notWaitForTrafficLight = true;
            }
        }
        if (notWaitForTrafficLight && document.getElementsByClassName('trafficLight').length === 0) {
            if (index === 0) {
                letters = getParagraph().split('');
                textBox = document.getElementsByClassName('txtInput')[0];
            }
            if (index < letters.length) {
                textBox.value += letters[index];
                paragraph += letters[index];
                console.log(paragraph);
                index++;
            } else if (index !== 0 && letters.length !== 0) {
                clearInterval(interval);
            }
        }
    }, ((60 * 1000) / (wpm * 7)));
}

type(120);
