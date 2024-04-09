# Microservice Architecture for Online Retail System

## Overview

This project presents a microservice architecture for an online retail system, designed to handle authentication, product management, order processing, and more. It utilizes technologies like Node.js, Express, TypeScript, MongoDB, Redis, and JWT for building scalable and robust microservices.

## Services

### 1. Authentication and Profile Service (AuthService)

- Manages user authentication and profile management.
- Provides endpoints for user registration, login, logout, profile update, and password change.
- Implements role-based authorization (customer, admin, super admin) using JWT.
- Technologies: Node.js, Express, TypeScript, MongoDB, JWT

### 2. Product Service

- Manages the product catalog, including details, reviews, and ratings.
- Implements security measures for endpoint access using JWT.
- Technologies: Node.js, Express, TypeScript, MongoDB, JWT

### 3. Order and Payment Service

- Handles order management and payment processing.
- Provides endpoints for creating new orders, updating order status, and processing payments.
- Ensures security and access control for endpoints.
- Technologies: Node.js, Express, TypeScript, MongoDB, Redis, JWT

## Architecture

The architecture follows a microservices design pattern with Redis as a central hub for communication. Each microservice instance registers itself with Redis for discovery. Redis manages communication securely, ensuring data consistency using caching mechanisms. Authentication and authorization are enforced, and Redis Sentinel ensures high availability and reliability.

[Architecture Diagram](https://drive.google.com/file/d/1uHGXmPcvCzuoMtaQLprFUnWzfZd1c-7W/view?usp=sharing)

## Testing Instructions

[Postman](https://www.postman.com/blue-rocket-827835/workspace/techhub-microservice/overview)

Please ensure that every request includes the `accessToken` in the headers.Authorization.

### Super_admin password, email  and accessToken
```json
"email":"masum.rana6267@gmail.com",
"password":"123456"
```
- **Access Token:**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjEzZjBkOTg0OTFkMjBmYjgyMGRiNTQiLCJyb2xlIjoic3VwZXJfYWRtaW4iLCJlbWFpbCI6Im1hc3VtLnJhbmE2MjY3QGdtYWlsLmNvbSIsImlhdCI6MTcxMjY4ODgwOCwiZXhwIjoxNzE0MDAyODA4fQ.h27FNGeRxX3l1_n25HpjrX8ZtkSDgo9pQmNbHA_hicg
```

### Customer password , email and accessToken
```json
"email":"Hossain123@gmail.com",
"password":"123456"
```

- **Access Token:**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjE1OGU2MTZkMTVkYWE0MDVhMGIwYTAiLCJyb2xlIjoiY3VzdG9tZXIiLCJlbWFpbCI6Imhvc3NhaW4xMjNAZ21haWwuY29tIiwiaWF0IjoxNzEyNjg4NzQwLCJleHAiOjE3MTQwMDI3NDB9.qCtcvs9VELADIVbSaoh2ZpHWln85HJhhlPIrmzfCirk
```

#### Authentication Routes

- **Login:** POST https://api-gate-way-tech-hub.vercel.app/api/v1/auth/login

```json
"email":"Hossain123@gmail.com",
"password":"123456"
```

- **Admin Registration:** POST https://api-gate-way-tech-hub.vercel.app/Api/v1/auth/admin/registration
  (only Super admin can create admin.)
  (make sure super_admin accessToken put Headers Authorization)

 

```json
{
  "name": {
    "firstName": "Masum",
    "lastName": "Rana"
  },
  "role": "admin",
  "email": "masum.rana622226@gmail.com",
  "phoneNumber": "01641626735",
  "password": "123456"
}
```

- **Customer Registration:** POST https://api-gate-way-tech-hub.vercel.app/api/v1/auth/customer/registration

```json
{
  "name": {
    "firstName": "Tareq",
    "lastName": "Wasif"
  },
  "email": "Tareq123@gmail.com",
  "phoneNumber": "0164466735",
  "password": "123456"
}
```

- **Refresh Token:** POST https://api-gate-way-tech-hub.vercel.app/api/v1/auth/refresh-token
  (make sure must have refreshToken in your postman or Browser)
- **Change Password:** POST https://api-gate-way-tech-hub.vercel.app/api/v1/auth/change-password
  (make sure must have accessToken in headers Authorization)

```json
{
  "oldPassword": "123456",
  "newPassword": "1234567"
}
```

#### Profile Routes

- **Update Profile:** PATCH https://api-gate-way-tech-hub.vercel.app/api/v1/profile
  (make sure must have accessToken in headers Authorization)
  ```json
  {
    "name": {
      "firstName": "Tarekul"
    },
    "phoneNumber": "01888888899"
  }
  ```
- **Get User Profile:** GET https://api-gate-way-tech-hub.vercel.app/api/v1/profile
  (make sure must have accessToken in headers Authorization)

#### Product Routes

- **Create Product:** POST https://api-gate-way-tech-hub.vercel.app/api/v1/product
  (only admin and Super admin can create product and make sure must have accessToken in headers Authorization)

  ```json
  {
    "category": "6614c8836017d19220c0b280",
    "productName": "ASUS ROG Strix Z590-E Gaming",
    "brand": "ASUS",
    "model": "ROG Strix Z590-E Gaming",
    "productPhoto": "https: //example.com/motherboard.jpg",
    "description": "High-end motherboard for gaming enthusiasts.",
    "keyFeatures": [
      "Supports Intel 11th and 10th Gen processors",
      "PCIe 4.0 support",
      "WiFi 6",
      "Bluetooth 5.1"
    ]
  }
  ```

- **Get Single Product:** GET https://api-gate-way-tech-hub.vercel.app/api/v1/product/6614cd4de63737904728e19c

- **Get Product with Filtering:** GET https://api-gate-way-tech-hub.vercel.app/api/v1/product?searchTerm=ROG Strix Z590-E Gaming&limit=3&sortBy=asc

#### Review and Rating Routes

- **Make Review:** POST https://api-gate-way-tech-hub.vercel.app/api/v1/review
  (only Customer can create Review and make sure must have accessToken in headers Authorization)

  ```json
  {
    "productId": "6614cd4de63737904728e19c",
    "review": "It's good product"
  }
  ```

- **Get Product Reviews:** GET https://api-gate-way-tech-hub.vercel.app/api/v1/review/6614cd4de63737904728e19c
- **Make Rating:** POST https://api-gate-way-tech-hub.vercel.app/api/v1/rating
  (only Customer can create Rating and make sure must have accessToken in headers Authorization)

  ```json
  {
    "productId": "6614cd4de63737904728e19c",
    "review": 4
  }
  ```

#### Order Routes

- **Make Order:** POST https://api-gate-way-tech-hub.vercel.app/api/v1/order
  (only Customer can create order and make sure must have accessToken in headers Authorization)

```json
{
  "products": ["6614ccf3fa5325d9076e1a1c", "6614cd10e01876d138bfb89e"]
}
```

- **Get Specific User Orders:** GET https://api-gate-way-tech-hub.vercel.app/api/v1/order
  (only Customer can get order and make sure must have accessToken in headers Authorization)

- Masum Rana (@masum-rana)



