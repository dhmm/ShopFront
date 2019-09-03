var app = new Vue({
    el: '#app',
    data: {
        products: [
            { id:1, name: 'Product 1' , description:'Sed vitae sapien ut metus ultricies pulvinar vitae tempus ante. Duis condimentum hendrerit blandit.', price : 10.00 , inStock: 10 } ,
            { id:2, name: 'Product 2' , description:'Sed vitae sapien ut metus ultricies pulvinar vitae tempus ante. Duis condimentum hendrerit blandit.', price : 5.00 , inStock: 15 } ,
            { id:3, name: 'Product 3' , description:'Sed vitae sapien ut metus ultricies pulvinar vitae tempus ante. Duis condimentum hendrerit blandit.', price : 33.00 , inStock: 0 } ,
            { id:4, name: 'Product 4' , description:'Sed vitae sapien ut metus ultricies pulvinar vitae tempus ante. Duis condimentum hendrerit blandit.', price : 8.00 , inStock: 45 }
        ],
        cart: new Array() ,
        cartTotal: 0,
        cartCount: 0
    } , 
    methods: {
        search : function() {
            this.products =  [
                { id:1, name: 'Product 1' , description:'Sed vitae sapien ut metus ultricies pulvinar vitae tempus ante. Duis condimentum hendrerit blandit.', price : 10.00 , inStock: 10 } 
            ]
        } ,
        clear : function() {
            this.cart = new Array();
            this.cartTotal = 0;
            this.cartCount = 0;
        },
        addToCart: function(productId) {
            //Get product from product list and decrease stock
            let findedProduct = null;
            if(this.products != null){
                this.products.forEach( (product,index) => {
                    if(product.id == productId)
                    {
                        if(product.inStock == 0){
                            alert('There isn\'t product in the stock');
                            return;
                        }
                        findedProduct = product;
                        product.inStock--;                                            
                    }
                });
            }
            if(findedProduct != null) {
                let productInCart = false;   
                this.cartTotal = 0; 
                if(this.cart != null){
                    this.cart.forEach( (cartProduct, index) => {
                        if(cartProduct.id == productId) {
                            productInCart=true;
                            cartProduct.quantity++;                            
                            cartProduct.totalPrice = cartProduct.productPrice * cartProduct.quantity;                                                     
                            this.cartCount++;                            
                        }
                        this.cartTotal += cartProduct.totalPrice;                        
                    });
                } 
                if(!productInCart) {                    
                    this.cart.push(
                        { id: findedProduct.id  , name: findedProduct.name, productPrice: findedProduct.price , totalPrice: findedProduct.price  , quantity: 1 }
                    );      
                    this.cartTotal+=findedProduct.price;                    
                    this.cartCount++;
                }
            }            
        },
        getStockQuantity: function(productId) {
            if(this.products != null){
                this.products.forEach( (product,index) => {
                    if(product.id == productId)
                    {
                        return product.inStock;                                           
                    }
                });
            }
            return 0;
        },
        decreaseCart(productId) {  
            this.cartTotal = 0;          
            if(this.cart != null){
                this.cart.forEach( (cartProduct, index) => {
                    if(cartProduct.id == productId) {                        
                        cartProduct.quantity--;                            
                        cartProduct.totalPrice = cartProduct.productPrice * cartProduct.quantity;                                                     
                        this.cartCount--;  
                        if(cartProduct.quantity == 0) {
                            this.cart.splice(index , 1);
                        }                          
                    }
                    else {
                        this.cartTotal += cartProduct.totalPrice;                        
                    }
                });
            } 
        },
        removeFromCart(productId) {
            this.cartTotal = 0;              
            if(this.cart != null){
                this.cart.forEach( (cartProduct, index) => {
                    if(cartProduct.id == productId) {                                                
                        this.cart.splice(index , 1);   
                        this.cartCount-=cartProduct.quantity;                       
                    }
                    else {
                        this.cartTotal += cartProduct.totalPrice;                       
                    }
                });
            } 
        }
    }    
})