const cardContainer = document.getElementById('card_container')

cardContainer.addEventListener('click', e => {
    document.getElementById('card').className = 'card_open'
    document.getElementById('text').className = 'text_open'
    document.getElementById('topGift').className = 'top_open_gift'
    document.getElementById('btmGift').className = 'btm_open_gift'
    document.getElementById('card_text').className = 'card_open_text'
})