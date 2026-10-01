export const seedData = {
  users: [
    {
      id: "usr-admin-1",
      first_name: "Store",
      last_name: "Admin",
      email: "admin@eshop.com",
      password_hash: "admin123", // For development demo simplicity
      role: "Admin",
      status: "Active",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      created_at: "2026-08-01T10:00:00.000Z"
    },
    {
      id: "usr-cust-1",
      first_name: "John",
      last_name: "Doe",
      email: "user@eshop.com",
      password_hash: "user123",
      role: "User",
      status: "Active",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
      created_at: "2026-08-10T14:30:00.000Z"
    },
    {
      id: "usr-cust-2",
      first_name: "B.",
      last_name: "Nair",
      email: "b.nair@gmail.com",
      password_hash: "pass123",
      role: "User",
      status: "Active",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&auto=format&fit=crop&q=80",
      created_at: "2026-08-15T09:20:00.000Z"
    },
    {
      id: "usr-cust-3",
      first_name: "D.",
      last_name: "Watson",
      email: "d.watson@gmail.com",
      password_hash: "pass123",
      role: "User",
      status: "Active",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      created_at: "2026-08-20T11:45:00.000Z"
    },
    {
      id: "usr-cust-4",
      first_name: "A.",
      last_name: "Thomas",
      email: "a.thomas@gmail.com",
      password_hash: "pass123",
      role: "User",
      status: "Active",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
      created_at: "2026-08-25T16:10:00.000Z"
    },
    {
      id: "usr-cust-5",
      first_name: "K.",
      last_name: "Varghese",
      email: "k.varghese@gmail.com",
      password_hash: "pass123",
      role: "User",
      status: "Disabled",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      created_at: "2026-09-01T08:30:00.000Z"
    }
  ],
  categories: [
    { id: "fashion", name: "Fashion", icon: "Shirt" },
    { id: "mobiles", name: "Mobiles", icon: "Smartphone" },
    { id: "electronics", name: "Electronics", icon: "Laptop" },
    { id: "beauty", name: "Beauty", icon: "Sparkles" },
    { id: "home", name: "Home", icon: "Home" },
    { id: "appliances", name: "Appliances", icon: "Tv" },
    { id: "toys", name: "Toys & Baby", icon: "Baby" },
    { id: "food", name: "Food & Health", icon: "Apple" },
    { id: "auto", name: "Auto Accessories", icon: "Car" },
    { id: "sports", name: "Sports & Fitness", icon: "Dumbbell" }
  ],
  trends: [
    { name: "Kurta sets", category: "fashion", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=200&auto=format&fit=crop&q=80" },
    { name: "Dresses", category: "fashion", image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=200&auto=format&fit=crop&q=80" },
    { name: "Sports shoes", category: "sports", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&auto=format&fit=crop&q=80" },
    { name: "Watches", category: "electronics", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&auto=format&fit=crop&q=80" },
    { name: "Kids clothing", category: "fashion", image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=200&auto=format&fit=crop&q=80" },
    { name: "Luggage", category: "home", image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=200&auto=format&fit=crop&q=80" },
    { name: "Sarees", category: "fashion", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=200&auto=format&fit=crop&q=80" },
    { name: "Tops", category: "fashion", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200&auto=format&fit=crop&q=80" },
    { name: "Running shoes", category: "sports", image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=200&auto=format&fit=crop&q=80" },
    { name: "Jeans", category: "fashion", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=200&auto=format&fit=crop&q=80" },
    { name: "Formals", category: "fashion", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=200&auto=format&fit=crop&q=80" },
    { name: "Nightwear", category: "fashion", image: "https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?w=200&auto=format&fit=crop&q=80" }
  ],
  banners: [
    {
      id: "b1",
      title: "Performance that lasts.",
      subtitle: "More than just good looks. Powered by next-gen Snapdragon.",
      highlight: "From ₹42,990*",
      offerText: "SBI Card 10% Instant Discount*",
      bgGradient: "from-blue-900 via-indigo-800 to-slate-900",
      ctaText: "Shop Flagships",
      categoryLink: "mobiles",
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: "b2",
      title: "Google Pixel 11 Series",
      subtitle: "Next-era Gemini AI baked directly into Android 16.",
      highlight: "From ₹76,999* or ₹3,208/m",
      offerText: "Pre-order now & get ₹8,000 Exchange Bonus",
      bgGradient: "from-amber-900 via-stone-800 to-neutral-900",
      ctaText: "Pre-Order Now",
      categoryLink: "mobiles",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: "b3",
      title: "Smart Lifestyle & Fitness",
      subtitle: "Track vitals, Bluetooth calling, vibrant AMOLED displays.",
      highlight: "Up to 60% OFF",
      offerText: "Assured 24-hr dispatch & 1-Year Warranty",
      bgGradient: "from-slate-900 via-teal-900 to-gray-900",
      ctaText: "Explore Wearables",
      categoryLink: "electronics",
      image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=80"
    }
  ],
  products: [
    {
      id: "prod-hammer-smartwatch",
      name: "HAMMER Cyclone 1.39\" Round Dial Rotating Crown Smart Watch",
      description: "HAMMER Cyclone 1.39\" Round Dial Rotating Crown Smart Watch with Calling Function, High Refresh Rate, Multi Sports Modes, SpO2, HR, Voice Assistant (Midnight Black). Built for endurance with zinc-alloy casing and water resistance.",
      category: "electronics",
      price: 1999,
      original_price: 4999,
      discount_price: 1999,
      stock_quantity: 42,
      rating: 4.6,
      reviews_count: 1420,
      variants: [
        { name: "Midnight Black", colorCode: "#171717", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80" },
        { name: "Gunmetal Silver", colorCode: "#94a3b8", image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&auto=format&fit=crop&q=80" },
        { name: "Rose Gold", colorCode: "#f43f5e", image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&auto=format&fit=crop&q=80" },
        { name: "Royal Blue", colorCode: "#2563eb", image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&auto=format&fit=crop&q=80" }
      ],
      images: [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&auto=format&fit=crop&q=80"
      ],
      featured: true
    },
    {
      id: "prod-galaxy-s25",
      name: "Samsung Galaxy S25+ 5G (Titanium Gray, 256 GB)",
      description: "Next generation flagship smartphone featuring Galaxy AI, dynamic 120Hz AMOLED 2X display, pro-grade 50MP triple camera system, and all-day 4900mAh battery.",
      category: "mobiles",
      price: 99999,
      original_price: 114999,
      discount_price: 99999,
      stock_quantity: 18,
      rating: 4.8,
      reviews_count: 2890,
      variants: [
        { name: "Titanium Gray", colorCode: "#64748b", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&auto=format&fit=crop&q=80" },
        { name: "Onyx Black", colorCode: "#0f172a", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=80" },
        { name: "Marble Blue", colorCode: "#38bdf8", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=80" }
      ],
      images: [
        "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80"
      ],
      featured: true
    },
    {
      id: "prod-vivo-v50",
      name: "Vivo V50 5G (Zeiss Portrait Master, 128 GB)",
      description: "Co-engineered with ZEISS optics for studio quality portraits. Slim 3D curved design, 5500mAh lightweight battery with 80W FlashCharge.",
      category: "mobiles",
      price: 36999,
      original_price: 42990,
      discount_price: 36999,
      stock_quantity: 6, // Low stock for KPI testing!
      rating: 4.5,
      reviews_count: 940,
      variants: [
        { name: "Ocean Breeze", colorCode: "#0284c7", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=80" },
        { name: "Velvet Red", colorCode: "#be123c", image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&auto=format&fit=crop&q=80" }
      ],
      images: [
        "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&auto=format&fit=crop&q=80"
      ],
      featured: true
    },
    {
      id: "prod-pixel-11",
      name: "Google Pixel 11 Pro 5G (Obsidian, 256 GB)",
      description: "Google's revolutionary flagship powered by Tensor G5 with on-device multimodal Gemini AI, super-res 30x zoom, and 7 years of OS updates.",
      category: "mobiles",
      price: 104999,
      original_price: 125000,
      discount_price: 104999,
      stock_quantity: 4, // Low stock!
      rating: 4.9,
      reviews_count: 1120,
      variants: [
        { name: "Obsidian", colorCode: "#1c1917", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=80" },
        { name: "Porcelain White", colorCode: "#f5f5f4", image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&auto=format&fit=crop&q=80" }
      ],
      images: [
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80"
      ],
      featured: true
    },
    {
      id: "prod-kurta-set",
      name: "Embroidered Anarkali Kurta & Pant Set with Dupatta",
      description: "Pure chanderi cotton silk festive kurta set featuring intricate zari embroidery, sweetheart neckline, and matching organza dupatta.",
      category: "fashion",
      price: 2499,
      original_price: 6999,
      discount_price: 2499,
      stock_quantity: 35,
      rating: 4.4,
      reviews_count: 512,
      variants: [
        { name: "Teal Green", colorCode: "#0f766e", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&auto=format&fit=crop&q=80" },
        { name: "Maroon Silk", colorCode: "#881337", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=80" }
      ],
      images: [
        "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&auto=format&fit=crop&q=80"
      ],
      featured: false
    },
    {
      id: "prod-sports-shoes",
      name: "UltraBoost Pro Dynamic Cushioning Running Shoes",
      description: "Engineered breathable mesh upper with responsive energy-return midsole and Continental rubber grip for trail and track runs.",
      category: "sports",
      price: 4299,
      original_price: 8999,
      discount_price: 4299,
      stock_quantity: 50,
      rating: 4.7,
      reviews_count: 830,
      variants: [
        { name: "Racing Red", colorCode: "#dc2626", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80" },
        { name: "Stealth Black", colorCode: "#18181b", image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&auto=format&fit=crop&q=80" }
      ],
      images: [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80"
      ],
      featured: false
    },
    {
      id: "prod-anc-headphones",
      name: "SonicPro Wireless ANC Over-Ear Studio Headphones",
      description: "Active noise cancelling with 40mm beryllium drivers, spatial audio tracking, 65-hour battery life, and ultra-comfortable memory foam earcups.",
      category: "electronics",
      price: 7999,
      original_price: 14999,
      discount_price: 7999,
      stock_quantity: 22,
      rating: 4.8,
      reviews_count: 670,
      variants: [
        { name: "Matte Black", colorCode: "#171717", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80" },
        { name: "Silver Frost", colorCode: "#e2e8f0", image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&auto=format&fit=crop&q=80" }
      ],
      images: [
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80"
      ],
      featured: false
    },
    {
      id: "prod-air-fryer",
      name: "CrispWave 6.5L Digital Rapid-Air Dual Zone Air Fryer",
      description: "Even-crisp technology with 8 one-touch cooking presets, non-stick dishwasher-safe basket, and 90% less oil consumption.",
      category: "appliances",
      price: 5499,
      original_price: 10999,
      discount_price: 5499,
      stock_quantity: 15,
      rating: 4.6,
      reviews_count: 420,
      variants: [
        { name: "Piano Black", colorCode: "#0a0a0a", image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=600&auto=format&fit=crop&q=80" }
      ],
      images: [
        "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=800&auto=format&fit=crop&q=80"
      ],
      featured: false
    },
    {
      id: "prod-smart-tv",
      name: "CrystalVision 55\" 4K Ultra HD Smart QLED TV",
      description: "Dolby Vision HDR10+, 120Hz Game Mode, bezel-less design, integrated Google TV, and 40W Dolby Atmos soundbar speakers.",
      category: "appliances",
      price: 38990,
      original_price: 64999,
      discount_price: 38990,
      stock_quantity: 8, // Low stock!
      rating: 4.7,
      reviews_count: 310,
      variants: [
        { name: "Charcoal Slate", colorCode: "#334155", image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&auto=format&fit=crop&q=80" }
      ],
      images: [
        "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&auto=format&fit=crop&q=80"
      ],
      featured: false
    },
    {
      id: "prod-skincare-serum",
      name: "Radiance Vitamin C + Hyaluronic Acid Glow Serum (30ml)",
      description: "Dermatologically tested brightening facial serum infused with 15% Ethyl Ascorbic acid and Japanese green tea extract for clear glowing skin.",
      category: "beauty",
      price: 699,
      original_price: 1299,
      discount_price: 699,
      stock_quantity: 75,
      rating: 4.5,
      reviews_count: 1540,
      variants: [
        { name: "Standard 30ml", colorCode: "#f59e0b", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&auto=format&fit=crop&q=80" }
      ],
      images: [
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop&q=80"
      ],
      featured: false
    },
    {
      id: "prod-ceramic-cookware",
      name: "Artisan 4-Piece Non-Stick Granite Cookware Set",
      description: "100% PFOA-free non-toxic mineral ceramic coating induction cooktop and gas stove compatible with stay-cool wooden finish ergonomic handles.",
      category: "home",
      price: 3199,
      original_price: 6499,
      discount_price: 3199,
      stock_quantity: 19,
      rating: 4.6,
      reviews_count: 290,
      variants: [
        { name: "Nordic Sage", colorCode: "#4d7c0f", image: "https://images.unsplash.com/photo-1584990347449-3990666012e7?w=600&auto=format&fit=crop&q=80" },
        { name: "Cream Stone", colorCode: "#fef08a", image: "https://images.unsplash.com/photo-1584990347449-3990666012e7?w=600&auto=format&fit=crop&q=80" }
      ],
      images: [
        "https://images.unsplash.com/photo-1584990347449-3990666012e7?w=800&auto=format&fit=crop&q=80"
      ],
      featured: false
    },
    {
      id: "prod-baby-stroller",
      name: "UrbanGlide Lightweight One-Hand Compact Fold Stroller",
      description: "Aircraft-grade aluminum frame, multi-position reclining seat, UPF 50+ canopy with peek-a-boo window, and shock-absorbing suspension wheels.",
      category: "toys",
      price: 6499,
      original_price: 11999,
      discount_price: 6499,
      stock_quantity: 11,
      rating: 4.8,
      reviews_count: 185,
      variants: [
        { name: "Navy Blue", colorCode: "#1e3a8a", image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=600&auto=format&fit=crop&q=80" }
      ],
      images: [
        "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=800&auto=format&fit=crop&q=80"
      ],
      featured: false
    }
  ],
  orders: [
    {
      id: "#OC1042",
      user_id: "usr-cust-2",
      customer_name: "B. Nair",
      customer_email: "b.nair@gmail.com",
      created_at: "2026-09-18T10:15:00.000Z",
      status: "Delivered", // Placed, Shipped, Delivered, Cancelled
      delivery_address: "Flat 402, Skyline Imperial, Kakkanad, Kochi, Kerala - 682030",
      payment_method: "UPI",
      amount: 2798,
      product_protection_fee: 99,
      discount: 500,
      coupon_applied: 200,
      total_amount: 2197,
      items: [
        {
          product_id: "prod-hammer-smartwatch",
          name: "HAMMER Cyclone 1.39\" Round Dial Rotating Crown Smart Watch",
          variant: "Midnight Black",
          rate: 1999,
          quantity: 1,
          image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&auto=format&fit=crop&q=80"
        },
        {
          product_id: "prod-skincare-serum",
          name: "Radiance Vitamin C + Hyaluronic Acid Glow Serum (30ml)",
          variant: "Standard 30ml",
          rate: 699,
          quantity: 1,
          image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&auto=format&fit=crop&q=80"
        }
      ],
      tracking_history: [
        { status: "Placed", time: "18 Sep 2026, 10:15 AM", description: "Order confirmed and verified." },
        { status: "Shipped", time: "18 Sep 2026, 04:30 PM", description: "Item dispatched from Bangalore Central Hub via Bluedart Express (AWB #889211029)." },
        { status: "Out for Delivery", time: "19 Sep 2026, 08:30 AM", description: "Package out for delivery with courier associate." },
        { status: "Delivered", time: "19 Sep 2026, 01:20 PM", description: "Delivered to resident at Kakkanad, Kochi." }
      ]
    },
    {
      id: "#OC1043",
      user_id: "usr-cust-3",
      customer_name: "D. Watson",
      customer_email: "d.watson@gmail.com",
      created_at: "2026-09-18T15:40:00.000Z",
      status: "Shipped",
      delivery_address: "Villa 12, Palm Meadows, Whitefield, Bangalore, Karnataka - 560066",
      payment_method: "Credit/Debit Card",
      amount: 36999,
      product_protection_fee: 99,
      discount: 1000,
      coupon_applied: 0,
      total_amount: 36098,
      items: [
        {
          product_id: "prod-vivo-v50",
          name: "Vivo V50 5G (Zeiss Portrait Master, 128 GB)",
          variant: "Ocean Breeze",
          rate: 36999,
          quantity: 1,
          image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=200&auto=format&fit=crop&q=80"
        }
      ],
      tracking_history: [
        { status: "Placed", time: "18 Sep 2026, 03:40 PM", description: "Order placed and payment authorized." },
        { status: "Shipped", time: "19 Sep 2026, 09:15 AM", description: "Dispatched from Mumbai Logistics Facility." }
      ]
    },
    {
      id: "#OC1044",
      user_id: "usr-cust-4",
      customer_name: "A. Thomas",
      customer_email: "a.thomas@gmail.com",
      created_at: "2026-09-19T08:20:00.000Z",
      status: "Placed",
      delivery_address: "House 24B, Model Colony, Shivajinagar, Pune, Maharashtra - 411016",
      payment_method: "Net Banking",
      amount: 7999,
      product_protection_fee: 99,
      discount: 400,
      coupon_applied: 0,
      total_amount: 7698,
      items: [
        {
          product_id: "prod-anc-headphones",
          name: "SonicPro Wireless ANC Over-Ear Studio Headphones",
          variant: "Matte Black",
          rate: 7999,
          quantity: 1,
          image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&auto=format&fit=crop&q=80"
        }
      ],
      tracking_history: [
        { status: "Placed", time: "19 Sep 2026, 08:20 AM", description: "Order received. Seller preparing package for dispatch." }
      ]
    },
    {
      id: "#OC1045",
      user_id: "usr-cust-1",
      customer_name: "John Doe",
      customer_email: "user@eshop.com",
      created_at: "2026-09-17T11:00:00.000Z",
      status: "Placed",
      delivery_address: "42 MG Road, Indiranagar, Bangalore, Karnataka - 560038",
      payment_method: "UPI",
      amount: 1999,
      product_protection_fee: 99,
      discount: 200,
      coupon_applied: 0,
      total_amount: 1898,
      items: [
        {
          product_id: "prod-hammer-smartwatch",
          name: "HAMMER Cyclone 1.39\" Round Dial Rotating Crown Smart Watch",
          variant: "Midnight Black",
          rate: 1999,
          quantity: 1,
          image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&auto=format&fit=crop&q=80"
        }
      ],
      tracking_history: [
        { status: "Placed", time: "17 Sep 2026, 11:00 AM", description: "Order verified and in warehouse queue." }
      ]
    }
  ],
  otps: {}
};