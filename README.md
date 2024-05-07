# Restaurant Management System API

Manage your restaurants, food items, categories, and user authentication with ease using this RESTful API.

## 🚀 Quick Start

1. **Clone the repository:**

```bash
    git clone https://github.com/your/repository.git
```

2. **Install dependencies:**

```bash
npm install
```

3. **Set up environment variables:Create a `.env` file and configure necessary variables.**

4. **Start the server.**
```bash
npm run dev
```

## 📝 API Documentation
Explore the endpoints and data models:

## 📊 Data Models

- **User**: Represents a user with properties such as username, email, password, address, phone, and user type.
- **Restaurant**: Represents a restaurant with properties such as title, image URL, foods, time, pickup, delivery, and location coordinates.
- **Food**: Represents a food item with properties such as title, description, price, image URL, food tags, category, availability, and associated restaurant.
- **Category**: Represents a food category with properties such as title and image URL.

## 📋 Endpoints

### Authentication
- **POST /register**: Register a new user.
- **POST /login**: Authenticate user login.

### Restaurants
- **POST /restaurants**: Create a new restaurant.
- **GET /restaurants**: Get all restaurants.
- **GET /restaurants/{id}**: Get a specific restaurant by ID.
- **PUT /restaurants/{id}**: Update a restaurant by ID.
- **DELETE /restaurants/{id}**: Delete a restaurant by ID.

### Foods
- **POST /foods**: Create a new food item.
- **GET /foods**: Get all food items.
- **GET /foods/{id}**: Get a specific food item by ID.
- **PUT /foods/{id}**: Update a food item by ID.
- **DELETE /foods/{id}**: Delete a food item by ID.

### Categories
- **POST /categories**: Create a new category.
- **GET /categories**: Get all categories.
- **GET /categories/{id}**: Get a specific category by ID.
- **PUT /categories/{id}**: Update a category by ID.
- **DELETE /categories/{id}**: Delete a category by ID.

### Users
- **GET /users/{id}**: Get user by ID.
- **PUT /users/{id}**: Update user by ID.
- **PUT /users/{id}/password**: Update user password by ID.
- **PUT /users/{id}/reset-password**: Reset user password by ID.
- **DELETE /users/{id}**: Delete user by ID.

---

## 🛠️ Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT for authentication
- Swagger for API documentation

## 📄 License
- This project is licensed under the ISC License.
