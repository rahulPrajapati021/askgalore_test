# Task
create a backend server, with authentication in mvc architecture 
don't use view only rest api, use postgresdb , one table for user, one table for products 
design cart system, 

## Approach Used

Created express app. 
Used JWT token for user authentication. 

Create 3 routes to handle different operations

- [User Routes](#user-routes)
- [Product Routes](#product-routes)
- [Cart Routes](#cart-routes)

Notes -
1. Added environment variables in .env 
didn't removed in git push for reference. 
2. Error handling is not done properly. 


# User Routes
## Create User
URL: /user/register  
Method: POST  
Authentication: None   
Content-Type: application/json  
### Request Body
``` json
{
    "name":"rahul",
    "email":"rahul@mail.com",
    "password":"123456"
}
```

### Response
``` json
{
    "msg": "user created",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhaHVsQG1haWwuY29tIiwiaWF0IjoxNzY1NTQxMDgxfQ.E9Jl4JriVixlmAY2pXSVxF3aJS-vonBulJhwqmvRYFs"
}
```


## Login User
URL: /user/login  
Method: POST  
Authentication: None   
Content-Type: application/json  
### Request Body
``` json
{
    "email":"rahul@mail.com",
    "password":"123456"
}
```

### Response
``` json
{
    "msg": "user verified",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhaHVsQG1haWwuY29tIiwiaWF0IjoxNzY1NTQxMDgxfQ.E9Jl4JriVixlmAY2pXSVxF3aJS-vonBulJhwqmvRYFs"
}
```


## Dashboard
URL: /user/dashboard
Method: GET
Authentication: Bearer Token   
### Response
``` json
{
    "msg":"api is up"
}
```


# Product Routes
## Create Product
URL: /user/login  
Method: POST  
Authentication: Bearer Token   
Content-Type: application/json  
### Request Body
``` json
{
    "name": "Product 1", 
    "price": "212"
}
```

### Response
``` json
{
    "msg": "created product",
    "product": {
        "id": 1,
        "name": "Product 1",
        "price": 212,
        "updatedAt": "2025-12-12T12:11:55.764Z",
        "createdAt": "2025-12-12T12:11:55.764Z"
    }
}
```


## Get Products
URL: /product/getProducts  
Method: GET
Authentication: Bearer Token   
### Response
``` json
{
    "msg": "all products",
    "products": [
        {
            "id": 1,
            "name": "Product 1",
            "price": 212,
            "createdAt": "2025-12-12T12:11:55.764Z",
            "updatedAt": "2025-12-12T12:11:55.764Z"
        }
    ]
}
```


# Cart Routes
## Add To Cart
URL: /cart/addToCart  
Method: POST  
Authentication: Bearer Token   
Content-Type: application/json  
### Request Body
``` json
{
    "productId": 1,
    "quantity": 2
}
```

### Response
``` json
{
    "msg": "added to cart successfully"
}
```


## Get Products
URL: /cart/viewCart  
Method: GET
Authentication: Bearer Token   
### Response
``` json
{
    "msg": "user cart",
    "data": [
        {
            "id": 1,
            "quantity": 2,
            "createdAt": "2025-12-12T12:19:34.253Z",
            "updatedAt": "2025-12-12T12:19:34.253Z",
            "UserId": 1,
            "ProductId": 1
        }
    ]
}
```

