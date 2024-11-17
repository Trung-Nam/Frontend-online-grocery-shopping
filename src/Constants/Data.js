const categories = [
    {
        "name": "Fruits & Vegetables",
        "description": "A wide variety of fresh fruits and vegetables",
        "image": "/images/vegetable.png",
        "subcategory": [],
        "status": true
    },
    {
        "name": "Meats & Seafood",
        "description": "Fresh meats and seafood for every taste",
        "image": "/images/barbecue.png",
        "subcategory": [],
        "status": true
    },
    {
        "name": "Breakfast & Dairy",
        "description": "Start your day with fresh breakfast options and dairy products",
        "image": "/images/english-breakfast.png",
        "subcategory": [],
        "status": true
    },
    {
        "name": "Beverages",
        "description": "Refreshing beverages for every occasion",
        "image": "/images/healthy-drink.png",
        "subcategory": [],
        "status": true
    },
    {
        "name": "Breads & Bakery",
        "description": "Freshly baked bread and snacks",
        "image": "/images/bread.png",
        "subcategory": [],
        "status": true
    },
    {
        "name": "Frozen Foods",
        "description": "Frozen food options for convenience and taste",
        "image": "/images/frozen-food.png",
        "subcategory": [],
        "status": true
    },
    {
        "name": "Biscuits & Snacks",
        "description": "Snacks and biscuits for every craving",
        "image": "/images/bar.png",
        "subcategory": [],
        "status": true
    },
    {
        "name": "Grocery & Staples",
        "description": "Essential grocery and staple items",
        "image": "/images/basket.png",
        "subcategory": [],
        "status": true
    }
]


const products = [
    [
        {
            "name": "Organic Almonds",
            "brand": "Nature's Best",
            "description": "Organic almonds, rich in healthy fats, proteins, and vitamins. Perfect for snacking, baking, or adding to your favorite dishes.",
            "price": 12.99,
            "discountPercentage": 15,
            "discountedPrice": 11.04,
            "sku": "ALM12345",
            "category": { "$oid": "6738ae220c97c7bc77cc9ab4" },
            "tags": ["organic", "snack", "nuts", "healthy"],
            "attributes": {
                "type": "Food",
                "manufacturingDate": { "$date": "2023-07-01T00:00:00Z" },
                "shelfLife": 12
            },
            "stock": 250,
            "images": {
                "primary": "/images/products/Organic Almonds.jpg",
                "thumbnails": [
                    "/images/products/Organic Almonds 2.jpg",
                    "/images/products/Organic Almonds 3.jpg",
                    "/images/products/Organic Almonds 4.jpg",
                    "/images/products/Organic Almonds 5.jpg",
                    "/images/products/Organic Almonds 6.jpg",
                    "/images/products/Organic Almonds 7.jpg",
                    "/images/products/Organic Almonds 8.jpg"
                ]
            },
            "reviews": [],
            "recommended": true,
            "createdAt": { "$date": "2024-11-16T00:00:00Z" },
            "updatedAt": { "$date": "2024-11-16T00:00:00Z" }
        },
        {
            "name": "Fresh Organic Bananas",
            "brand": "Tropical Harvest",
            "description": "Fresh organic bananas, naturally ripened and perfect for snacking or smoothies.",
            "price": 2.49,
            "discountPercentage": 10,
            "discountedPrice": 2.24,
            "sku": "BAN12345",
            "category": { "$oid": "6738ae220c97c7bc77cc9aad" },
            "tags": ["organic", "fruit", "healthy"],
            "attributes": {
                "type": "Food",
                "manufacturingDate": { "$date": "2024-11-01T00:00:00Z" },
                "shelfLife": 7
            },
            "stock": 500,
            "images": {
                "primary": "/images/products/fresh-organic-bananas.jpg",
                "thumbnails": [
                    "/images/products/fresh-organic-bananas 2.jpg",
                    "/images/products/fresh-organic-bananas 3.jpg",
                    "/images/products/fresh-organic-bananas 4.jpg"
                ]
            },
            "reviews": [],
            "recommended": true,
            "createdAt": { "$date": "2024-11-16T00:00:00Z" },
            "updatedAt": { "$date": "2024-11-16T00:00:00Z" }
        },
        {
            "name": "Fresh Atlantic Salmon",
            "brand": "Ocean's Delight",
            "description": "Premium-quality fresh Atlantic salmon, rich in omega-3 fatty acids.",
            "price": 19.99,
            "discountPercentage": 20,
            "discountedPrice": 15.99,
            "sku": "SALM12345",
            "category": { "$oid": "6738ae220c97c7bc77cc9aae" },
            "tags": ["seafood", "fresh", "healthy"],
            "attributes": {
                "type": "Food",
                "manufacturingDate": { "$date": "2024-11-12T00:00:00Z" },
                "shelfLife": 3
            },
            "stock": 100,
            "images": {
                "primary": "/images/products/Fresh-Atlantic-Salmon-1.jpg",
                "thumbnails": [
                    "/images/products/Fresh-Atlantic-Salmon-2.jpg",
                    "/images/products/Fresh-Atlantic-Salmon-3.jpg",
                    "/images/products/Fresh-Atlantic-Salmon-4.jpg",
                    "/images/products/Fresh-Atlantic-Salmon-5.jpg"
                ]
            },
            "reviews": [],
            "recommended": true,
            "createdAt": { "$date": "2024-11-16T00:00:00Z" },
            "updatedAt": { "$date": "2024-11-16T00:00:00Z" }
        },
        {
            "name": "Greek Yogurt",
            "brand": "Healthy Choice",
            "description": "Creamy and nutritious Greek yogurt, high in protein and probiotics.",
            "price": 4.99,
            "discountPercentage": 15,
            "discountedPrice": 4.24,
            "sku": "GYOG12345",
            "category": { "$oid": "6738ae220c97c7bc77cc9aaf" },
            "tags": ["dairy", "protein", "healthy"],
            "attributes": {
                "type": "Food",
                "manufacturingDate": { "$date": "2024-11-10T00:00:00Z" },
                "shelfLife": 14
            },
            "stock": 300,
            "images": {
                "primary": "/images/products/Greek-Yogurt-1.jpg",
                "thumbnails": [
                    "/images/products/Greek-Yogurt-2.jpg",
                    "/images/products/Greek-Yogurt-3.jpg",
                    "/images/products/Greek-Yogurt-4.jpg"
                ]
            },
            "reviews": [],
            "recommended": true,
            "createdAt": { "$date": "2024-11-16T00:00:00Z" },
            "updatedAt": { "$date": "2024-11-16T00:00:00Z" }
        },
        {
            "name": "Cold Brew Coffee",
            "brand": "BrewMasters",
            "description": "Rich and smooth cold brew coffee made with premium Arabica beans.",
            "price": 3.99,
            "discountPercentage": 5,
            "discountedPrice": 3.79,
            "sku": "BREW12345",
            "category": { "$oid": "6738ae220c97c7bc77cc9ab0" },
            "tags": ["coffee", "beverage", "refreshing"],
            "attributes": {
                "type": "Drink",
                "manufacturingDate": { "$date": "2024-11-01T00:00:00Z" },
                "shelfLife": 60
            },
            "stock": 400,
            "images": {
                "primary": "/images/products/Cold-Brew-Coffee.jpg",
                "thumbnails": [
                    "/images/products/Cold-Brew-Coffee-1.jpg",
                    "/images/products/Cold-Brew-Coffee-2.jpg",
                    "/images/products/Cold-Brew-Coffee-3.jpg",
                    "/images/products/Cold-Brew-Coffee-4.jpg"
                ]
            },
            "reviews": [],
            "recommended": true,
            "createdAt": { "$date": "2024-11-16T00:00:00Z" },
            "updatedAt": { "$date": "2024-11-16T00:00:00Z" }
        },
        {
            "name": "Sourdough Bread",
            "brand": "Artisan Bakes",
            "description": "Freshly baked sourdough bread with a tangy flavor and crusty texture.",
            "price": 4.49,
            "discountPercentage": 10,
            "discountedPrice": 4.04,
            "sku": "BREAD12345",
            "category": { "$oid": "6738ae220c97c7bc77cc9ab1" },
            "tags": ["bread", "fresh", "bakery"],
            "attributes": {
                "type": "Food",
                "manufacturingDate": { "$date": "2024-11-15T00:00:00Z" },
                "shelfLife": 3
            },
            "stock": 150,
            "images": {
                "primary": "/images/products/Sourdough-Bread.jpg",
                "thumbnails": [
                    "/images/products/Sourdough-Bread-1.jpg",
                    "/images/products/Sourdough-Bread-2.jpg",
                    "/images/products/Sourdough-Bread-3.jpg",
                    "/images/products/Sourdough-Bread-4.jpg",
                    "/images/products/Sourdough-Bread-5.jpg"
                ]
            },
            "reviews": [],
            "recommended": true,
            "createdAt": { "$date": "2024-11-16T00:00:00Z" },
            "updatedAt": { "$date": "2024-11-16T00:00:00Z" }
        },
        {
            "name": "Frozen Mixed Vegetables",
            "brand": "McCain",
            "description": "A blend of frozen carrots, peas, and beans to make quick, healthy meals.",
            "price": 5.99,
            "discountPercentage": 20,
            "discountedPrice": 4.79,
            "sku": "FROZ12345",
            "category": { "$oid": "6738ae220c97c7bc77cc9ab2" },
            "tags": ["frozen", "vegetables", "healthy"],
            "attributes": {
                "type": "Frozen Food",
                "manufacturingDate": { "$date": "2024-10-01T00:00:00Z" },
                "shelfLife": 360
            },
            "stock": 600,
            "images": {
                "primary": "/images/products/Frozen-Mixed-Vegetables.jpg",
                "thumbnails": [
                    "/images/products/Frozen-Mixed-Vegetables-1.jpg",
                    "/images/products/Frozen-Mixed-Vegetables-2.jpg"
                ]
            },
            "reviews": [],
            "recommended": true,
            "createdAt": { "$date": "2024-11-16T00:00:00Z" },
            "updatedAt": { "$date": "2024-11-16T00:00:00Z" }
        },
        {
            "name": "Chocolate Chip Cookies",
            "brand": "Member's Mark",
            "description": "Delicious and crispy chocolate chip cookies perfect for any occasion.",
            "price": 3.99,
            "discountPercentage": 10,
            "discountedPrice": 3.59,
            "sku": "COOKIE12345",
            "category": { "$oid": "67375d08173bcfc48e2e80a7" },
            "tags": ["snack", "cookies", "sweet"],
            "attributes": {
                "type": "Food",
                "manufacturingDate": { "$date": "2024-10-15T00:00:00Z" },
                "shelfLife": 120
            },
            "stock": 600,
            "images": {
                "primary": "/images/products/Chocolate-Chip-Cookies.jpg",
                "thumbnails": [
                    "/images/products/Chocolate-Chip-Cookies-1.jpg",
                    "/images/products/Chocolate-Chip-Cookies-2.jpg",
                    "/images/products/Chocolate-Chip-Cookies-3.jpg",
                    "/images/products/Chocolate-Chip-Cookies-4.jpg"
                ]
            },
            "reviews": [],
            "recommended": true,
            "createdAt": { "$date": "2024-11-16T00:00:00Z" },
            "updatedAt": { "$date": "2024-11-16T00:00:00Z" }
        },
        {
            "name": "Basmati Rice",
            "brand": "DAAWAT",
            "description": "Premium-quality basmati rice, perfect for traditional and modern recipes.",
            "price": 12.99,
            "discountPercentage": 15,
            "discountedPrice": 11.04,
            "sku": "RICE12345",
            "category": { "$oid": "6738ae220c97c7bc77cc9ab4" },
            "tags": ["staples", "rice", "premium"],
            "attributes": {
                "type": "Food",
                "manufacturingDate": { "$date": "2024-09-01T00:00:00Z" },
                "shelfLife": 365
            },
            "stock": 800,
            "images": {
                "primary": "/images/products/Basmati-Rice.jpg",
                "thumbnails": [
                    "/images/products/Basmati-Rice-1.jpg",
                    "/images/products/Basmati-Rice-2.jpg",
                    "/images/products/Basmati-Rice-3.jpg",
                    "/images/products/Basmati-Rice-4.jpg",
                    "/images/products/Basmati-Rice-5.jpg"
                ]
            },
            "reviews": [],
            "recommended": true,
            "createdAt": { "$date": "2024-11-16T00:00:00Z" },
            "updatedAt": { "$date": "2024-11-16T00:00:00Z" }
        }
        
    ]
    
    
    
    
    





]

export default { categories, products }