import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
// Define the items interface locally since '@angular/items.model' cannot be found
export interface items {
  
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  brand: string;
  availabilityStatus: string;
  stock: number;
  images: string[];
  rating:number;



}

@Component({
  selector: 'app-minicart',
  imports: [CommonModule,],
  templateUrl: './minicart.component.html',
  styleUrl: './minicart.component.css'
})
export class MinicartComponent {


items: items[] = [
  {"id": 1,
      "title": "Essence Mascara Lash Princess",
      "price": 9.99,
      "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      "category": "beauty",
      "brand": "Essence",
      "availabilityStatus": "In Stock",
      "stock": 99,
      "images": [
        "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
      ],
      "rating":4.0
    },
    {
      "id": 2,
      "title": "Eyeshadow Palette with Mirror",
      "price": 19.99,
      "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
      "category": "beauty",
      "brand": "Glamour Beauty",
      "availabilityStatus": "In Stock",
      "stock": 34,
      "images": [
        "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp"
      ],
      "rating":3.0
    },
    {
      "id": 3,
      "title": "Powder Canister",
      "price": 14.99,
      "description": "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
      "category": "beauty",
      "brand": "Velvet Touch",
      "availabilityStatus": "In Stock",
      "stock": 89,
      "images": [
        "https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp"
      ],
      "rating":2.5
    },
    {
      "id": 4,
      "title": "Red Lipstick",
      "price": 12.99,
      "description": "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
      "category": "beauty",
      "brand": "Chic Cosmetics",
      "availabilityStatus": "In Stock",
      "stock": 91,
      "images": [
        "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp"
      ],
      "rating":4.5
    },
    {
      "id": 5,
      "title": "Red Nail Polish",
      "price": 8.99,
      "description": "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
      "category": "beauty",
      "brand": "Nail Couture",
      "availabilityStatus": "In Stock",
      "stock": 79,
      "images": [
        "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp"
      ],
      "rating":1.9
    },
    {
      "id": 6,
      "title": "Calvin Klein CK One",
      "price": 49.99,
      "description": "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
      "category": "fragrances",
      "brand": "Calvin Klein",
      "availabilityStatus": "In Stock",
      "stock": 29,
      "images": [
        "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/2.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/3.webp"
      ],
      "rating":3.8
    },
    {
      "id": 7,
      "title": "Chanel Coco Noir Eau De",
      "price": 129.99,
      "description": "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
      "category": "fragrances",
      "brand": "Chanel",
      "availabilityStatus": "In Stock",
      "stock": 58,
      "images": [
        "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/1.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/2.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/3.webp"
      ],
      "rating":4.6
    },
    {
      "id": 8,
      "title": "Dior J'adore",
      "price": 89.99,
      "description": "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
      "category": "fragrances",
      "brand": "Dior",
      "availabilityStatus": "In Stock",
      "stock": 98,
      "images": [
        "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/1.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/2.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/3.webp"
      ],
      "rating":2.6
    },
    {
      "id": 9,
      "title": "Dolce Shine Eau de",
      "price": 69.99,
      "description": "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
      "category": "fragrances",
      "brand": "Dolce & Gabbana",
      "availabilityStatus": "Low Stock",
      "stock": 4,
      "images": [
        "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/1.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/2.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/3.webp"
      ],
      "rating":3.0
    },
    {
      "id": 10,
      "title": "Gucci Bloom Eau de",
      "price": 79.99,
      "description": "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
      "category": "fragrances",
      "brand": "Gucci",
      "availabilityStatus": "In Stock",
      "stock": 91,
      "images": [
        "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/1.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/2.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/3.webp"
      ],
      "rating":3.0
    }
]
cartCount:number = 0;
  addtocart(index:number){
    if (this.items[index].stock >0){
    this.cartCount++;
    this.items[index].stock--;
  }
  else{
    alert("product is unavalible in the stock");
  }
}
}
