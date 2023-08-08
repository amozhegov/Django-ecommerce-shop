// Create an even handler 

var updateBtns = document.getElementsByClassName('update-cart')

for (i = 0; i < updateBtns.length; i++) {
    updateBtns[i].addEventListener('click', function() {
        var productId = this.dataset.product
        var action = this.dataset.action
        console.log('productId:', productId, ';', 'Action:', action)
        // Make sure user is authenticated
        console.log('User:', user)

        if (user === 'AnonymouesUser') {
            console.log('User is not authenticated')
        } else {
            updateUserOrder(productId, action)
        }
        
    })
}

function updateUserOrder(productId, action) {
    console.log('User is authenticated')

    var url = '/update_item/'

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({'productId': productId, 'action': action})
    })
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log('data: ', data)
    })
}