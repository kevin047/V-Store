// Slider

const swiper = new Swiper('.swiper', {
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
  });



/*Product 0*/
var app = angular.module('prod', []);
    app.controller('pitem', function($scope) {


    $scope.OfferProduct = [
        {id:4,image:'assets/products/apparel4.jpg', discount:'32%', content:'Happy Sailed Womens Summer Boho Floral',rating:'(2,547)', price:9499,oprice:'₹579.99',sold:'2947 sold',remark:'Free shipping', avail:147, sold:107}
    ];

    $scope.products = [
        {id:3,image:'assets/products/apparel3.jpg', discount:'32%', content:'Black Women\'s Coat Dress',rating:'(2,547)', price:2199,oprice:'₹579.99',sold:'2947 sold',remark:'Free shipping'},
        {id:1,image:'assets/products/apparel1.jpg', discount:'32%', content:'Under Armour Men\'s Tech',rating:'(2,547)', price:4799,oprice:'₹579.99',sold:'2947 sold',remark:'Free shipping'},
        {id:10,image:'assets/products/home1.jpg', discount:'32%', content:'Vonada Velvet Sofa Coach',rating:'(2,547)', price:3599,oprice:'₹579.99',sold:'2947 sold',remark:'Free shipping'},
        {id:23,image:'assets/products/electronic3.jpg', discount:'32%', content:'Wireless Headphones (Over Ear)',rating:'(2,547)', price:2299,oprice:'₹579.99',sold:'2947 sold',remark:'Free shipping'},
    ];




    $scope.products1 = [
        {id:30,image:'assets/products/shoe1.jpg', discount:'32%', content:'Men slip on Shoes Casual with Arch Support Insoles',rating:'(2,547)', price:80000,oprice:'₹579.99',sold:'2947 sold',remark:'Free shipping'},
        {id:2,image:'assets/products/apparel2.jpg', discount:'32%', content:'Women\'s Lightweight Knitted sweater',rating:'(2,547)', price:1300,oprice:'₹579.99',sold:'2947 sold',remark:'Free shipping'},
        {id:12,image:'assets/products/home2.jpg', discount:'32%', content:'Dimmable Ceiling Light Modern',rating:'(2,547)', price:4099,oprice:'₹579.99',sold:'2947 sold',remark:'Free shipping'},
        {id:13,image:'assets/products/home3.jpg', discount:'32%', content:'Modern Storage Cabinet with Door',rating:'(2,547)', price:1799,oprice:'₹579.99',sold:'2947 sold',remark:'Free shipping'},
    ];

    $scope.featureproducts = [
        {id:1,image:'assets/products/apparel1.jpg', discount:'32%', content:'Under Armour Men\'s Tech',rating:'(2,547)', price:4799,oprice:'₹579.99',sold:'2947 sold',remark:'Free shipping'},
        {id:2,image:'assets/products/apparel2.jpg', discount:'32%', content:'Women\'s Lightweight Knitted sweater',rating:'(2,547)', price:1300,oprice:'₹579.99',sold:'2947 sold',remark:'Free shipping'},
        {id:3,image:'assets/products/apparel3.jpg', discount:'32%', content:'Black Women\'s Coat Dress',rating:'(2,547)', price:2199,oprice:'₹579.99',sold:'2947 sold',remark:'Free shipping'},
        {id:4,image:'assets/products/apparel4.jpg', discount:'32%', content:'Happy Sailed Womens Summer Boho Floral',rating:'(2,547)', price:9499,oprice:'₹579.99',sold:'2947 sold',remark:'Free shipping'},
        {id:30,image:'assets/products/shoe1.jpg', discount:'32%', content:'Men slip on Shoes Casual with Arch Support Insoles',rating:'(2,547)', price:80000,oprice:'₹579.99',sold:'2947 sold',remark:'Free shipping'},
        {id:32,image:'assets/products/shoe2.jpg', discount:'32%', content:'Skechers Women\'s Go Joy Walking Shoe Sneaker',rating:'(2,547)', price:7999,oprice:'₹579.99',sold:'2947 sold',remark:'Free shipping'},
        {id:33,image:'assets/products/shoe3.jpg', discount:'32%', content:'Walking Shoe Sneaker Unisex',rating:'(2,547)', price:14799,oprice:'₹579.99',sold:'2947 sold',remark:'Free shipping'},
        {id:34,image:'assets/products/shoe4.jpg', discount:'32%', content:'Women\'s Summer Tosca Shoe',rating:'(2,547)', price:6999,oprice:'₹579.99',sold:'2947 sold',remark:'Free shipping'},
    ];




    $scope.cart = [];
    $scope.totalAmount = 0
    $scope.totalitem=0

    
    $scope.addtoCart = function(product){
        alert(product.content +"\n₹"+product.price+ "\nAdded to Cart");
        $scope.totalAmount = $scope.totalAmount + product.price;
        console.log($scope.cart);
        
        const index = $scope.cart.findIndex(function(item){
            return product.id === item.id
        })

        if(index == -1){
            $scope.cart.push({
                image: product.image,
                content: product.content,
                price: product.price,
                id: product.id,
                quantity: 1
            })
            $scope.totalitem= $scope.totalitem +1
            
        }else{
            $scope.cart[index].quantity++;
        }
        

        $scope.removeItem = (product)=>{
            alert("Are you sure want to remove "+product.content+" from your cart");
            const index = $scope.cart.indexOf(product)
            if(index > -1){
                // if($scope.cart[index].quantity>1){
                //     $scope.cart[index].quantity = $scope.cart[index].quantity-1
                // }
                // else{
                    $scope.cart[index].removed = true;
                    $scope.totalitem= $scope.totalitem -1
                // }
                $scope.totalAmount = $scope.totalAmount - product.quantity*product.price
            }
        }

        $scope.removeall = ()=>{
            $scope.cart=[]
            $scope.totalAmount = 0
            $scope.totalitem = 0
        }

        $scope.removeone = (product)=>{
            const index = $scope.cart.indexOf(product)
            if(index > -1){
                if($scope.cart[index].quantity>1){
                    $scope.cart[index].quantity = $scope.cart[index].quantity-1
                }
                else{
                    $scope.cart[index].removed = true;
                    $scope.totalitem= $scope.totalitem -1
                }
                $scope.totalAmount = $scope.totalAmount - product.price
            }
        }

        $scope.addone = (product)=>{
            const index = $scope.cart.indexOf(product)
            if(index > -1){
                $scope.cart[index].quantity = $scope.cart[index].quantity+1
                $scope.totalAmount = $scope.totalAmount + product.price
            }
        }

    }
});



