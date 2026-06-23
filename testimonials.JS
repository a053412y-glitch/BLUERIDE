function likeCard(button) {
    let counterSpan = button.nextElementSibling;
    counterSpan.innerText = parseInt(counterSpan.innerText) + 1;
}