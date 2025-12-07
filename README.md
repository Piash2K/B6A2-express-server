# Vehicle Rental System 🚗

A **backend API** for managing vehicle rentals, bookings, and users with role-based access control. Built with **Node.js, TypeScript, Express, and PostgreSQL**, this system supports both **Admin** and **Customer** roles, allowing secure and efficient vehicle rental management.

---

## **Live Deployment**
[Vehicle Rental System Live](https://b6-a2-express-server.vercel.app/)
---

## **GitHub Repository**

[GitHub Repo Link](https://github.com/Piash2K/B6A2-express-server.git)
---

## **Features**

- **Authentication & Authorization**
  - User registration and login with JWT authentication
  - Role-based access control (Admin & Customer)
  - Passwords hashed using bcrypt

- **Vehicle Management (Admin Only)**
  - Create, read, update, and delete vehicles
  - Track availability status (`available` or `booked`)

- **User Management**
  - Admin: view all users, update roles, delete users
  - Customer: view and update own profile

- **Booking Management**
  - Customers can create bookings with automatic price calculation
  - Admin can mark bookings as `returned`
  - Customers can cancel bookings before the start date
  - System auto-marks bookings as `returned` after end date
  - Vehicle status updates automatically (`booked` → `available`)

- **Role-Based API Access**
  - Admin: full system access
  - Customer: manage own bookings and profile

---

## **Technology Stack**

- **Backend:** Node.js, TypeScript, Express.js
- **Database:** PostgreSQL
- **Authentication:** JWT, bcrypt
- **Tools & Libraries:**  
  - dotenv (environment variables)   
  - pg (PostgreSQL client)  

---

## **Database Tables**

### Users
| Field    | Notes                                   |
|----------|----------------------------------------|
| id       | Auto-generated                          |
| name     | Required                                |
| email    | Required, unique, lowercase             |
| password | Required, min 6 characters              |
| phone    | Required                                |
| role     | 'admin' or 'customer'                   |

### Vehicles
| Field                | Notes                                   |
|----------------------|----------------------------------------|
| id                   | Auto-generated                          |
| vehicle_name         | Required                                |
| type                 | 'car', 'bike', 'van', 'SUV'            |
| registration_number  | Required, unique                        |
| daily_rent_price     | Required, positive                      |
| availability_status  | 'available' or 'booked'                 |

### Bookings
| Field           | Notes                                           |
|-----------------|------------------------------------------------|
| id              | Auto-generated                                  |
| customer_id     | Links to Users table                            |
| vehicle_id      | Links to Vehicles table                         |
| rent_start_date | Required                                        |
| rent_end_date   | Required, must be after start date             |
| total_price     | Required, positive                              |
| status          | 'active', 'cancelled', or 'returned'           |

---

## **API Endpoints**

### Authentication
- **POST** `/api/v1/auth/signup` – Register a new user  
- **POST** `/api/v1/auth/signin` – Login and receive JWT token  

### Vehicles
- **POST** `/api/v1/vehicles` – Admin only, create vehicle  
- **GET** `/api/v1/vehicles` – Public, view all vehicles  
- **GET** `/api/v1/vehicles/:vehicleId` – Public, view specific vehicle  
- **PUT** `/api/v1/vehicles/:vehicleId` – Admin only, update vehicle  
- **DELETE** `/api/v1/vehicles/:vehicleId` – Admin only, delete vehicle  

### Users
- **GET** `/api/v1/users` – Admin only, view all users  
- **PUT** `/api/v1/users/:userId` – Admin or self, update user  
- **DELETE** `/api/v1/users/:userId` – Admin only, delete user  

### Bookings
- **POST** `/api/v1/bookings` – Customer/Admin, create booking  
- **GET** `/api/v1/bookings` – Role-based: Admin sees all, Customer sees own  
- **PUT** `/api/v1/bookings/:bookingId` – Role-based: Customer cancels, Admin marks returned  

---

## **Setup & Usage**

1. **Clone the repository**
```bash
git clone https://github.com/Piash2K/B6A2-express-server.git
cd B6A2-express-server
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables** (`.env`)
```
PORT=5000
DATABASE_URL=your_postgres_connection_string
JWT_SECRET=your_jwt_secret
```

4. **Run the server**
```bash
npm run dev
```

5. **Test API**
- Use Postman or any API client to interact with endpoints.
- Include JWT token in headers for protected routes:
```
Authorization: Bearer <your_jwt_token>
```



---

## **Author**

Piash Islam – Junior MERN Stack Developer  
[LinkedIn](https://www.linkedin.com/in/piash-islam) | [GitHub](https://github.com/piash2k)

---
