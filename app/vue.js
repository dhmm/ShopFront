var app = new Vue({
    el: '#app',
    data: {
        products: [
            { id:1, name: 'Product 1' , description:'Sed vitae sapien ut metus ultricies pulvinar vitae tempus ante. Duis condimentum hendrerit blandit.', price : 10.00 , inStock: 10 } ,
            { id:2, name: 'Product 2' , description:'Sed vitae sapien ut metus ultricies pulvinar vitae tempus ante. Duis condimentum hendrerit blandit.', price : 5.00 , inStock: 15 } ,
            { id:3, name: 'Product 3' , description:'Sed vitae sapien ut metus ultricies pulvinar vitae tempus ante. Duis condimentum hendrerit blandit.', price : 33.00 , inStock: 0 } ,
            { id:4, name: 'Product 4' , description:'Sed vitae sapien ut metus ultricies pulvinar vitae tempus ante. Duis condimentum hendrerit blandit.', price : 8.00 , inStock: 45 }
        ],
        cart: [
            { id:1, name: 'Product 1' , price : 10.00 , quantity: 2 } ,
            { id:1, name: 'Product 4' , price : 8.00 , quantity: 20 } 
        ]
    } , 
    methods: {
        search : function() {
            this.products =  [
                { id:1, name: 'Product 1' , description:'Sed vitae sapien ut metus ultricies pulvinar vitae tempus ante. Duis condimentum hendrerit blandit.', price : 10.00 , inStock: 10 } 
            ]
        }
    }    
})