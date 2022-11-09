// Mostra tutto il json
axios.get('https://fakestoreapi.com/products').then(function (response) {
    console.log(response);
}).catch(function (error) {
    console.log(error);
});

// Mostra solo una parte del json (la request) riferita al secondo record
axios.get('https://fakestoreapi.com/products/2').then(function (response) {
    console.log(response.request);
}).catch(function (error) {
    console.log(error);
});

// Crea un altro record
axios.post('https://fakestoreapi.com/products', {title: 'Ciao, sono Alessia', price: 150, description: 'Sono io'}).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.log(error);
});

// Modifica il record 21
axios.put('https://fakestoreapi.com/products/21', {title: 'Modifica al mio record', price: 200, description: 'Ciao'}).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.log(error);
});

// Cancella il record 5
axios.delete('https://fakestoreapi.com/products/5').then(function () {
    console.log('Il record 5 è stato cancellato');
}).catch(function (error) {
    console.log(error);
});