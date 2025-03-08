// src/pages/ProductDetails.js
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
import Footer from "../components/Footer"; // Adjust path if needed

// ----- Example local images for Dogs -----
import dogfood1 from "../images/dogfood1.jpg";
import dogfood2 from "../images/dogfood2.jpg";
import dogfood3 from "../images/dogfood3.png";
import dogfood4 from "../images/dogfood4.jpg";

import dogtoy1 from "../images/dogtoy1.jpg";
import dogtoy2 from "../images/dogtoy2.jpg";
import dogtoy3 from "../images/dogtoy3.jpg";

import doggroom1 from "../images/doggroom1.jpg";
import doggroom2 from "../images/doggroom2.jpg";
import doggroom3 from "../images/doggroom3.jpg";

import doghealth1 from "../images/doghealth1.jpg";
import doghealth2 from "../images/doghealth2.jpg";
import doghealth3 from "../images/doghealth3.jpg";
import doghealth4 from "../images/doghealth4.jpg";

import dogaccessories1 from "../images/dogaccessories1.jpg";
import dogaccessories2 from "../images/dogaccessories2.jpg";
import dogaccessories3 from "../images/dogaccessories3.jpg";

import dogbio1 from "../images/dogbio1.jpg";
import dogbio2 from "../images/dogbio2.jpg";
import dogbio3 from "../images/dogbio3.jpg";

// ----- Example local images for Cats -----
import catfood1 from "../images/catfood1.jpg";
import catfood2 from "../images/catfood2.jpg";
import catfood3 from "../images/catfood3.jpg";
import catfood4 from "../images/catfood4.jpg";

import cattoy1 from "../images/cattoy1.jpg";
import cattoy2 from "../images/cattoy2.jpg";
import cattoy3 from "../images/cattoy3.jpg";
import cattoy4 from "../images/cattoy4.jpg";

import catgroom1 from "../images/catgroom1.jpg";
import catgroom2 from "../images/catgroom2.jpg";
import catgroom3 from "../images/catgroom3.jpg";

import cataccessories1 from "../images/cataccessories1.jpg";
import cataccessories2 from "../images/cataccessories2.jpg";
import cataccessories3 from "../images/cataccessories3.jpg";
import cataccessories4 from "../images/cataccessories4.jpg";

import cathealth1 from "../images/cathealth1.jpg";
import cathealth2 from "../images/cathealth2.jpg";
import cathealth3 from "../images/cathealth3.jpg";
import cathealth4 from "../images/cathealth4.jpg";

/**
 * Unified array of products from Dogs, Cats, Birds, and Fish pages,
 * with additional fields added to each product.
 */
const allProducts = [
  // =================== DOG PRODUCTS ===================
  {
    id: 1,
    category: "Dogs",
    name: "Drools",
    price: 225.99,
    image: dogfood1,
    description:
      "Build lean muscle and promote overall health with Drools Chicken and Egg Adult Formula. High in protein, vitamins, and minerals.",
    additionalDetails:
      "Extended Description: This product is excellent because it is formulated with premium chicken and eggs, ensuring a balanced diet for your dog.",
    keyBenefits: [
      "High-quality protein source",
      "Rich in vitamins and minerals",
      "Supports lean muscle growth",
    ],
    composition:
      "Composed of natural ingredients including chicken, eggs, and a blend of essential vitamins and minerals.",
    unitsSold: 150,
    rating: 4.3,
  },
  {
    id: 2,
    category: "Dogs",
    name: "pedigree",
    price: 118.99,
    image: dogfood2,
    description:
      "Pedigree is a complete and balanced food for dogs, rich in proteins and nutrition.",
    additionalDetails:
      "Detailed description for Pedigree complete and balanced food for dogs.",
    keyBenefits: [
      "Rich in proteins",
      "Balanced nutrition",
      "Promotes healthy growth",
    ],
    composition:
      "Ingredients include meat, grains, and essential vitamins.",
    unitsSold: 420,
    rating: 4.1,
  },
  {
    id: 3,
    category: "Dogs",
    name: "henlo",
    price: 118.99,
    image: dogfood3,
    description:
      "A complete and balanced everyday meal with simple, essential ingredients for holistic nutrition.",
    additionalDetails:
      "Detailed description for Henlo everyday meal with essential ingredients.",
    keyBenefits: [
      "Simple ingredients",
      "Balanced nutrition",
      "Great taste",
    ],
    composition:
      "Composed of high-quality proteins and essential nutrients.",
    unitsSold: 100,
    rating: 3.9,
  },
  {
    id: 4,
    category: "Dogs",
    name: "supercoat",
    price: 118.99,
    image: dogfood4,
    description:
      "Specifically formulated to meet the nutritional requirements of adult dogs.",
    additionalDetails:
      "Detailed description for Supercoat specialized formula for adult dogs.",
    keyBenefits: [
      "Nutritionally balanced",
      "Specifically formulated for adults",
      "Promotes coat health",
    ],
    composition:
      "Contains vitamins, minerals, and essential fatty acids.",
    unitsSold: 250,
    rating: 4.2,
  },
  {
    id: 5,
    category: "Dogs",
    name: "Chew Toy",
    price: 132.99,
    image: dogtoy1,
    description:
      "Durable chew toy designed to promote dental health.",
    additionalDetails:
      "Detailed description for Chew Toy designed to promote dental health.",
    keyBenefits: [
      "Durable design",
      "Promotes dental health",
      "Fun for play",
    ],
    composition:
      "Made from safe, non-toxic rubber.",
    unitsSold: 90,
    rating: 4.0,
  },
  {
    id: 6,
    category: "Dogs",
    name: "Basil Tyre Rope Toy",
    price: 132.99,
    image: dogtoy2,
    description:
      "Ideal for active dogs who love tugging and chewing.",
    additionalDetails:
      "Detailed description for Basil Tyre Rope Toy for active dogs.",
    keyBenefits: [
      "Durable material",
      "Encourages active play",
      "Promotes dental health",
    ],
    composition:
      "Constructed with reinforced rope and durable fabric.",
  },
  {
    id: 7,
    category: "Dogs",
    name: "Ball Rubber Small Chew Toy",
    price: 132.99,
    image: dogtoy3,
    description:
      "Treat Dispensing Ball Rubber Small Chew Toy.",
    additionalDetails:
      "Detailed description for Ball Rubber Small Chew Toy that dispenses treats.",
    keyBenefits: [
      "Interactive play",
      "Durable",
      "Encourages chewing",
    ],
    composition:
      "Made of high-quality rubber.",
  },
  {
    id: 9,
    category: "Dogs",
    name: "Dogs Grooming Kit",
    price: 679.99,
    image: doggroom1,
    description:
      "Dog Shampoo Brush 80ml, Nail Cutter, Tooth Brush, and Glove for Puppy & Cat.",
    additionalDetails:
      "Detailed description for Dogs Grooming Kit including shampoo, brush, nail cutter, and more.",
    keyBenefits: [
      "Complete grooming kit",
      "Easy to use",
      "Keeps pets clean",
    ],
    composition:
      "Includes shampoo, brush, nail cutter, and other essential tools.",
  },
  {
    id: 10,
    category: "Dogs",
    name: "RENESMEE",
    price: 679.99,
    image: doggroom2,
    description:
      "Dematting Comb for Dog & Cat, Pet Grooming Rake & Brushes for all Hair Types.",
    additionalDetails:
      "Detailed description for RENESMEE dematting comb for pet grooming.",
    keyBenefits: [
      "Effective dematting",
      "Suitable for all hair types",
      "Ergonomic design",
    ],
    composition:
      "Made from durable plastic and stainless steel teeth.",
  },
  {
    id: 11,
    category: "Dogs",
    name: "Dog Shampoo",
    price: 679.99,
    image: doggroom3,
    description:
      "Pet 5-in-1 Grooming Combo for Dogs, Cats, and Puppies.",
    additionalDetails:
      "Detailed description for Dog Shampoo 5-in-1 grooming combo.",
    keyBenefits: [
      "Multi-purpose",
      "Gentle on skin",
      "Promotes healthy coat",
    ],
    composition:
      "Formulated with natural ingredients and essential oils.",
  },
  {
    id: 13,
    category: "Dogs",
    name: "Homeopathy Medicines for Dogs",
    price: 322.99,
    image: doghealth1,
    description:
      "Natural Solutions for Common Canine Ailments.",
    additionalDetails:
      "Detailed description for Homeopathy Medicines designed for canine ailments.",
    keyBenefits: [
      "Natural remedy",
      "Safe for daily use",
      "Supports overall health",
    ],
    composition:
      "Contains homeopathic ingredients and natural extracts.",
  },
  {
    id: 14,
    category: "Dogs",
    name: "Entero Chronic",
    price: 322.99,
    image: doghealth2,
    description:
      "Vivaldis Entero Chronic Pre Probiotics Gut Health Powder for Dogs and Cats.",
    additionalDetails:
      "Detailed description for Entero Chronic pre-probiotics for gut health.",
    keyBenefits: [
      "Supports digestive health",
      "Improves gut flora",
      "Easy to administer",
    ],
    composition:
      "Contains prebiotics and natural fiber sources.",
  },
  {
    id: 15,
    category: "Dogs",
    name: "The K9 Store",
    price: 322.99,
    image: doghealth3,
    description:
      "The K9 Store Prebiotics & Probiotics for Dogs & Cats - Dog Gut Health Supplement.",
    additionalDetails:
      "Detailed description for The K9 Store prebiotics & probiotics supplement.",
    keyBenefits: [
      "Improves gut health",
      "Enhances digestion",
      "Supports immune function",
    ],
    composition:
      "Blend of probiotics, prebiotics, and natural enzymes.",
  },
  {
    id: 16,
    category: "Dogs",
    name: "2Pcs Dog Toothbrush",
    price: 322.99,
    image: doghealth4,
    description:
      "Zibuyu 2Pcs Dog Toothbrush with Tongue Scraper & Storage Box.",
    additionalDetails:
      "Detailed description for 2Pcs Dog Toothbrush with tongue scraper.",
    keyBenefits: [
      "Promotes dental hygiene",
      "Dual functionality",
      "Easy to clean",
    ],
    composition:
      "Constructed with BPA-free plastic and nylon bristles.",
  },
  {
    id: 17,
    category: "Dogs",
    name: "Tie-Out Cable",
    price: 214.99,
    image: dogaccessories1,
    description:
      "Keep your dog in a designated area with the AmazonBasics Tie-Out Cable (41kg/7.6m).",
    additionalDetails:
      "Detailed description for Tie-Out Cable to keep your dog safely contained.",
    keyBenefits: [
      "Sturdy and durable",
      "Provides control",
      "Easy to use",
    ],
    composition:
      "Made from heavy-duty resin and reinforced material.",
  },
  {
    id: 18,
    category: "Dogs",
    name: "Vigourholistic Pet Dog Mask",
    price: 214.99,
    image: dogaccessories2,
    description:
      "Size-5 Dog Muzzle for Large Breeds, providing a secure & comfortable fit.",
    additionalDetails:
      "Detailed description for Vigourholistic Dog Mask designed for large breeds.",
    keyBenefits: [
      "Secure fit",
      "Comfortable",
      "High-quality material",
    ],
    composition:
      "Made from premium fabric and adjustable straps.",
  },
  {
    id: 19,
    category: "Dogs",
    name: "PetVogue Dog Harness",
    price: 214.99,
    image: dogaccessories3,
    description:
      "SMALL DOG HARNESS for ~5-9 kg dogs. Perfect for Yorkie, Chihuahua, Pug, etc.",
    additionalDetails:
      "Detailed description for PetVogue Dog Harness for small dogs.",
    keyBenefits: [
      "Perfect fit for small breeds",
      "Durable material",
      "Comfortable design",
    ],
    composition:
      "Made from lightweight yet strong fabric.",
  },
  {
    id: 90,
    category: "Dogs",
    name: "Kolan Biodegradable Pet Wipes",
    price: 415.99,
    image: dogbio1,
    description:
      "Say Goodbye to Dirt and Bacteria with Kolan Pet Wipes (60pcs).",
    additionalDetails:
      "Detailed description for Kolan Biodegradable Pet Wipes.",
    keyBenefits: [
      "Eco-friendly",
      "Effective cleaning",
      "Gentle on skin",
    ],
    composition:
      "Biodegradable materials and eco-safe ingredients.",
  },
  {
    id: 91,
    category: "Dogs",
    name: "BarkButler x FOFOS Poop Bag Refills",
    price: 318.99,
    image: dogbio2,
    description:
      "Made from resin for a more eco-friendly disposal. Each bag measures 32 x 23 cm.",
    additionalDetails:
      "Detailed description for BarkButler x FOFOS Poop Bag Refills.",
    keyBenefits: [
      "Environmentally friendly",
      "Durable",
      "Convenient",
    ],
    composition:
      "Made from eco-friendly resin materials.",
  },
  {
    id: 92,
    category: "Dogs",
    name: "PetVit Pet Sanitizer With Neem Oil",
    price: 318.99,
    image: dogbio3,
    description:
      "Alcohol-free sanitizer with citronella, neem & eucalyptus oils—safe for daily use.",
    additionalDetails:
      "Detailed description for PetVit Pet Sanitizer with Neem Oil.",
    keyBenefits: [
      "Alcohol-free",
      "Safe for pets",
      "Effective cleaning",
    ],
    composition:
      "Infused with citronella, neem, and eucalyptus oils.",
  },
  // =================== CAT PRODUCTS ===================
  {
    id: 101,
    category: "Cats",
    name: "Premium Dry Food for Adult Persian Cats",
    price: 200.99,
    image: catfood2,
    description:
      "Give your Persian cat the best nutrition with our specially formulated dry food designed for their unique dietary needs.",
    additionalDetails:
      "Detailed description for Premium Dry Food designed specifically for Persian Cats.",
    keyBenefits: [
      "Tailored for Persian dietary needs",
      "Rich in nutrients",
      "Delicious taste",
    ],
    composition:
      "Formulated with high-quality protein, grains, and vitamins.",
    unitsSold: 0,
    rating: 0,
  },
  {
    id: 102,
    category: "Cats",
    name: "Delicious Chicken in Gravy Wet Food for Cats",
    price: 155.99,
    image: catfood4,
    description:
      "A Wholesome, Protein-Packed Meal for Happy & Healthy Cats.",
    additionalDetails:
      "Detailed description for Delicious Chicken in Gravy Wet Food for Cats.",
    keyBenefits: [
      "Moist and tasty",
      "Balanced nutrition",
      "High protein",
    ],
    composition:
      "Made with real chicken and a blend of natural ingredients.",
  },
  {
    id: 103,
    category: "Cats",
    name: "Premium Ocean Fish Dry Food for Adult Cats",
    price: 155.99,
    image: catfood3,
    description:
      "A Wholesome, Nutrient-Rich Diet for Cats of All Breeds.",
    additionalDetails:
      "Detailed description for Premium Ocean Fish Dry Food for Adult Cats.",
    keyBenefits: [
      "Rich in omega fatty acids",
      "Supports skin and coat health",
      "Nutrient dense",
    ],
    composition:
      "Contains high-quality fish proteins and essential nutrients.",
  },
  {
    id: 104,
    category: "Cats",
    name: "Farmina Vet Life Rena",
    price: 155.99,
    image: catfood1,
    description:
      "Specialized Dietetic Food for Cats—Support Your Cat’s Kidney Health with a Scientifically Formulated Renal Diet.",
    additionalDetails:
      "Detailed description for Farmina Vet Life Rena renal diet for cats.",
    keyBenefits: [
      "Specialized renal support",
      "Scientifically formulated",
      "Balanced nutrition",
    ],
    composition:
      "Formulated with reduced phosphorus and high-quality proteins.",
  },
  {
    id: 105,
    category: "Cats",
    name: "Catnip mouse Toy",
    price: 47.99,
    image: cattoy4,
    description:
      "Fun toy infused with catnip to keep your cat entertained.",
    additionalDetails:
      "Detailed description for Catnip Mouse Toy infused with catnip.",
    keyBenefits: [
      "Infused with catnip",
      "Encourages play",
      "Safe and fun",
    ],
    composition:
      "Made from durable, pet-safe materials.",
  },
  {
    id: 106,
    category: "Cats",
    name: "Interactive Floppy Fish Toy for Cats",
    price: 50.14,
    image: cattoy1,
    description:
      "Keep your feline friend entertained with this realistic, motion-activated fish toy!",
    additionalDetails:
      "Detailed description for Interactive Floppy Fish Toy that activates on movement.",
    keyBenefits: [
      "Motion-activated",
      "Engaging play",
      "Interactive fun",
    ],
    composition:
      "Constructed from durable plastic and soft fabric.",
  },
  {
    id: 107,
    category: "Cats",
    name: "Matatabi Wood Interactive Dental Toy",
    price: 50.14,
    image: cattoy2,
    description:
      "A Fun & Healthy Way to Keep Your Cat Engaged!",
    additionalDetails:
      "Detailed description for Matatabi Wood Interactive Dental Toy.",
    keyBenefits: [
      "Promotes dental health",
      "Natural material",
      "Interactive design",
    ],
    composition:
      "Made from natural wood and non-toxic finishes.",
  },
  {
    id: 108,
    category: "Cats",
    name: "Interactive Suction Cup Spinner Toy",
    price: 50.14,
    image: cattoy3,
    description:
      "Engage, Entertain & Stimulate Your Cat with This Exciting Interactive Toy!",
    additionalDetails:
      "Detailed description for Interactive Suction Cup Spinner Toy.",
    keyBenefits: [
      "Stimulates activity",
      "Easy to install",
      "Engaging for cats",
    ],
    composition:
      "Made from durable plastic with a suction cup base.",
  },
  {
    id: 109,
    category: "Cats",
    name: "Cat Brush",
    price: 122.99,
    image: catgroom1,
    description:
      "2-in-1 Shampoo Dispenser & Pet Massage Brush—Make Bath Time a Breeze!",
    additionalDetails:
      "Detailed description for Cat Brush with dual functionality.",
    keyBenefits: [
      "Dual functionality",
      "Gentle grooming",
      "Easy to use",
    ],
    composition:
      "Made from soft bristles and high-quality plastic.",
  },
  {
    id: 110,
    category: "Cats",
    name: "Pet Massage Comb",
    price: 122.99,
    image: catgroom2,
    description:
      "Flynovate Pet Massage Comb & Bath Brush—Gentle Grooming & Easy Cleaning!",
    additionalDetails:
      "Detailed description for Pet Massage Comb designed for gentle grooming.",
    keyBenefits: [
      "Soothes and massages",
      "Improves coat health",
      "User-friendly design",
    ],
    composition:
      "Constructed with ergonomically designed materials.",
  },
  {
    id: 111,
    category: "Cats",
    name: "Goofy Tails Paw Butter & Hemp Seed Oil",
    price: 122.99,
    image: catgroom3,
    description:
      "Natural Care for Your Pet’s Skin & Well-Being—All-natural healing and moisturizing treatment.",
    additionalDetails:
      "Detailed description for Goofy Tails Paw Butter & Hemp Seed Oil.",
    keyBenefits: [
      "Moisturizes paws",
      "Promotes skin health",
      "Natural ingredients",
    ],
    composition:
      "Made from a blend of natural oils and butters.",
  },
  {
    id: 112,
    category: "Cats",
    name: "Cat Brush",
    price: 122.99,
    image: "https://via.placeholder.com/300x200?text=Cat+Brush",
    description:
      "A gentle brush designed to remove loose fur and reduce shedding.",
    additionalDetails:
      "Detailed description for Cat Brush designed for removing loose fur.",
    keyBenefits: [
      "Effective for loose fur",
      "Gentle on skin",
      "Ergonomic design",
    ],
    composition:
      "Made from high-quality materials and soft bristles.",
  },
  {
    id: 113,
    category: "Cats",
    name: "Areion Vet Feli D Kitten Deworming",
    price: 158.99,
    image: cathealth1,
    description:
      "Broad-spectrum deworming solution specifically formulated for kittens.",
    additionalDetails:
      "Detailed description for Areion Vet Feli D Kitten Deworming.",
    keyBenefits: [
      "Broad-spectrum",
      "Safe for kittens",
      "Effective treatment",
    ],
    composition:
      "Contains active ingredients for deworming.",
  },
  {
    id: 114,
    category: "Cats",
    name: "Premium Joint Health Supplement for Optimal Mobility",
    price: 158.99,
    image: cathealth2,
    description:
      "Enhance mobility, flexibility, and overall joint health in cats.",
    additionalDetails:
      "Detailed description for Premium Joint Health Supplement for cats.",
    keyBenefits: [
      "Supports joint health",
      "Enhances mobility",
      "Nutrient-rich",
    ],
    composition:
      "Formulated with glucosamine, chondroitin, and MSM.",
  },
  {
    id: 115,
    category: "Cats",
    name: "Himpyrin",
    price: 158.99,
    image: cathealth3,
    description:
      "Natural Relief for Fever, Inflammation & Pain in dogs and cats.",
    additionalDetails:
      "Detailed description for Himpyrin natural remedy.",
    keyBenefits: [
      "Natural relief",
      "Reduces inflammation",
      "Safe for pets",
    ],
    composition:
      "Made with natural extracts and herbal ingredients.",
  },
  {
    id: 116,
    category: "Cats",
    name: "Easy Pill",
    price: 158.99,
    image: cathealth4,
    description:
      "The Tasty & Stress-Free Pill Pocket for Dogs & Cats.",
    additionalDetails:
      "Detailed description for Easy Pill Pill Pocket for stress-free medication.",
    keyBenefits: [
      "Tasty",
      "Easy to administer",
      "Reduces stress",
    ],
    composition:
      "Constructed with palatable, pet-safe ingredients.",
  },
  {
    id: 117,
    category: "Cats",
    name: "MiCollar",
    price: 158.99,
    image: cataccessories1,
    description:
      "Advanced anti-loss tracking collar designed to locate your cat anywhere in the world.",
    additionalDetails:
      "Detailed description for MiCollar anti-loss tracking collar.",
    keyBenefits: [
      "Accurate tracking",
      "Lightweight",
      "Durable design",
    ],
    composition:
      "Made from high-quality, lightweight materials.",
  },
  {
    id: 118,
    category: "Cats",
    name: "bell",
    price: 158.99,
    image: cataccessories2,
    description:
      "Ensure Your Cat's Safety & Quick Identification with a small ID bell.",
    additionalDetails:
      "Detailed description for Small ID Bell for cats.",
    keyBenefits: [
      "Easy identification",
      "Lightweight",
      "Durable",
    ],
    composition:
      "Crafted from metal with a soft finish.",
  },
  {
    id: 119,
    category: "Cats",
    name: "Fluffy’s Luxurious Pet Bed",
    price: 158.99,
    image: cataccessories3,
    description:
      "High-quality plush fleece and durable polyester filling for ultimate comfort.",
    additionalDetails:
      "Detailed description for Fluffy’s Luxurious Pet Bed.",
    keyBenefits: [
      "Ultra soft",
      "Comfortable",
      "Durable",
    ],
    composition:
      "Made from plush fleece and polyester filling.",
  },
  {
    id: 120,
    category: "Cats",
    name: "cage",
    price: 158.99,
    image: cataccessories4,
    description:
      "Ensure safety and comfort with a premium metal cage or plastic crate.",
    additionalDetails:
      "Detailed description for a premium metal cage or plastic crate.",
    keyBenefits: [
      "Safe and secure",
      "Spacious",
      "Durable",
    ],
    composition:
      "Constructed from high-quality metal or plastic.",
  },
  {
    id: 190,
    category: "Cats",
    name: "Eco-Friendly Cat Litter",
    price: 414.99,
    image: "https://via.placeholder.com/300x200?text=Eco+Cat+Litter",
    description:
      "Environmentally safe cat litter that decomposes naturally.",
    additionalDetails:
      "Detailed description for Eco-Friendly Cat Litter.",
    keyBenefits: [
      "Environmentally safe",
      "Low dust",
      "Long-lasting",
    ],
    composition:
      "Made from biodegradable materials.",
  },
  {
    id: 191,
    category: "Cats",
    name: "Plant-Based Cat Bowl",
    price: 312.49,
    image: "https://via.placeholder.com/300x200?text=Plant+Based+Cat+Bowl",
    description:
      "A durable, biodegradable cat bowl made from plant fibers.",
    additionalDetails:
      "Detailed description for Plant-Based Cat Bowl.",
    keyBenefits: [
      "Eco-friendly",
      "Durable",
      "Stylish design",
    ],
    composition:
      "Made from recycled plant fibers.",
  },
  {
    id: 192,
    category: "Cats",
    name: "Compostable Cat Wipes",
    price: 348.99,
    image: "https://via.placeholder.com/300x200?text=Compostable+Cat+Wipes",
    description:
      "Gentle cat wipes that break down quickly after disposal.",
    additionalDetails:
      "Detailed description for Compostable Cat Wipes.",
    keyBenefits: [
      "Gentle cleaning",
      "Eco-friendly",
      "Convenient",
    ],
    composition:
      "Made from compostable materials.",
  },
  {
    id: 193,
    category: "Cats",
    name: "Organic Cat Shampoo",
    price: 510.99,
    image: "https://via.placeholder.com/300x200?text=Organic+Cat+Shampoo",
    description:
      "A non-toxic, organic shampoo to keep your cat’s coat healthy.",
    additionalDetails:
      "Detailed description for Organic Cat Shampoo.",
    keyBenefits: [
      "Non-toxic",
      "Organic ingredients",
      "Gentle cleaning",
    ],
    composition:
      "Formulated with organic extracts and natural cleansers.",
  },
  {
    id: 194,
    category: "Cats",
    name: "Sustainable Cat Toy",
    price: 46.99,
    image: "https://via.placeholder.com/300x200?text=Sustainable+Cat+Toy",
    description:
      "A cat toy crafted from recycled and biodegradable materials.",
    additionalDetails:
      "Detailed description for Sustainable Cat Toy.",
    keyBenefits: [
      "Eco-friendly",
      "Durable",
      "Fun design",
    ],
    composition:
      "Crafted from recycled and biodegradable materials.",
  },
  // =================== BIRD PRODUCTS ===================
  {
    id: 301,
    category: "Birds",
    name: "Bird Seed Mix",
    price: 12.99,
    image: "https://via.placeholder.com/300x200?text=Bird+Seed+Mix",
    description:
      "A nutritious blend of seeds perfect for small birds.",
    additionalDetails:
      "Detailed description for Bird Seed Mix.",
    keyBenefits: [
      "Nutritious blend",
      "Variety of seeds",
      "Great for small birds",
    ],
    composition:
      "Mix of assorted seeds and grains.",
  },
  {
    id: 302,
    category: "Birds",
    name: "Pellet Food",
    price: 15.99,
    image: "https://via.placeholder.com/300x200?text=Pellet+Food",
    description:
      "High-quality pellet food suitable for various bird species.",
    additionalDetails:
      "Detailed description for Pellet Food for birds.",
    keyBenefits: [
      "Balanced nutrition",
      "Easy to serve",
      "High quality",
    ],
    composition:
      "Made from processed ingredients ensuring balanced nutrition.",
  },
  {
    id: 303,
    category: "Birds",
    name: "Bird Swing",
    price: 9.99,
    image: "https://via.placeholder.com/300x200?text=Bird+Swing",
    description:
      "A fun swing to provide exercise and entertainment for your bird.",
    additionalDetails:
      "Detailed description for Bird Swing.",
    keyBenefits: [
      "Fun exercise",
      "Engaging",
      "Durable",
    ],
    composition:
      "Constructed from safe plastic and durable materials.",
  },
  {
    id: 304,
    category: "Birds",
    name: "Bird Bath",
    price: 19.99,
    image: "https://via.placeholder.com/300x200?text=Bird+Bath",
    description:
      "A small bath for birds to splash around and stay clean.",
    additionalDetails:
      "Detailed description for Bird Bath.",
    keyBenefits: [
      "Easy to clean",
      "Attractive design",
      "Encourages bathing",
    ],
    composition:
      "Made from durable plastic.",
  },
  {
    id: 305,
    category: "Birds",
    name: "Bird Cage",
    price: 89.99,
    image: "https://via.placeholder.com/300x200?text=Bird+Cage",
    description:
      "Spacious bird cage with plenty of room for exercise and play.",
    additionalDetails:
      "Detailed description for Bird Cage.",
    keyBenefits: [
      "Spacious",
      "Sturdy",
      "Safe",
    ],
    composition:
      "Constructed with metal and safe finishes.",
  },
  {
    id: 306,
    category: "Birds",
    name: "Bird Vitamins",
    price: 8.99,
    image: "https://via.placeholder.com/300x200?text=Bird+Vitamins",
    description:
      "Essential vitamins to keep your bird active and healthy.",
    additionalDetails:
      "Detailed description for Bird Vitamins.",
    keyBenefits: [
      "Essential nutrients",
      "Boosts immunity",
      "Easy to administer",
    ],
    composition:
      "Formulated with vitamins and minerals.",
  },
  // =================== FISH PRODUCTS ===================
  {
    id: 401,
    category: "Fish",
    name: "Flake Fish Food",
    price: 6.99,
    image: "https://via.placeholder.com/300x200?text=Flake+Fish+Food",
    description:
      "Nutritious flake food suitable for a variety of freshwater fish.",
    additionalDetails:
      "Detailed description for Flake Fish Food.",
    keyBenefits: [
      "Nutritious",
      "Easy to serve",
      "Promotes fish health",
    ],
    composition:
      "Made from high-quality fish food ingredients.",
  },
  {
    id: 402,
    category: "Fish",
    name: "Pellet Fish Food",
    price: 8.99,
    image: "https://via.placeholder.com/300x200?text=Pellet+Fish+Food",
    description:
      "High-quality pellet food designed for freshwater fish.",
    additionalDetails:
      "Detailed description for Pellet Fish Food.",
    keyBenefits: [
      "Balanced diet",
      "High-quality ingredients",
      "Promotes growth",
    ],
    composition:
      "Made from processed, nutrient-rich ingredients.",
  },
  {
    id: 403,
    category: "Fish",
    name: "Aquarium Decoration",
    price: 14.99,
    image: "https://via.placeholder.com/300x200?text=Aquarium+Decoration",
    description:
      "Colorful decoration to enhance the look of your aquarium.",
    additionalDetails:
      "Detailed description for Aquarium Decoration.",
    keyBenefits: [
      "Enhances appearance",
      "Safe for fish",
      "Durable",
    ],
    composition:
      "Made from non-toxic materials.",
  },
  {
    id: 404,
    category: "Fish",
    name: "Fish Tank",
    price: 129.99,
    image: "https://via.placeholder.com/300x200?text=Fish+Tank",
    description:
      "Spacious fish tank ideal for a beautiful aquatic environment.",
    additionalDetails:
      "Detailed description for Fish Tank.",
    keyBenefits: [
      "Spacious",
      "Durable",
      "Easy to maintain",
    ],
    composition:
      "Constructed from high-quality glass or acrylic.",
  },
  {
    id: 405,
    category: "Fish",
    name: "Water Conditioner",
    price: 10.99,
    image: "https://via.placeholder.com/300x200?text=Water+Conditioner",
    description:
      "A water conditioner that ensures a safe environment for your fish.",
    additionalDetails:
      "Detailed description for Water Conditioner.",
    keyBenefits: [
      "Safe for fish",
      "Effective",
      "Easy to use",
    ],
    composition:
      "Contains essential conditioners and safe chemicals.",
  },
  {
    id: 406,
    category: "Fish",
    name: "Tank Cleaning Kit",
    price: 19.99,
    image: "https://via.placeholder.com/300x200?text=Tank+Cleaning+Kit",
    description:
      "Complete cleaning kit to keep your aquarium pristine and healthy.",
    additionalDetails:
      "Detailed description for Tank Cleaning Kit.",
    keyBenefits: [
      "Complete kit",
      "Effective cleaning",
      "User-friendly",
    ],
    composition:
      "Includes all necessary cleaning tools for your aquarium.",
  },
];

// Maps each category to the route you want for "Back to Products".
const categoryRoutes = {
  Dogs: "/dog-products",
  Cats: "/cat-products",
  Birds: "/bird-products",
  Fish: "/fish-products",
};

function ProductDetails() {
  const { id } = useParams();

  // Local cart state
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  // Quantity state
  const [quantity, setQuantity] = useState(1);

  // Find product by ID
  const product = allProducts.find((p) => p.id === parseInt(id, 10));

  // If product not found, show fallback
  if (!product) {
    return (
      <>
        <Container style={{ marginTop: "6rem" }}>
          <h2>Product Not Found</h2>
          <Link to="/" className="btn btn-secondary mt-3">
            Back to Home
          </Link>
        </Container>
        <Footer />
      </>
    );
  }

  // Add product to cart (with quantity)
  const addToCart = () => {
    if (quantity < 1) {
      alert("Please select a valid quantity.");
      return;
    }
    const cartItem = { ...product, quantity: parseInt(quantity, 10) };
    const updatedCart = [...cart, cartItem];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${product.name} (x${quantity}) added to cart!`);
  };

  // Determine route to go back to, based on product.category
  const backRoute = categoryRoutes[product.category] || "/";

  // Convert numeric rating to a star representation (e.g., 4.2 => ★★★★½)
  const renderStarRating = () => {
    const fullStars = Math.floor(product.rating || 4.0);
    const halfStar = (product.rating || 4.0) % 1 >= 0.5;
    let stars = "";
    for (let i = 0; i < fullStars; i++) {
      stars += "★";
    }
    if (halfStar) stars += "½";
    while (stars.length < 5) {
      stars += "☆";
    }
    return stars;
  };

  // Determine images (if multiple, use carousel; otherwise, single image)
  const productImages =
    product.images && product.images.length > 0
      ? product.images
      : [product.image];

  return (
    <>
      <Container style={{ marginTop: "6rem" }}>
        <Row>
          {/* LEFT: Product Image and Additional Details */}
          <Col md={5}>
            <div
              className="border rounded p-2 mb-4 mb-md-0"
              style={{ backgroundColor: "#fff" }}
            >
              {productImages.length > 1 ? (
                <Carousel variant="dark" interval={null} style={{ width: "100%", height: "350px" }}>
                  {productImages.map((imgSrc, index) => (
                    <Carousel.Item key={index}>
                      <img
                        src={imgSrc}
                        alt={`${product.name} ${index}`}
                        className="d-block w-100"
                        style={{ objectFit: "contain", height: "350px" }}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              ) : (
                <img
                  src={productImages[0]}
                  alt={product.name}
                  className="d-block w-100"
                  style={{ objectFit: "contain", height: "350px" }}
                />
              )}
            </div>
            {/* Additional Details Section */}
            <div className="mt-3 p-3 border rounded" style={{ backgroundColor: "#fff" }}>
              <h4>Additional Details</h4>
              <p>{product.additionalDetails || product.description}</p>
              <h5>Key Benefits</h5>
              <ul>
                {product.keyBenefits ? (
                  product.keyBenefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))
                ) : (
                  <>
                    <li>High-quality ingredients</li>
                    <li>Nutrient-rich formula</li>
                    <li>Eco-friendly production</li>
                  </>
                )}
              </ul>
              <h5>Composition</h5>
              <p>
                {product.composition ||
                  "Made from natural ingredients and carefully selected materials."}
              </p>
            </div>
          </Col>

          {/* RIGHT: Product Details and Add to Cart */}
          <Col md={7}>
            <div className="border rounded p-3" style={{ backgroundColor: "#f8f9fa" }}>
              <h3 className="mb-3">{product.name}</h3>
              <h5 className="text-muted mb-3">₹{product.price.toFixed(2)}</h5>
              <div className="d-flex align-items-center mb-2">
                <span className="text-warning me-2" style={{ fontSize: "1.3rem" }}>
                  {renderStarRating()}
                </span>
                <small className="text-muted">
                  {(product.rating || 4.0).toFixed(1)} rating
                </small>
              </div>
              {product.unitsSold ? (
                <p className="text-muted mb-1">
                  <strong>Units Sold:</strong> {product.unitsSold}
                </p>
              ) : null}
              <div className="d-flex align-items-center my-3">
                <input
                  type="number"
                  value={quantity}
                  min="1"
                  onChange={(e) => setQuantity(e.target.value)}
                  style={{ width: "80px", marginRight: "10px" }}
                />
                <Button variant="primary" onClick={addToCart}>
                  Add to Cart
                </Button>
              </div>
              <Link to={backRoute} className="btn btn-secondary">
                Back to Products
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default ProductDetails;
