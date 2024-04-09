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

![Architecture Diagram](https://drive.google.com/file/d/1uHGXmPcvCzuoMtaQLprFUnWzfZd1c-7W/view?usp=sharing)

## Usage

### Super Admin Login
- **Email:** masum.rana6267@gmail.com
- **Password:** 123456
- **Access Token:** eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjEzZjBkOTg0OTFkMjBmYjgyMGRiNTQiLCJyb2xlIjoic3VwZXJfYWRtaW4iLCJlbWFpbCI6Im1hc3VtLnJhbmE2MjY3QGdtYWlsLmNvbSIsImlhdCI6MTcxMjY4ODgwOCwiZXhwIjoxNzE0MDAyODA4fQ.h27FNGeRxX3l1_n25HpjrX8ZtkSDgo9pQmNbHA_hicg

### Customer Login
- **Email:** Hossain123@gmail.com
- **Password:** 123456
- **Access Token:** eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjE1OGU2MTZkMTVkYWE0MDVhMGIwYTAiLCJyb2xlIjoiY3VzdG9tZXIiLCJlbWFpbCI6Imhvc3NhaW4xMjNAZ21haWwuY29tIiwiaWF0IjoxNzEyNjg4NzQwLCJleHAiOjE3MTQwMDI3NDB9.qCtcvs9VELADIVbSaoh2ZpHWln85HJhhlPIrmzfCirk

#### Authentication Routes
- **Login:** POST https://api-gate-way-tech-hub.vercel.app/api/v1/auth/login
- **Admin Registration:** POST https://api-gate-way-tech-hub.vercel.app/Api/v1/auth/admin/registration
- **Customer Registration:** POST https://api-gate-way-tech-hub.vercel.app/api/v1/auth/customer/registration
- **Refresh Token:** POST https://api-gate-way-tech-hub.vercel.app/api/v1/auth/refresh-token
- **Change Password:** POST https://api-gate-way-tech-hub.vercel.app/api/v1/auth/change-password

#### Profile Routes
- **Update Profile:** PATCH https://api-gate-way-tech-hub.vercel.app/api/v1/profile
- **Get User Profile:** GET https://api-gate-way-tech-hub.vercel.app/api/v1/profile

#### Product Routes
- **Create Product:** POST https://api-gate-way-tech-hub.vercel.app/api/v1/product
- **Get Single Product:** GET https://api-gate-way-tech-hub.vercel.app/api/v1/product/:productId
- **Get Product with Filtering:** GET https://api-gate-way-tech-hub.vercel.app/api/v1/product?searchTerm=&limit=&sortBy=

#### Review and Rating Routes
- **Make Review:** POST https://api-gate-way-tech-hub.vercel.app/api/v1/review
- **Get Product Reviews:** GET https://api-gate-way-tech-hub.vercel.app/api/v1/review/:productId
- **Make Rating:** POST https://api-gate-way-tech-hub.vercel.app/api/v1/rating

#### Order Routes
- **Make Order:** POST https://api-gate-way-tech-hub.vercel.app/api/v1/order
- **Get Specific User Orders:** GET https://api-gate-way-tech-hub.vercel.app/api/v1/order

## Development
To set up the project locally:
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up environment variables.
4. Run `npm start` to start the server.

## Contributors
- Masum Rana (@masum-rana)

## License
This project is licensed under the [MIT License](LICENSE).


