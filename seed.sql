-- SHEMA Products Seed Script
-- Run this in the Supabase SQL Editor after creating the products table

CREATE TABLE IF NOT EXISTS products (
  id TEXT PRIMARY KEY,
  brand TEXT NOT NULL,
  name TEXT NOT NULL,
  size TEXT NOT NULL,
  color TEXT NOT NULL,
  price NUMERIC(10,2) NOT NULL,
  category TEXT NOT NULL,
  image TEXT NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (optional, for production)
-- ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Allow public read access
-- CREATE POLICY "Public read access" ON products FOR SELECT USING (true);

INSERT INTO products (id, brand, name, size, color, price, category, image, description) VALUES ('sephora-outrageous-plump-flame', 'Sephora Collection', 'Outrageous Plump Intense Hydrating Lip Gloss', '0.2 FL OZ', '#03 Flame', 13.5, 'Lip Gloss', '/products/1.jpg', 'Intense hydrating lip gloss with a plumping effect and vibrant color payoff.');
INSERT INTO products (id, brand, name, size, color, price, category, image, description) VALUES ('sephora-outrageous-plump-coral', 'Sephora Collection', 'Outrageous Plump Hydrating Lip Gloss', '0.2 FL OZ', '#10 Coral Flash', 13.99, 'Lip Gloss', '/products/2.jpg', 'Hydrating lip gloss with a beautiful coral shade and plumping formula.');
INSERT INTO products (id, brand, name, size, color, price, category, image, description) VALUES ('sephora-glossed-holographic', 'Sephora Collection', 'Glossed Hydrating Long Wear Lip Gloss', '0.2 FL OZ', 'Holographic', 12.99, 'Lip Gloss', '/products/3.jpg', 'Long-wearing lip gloss with a stunning holographic finish.');
INSERT INTO products (id, brand, name, size, color, price, category, image, description) VALUES ('sephora-contour-light-medium', 'Sephora Collection', 'Colorful Contour Matte Powder', '0.12 OZ', '#02 Light Medium', 12.99, 'Contour', '/products/countour1.jpg', 'Matte contour powder for natural-looking definition.');
INSERT INTO products (id, brand, name, size, color, price, category, image, description) VALUES ('sephora-contour-medium-deep', 'Sephora Collection', 'Colorful Contour Matte Powder', '0.12 OZ', '#03 Medium Deep', 12.99, 'Contour', '/products/4.jpg', 'Matte contour powder for deeper skin tones.');
INSERT INTO products (id, brand, name, size, color, price, category, image, description) VALUES ('sephora-hydration-gloss-balm', 'Sephora Collection', 'Hydration Gloss Balm', '0.35 OZ', 'Universal', 9.99, 'Lip Care', '/products/5.jpg', 'Hydrating lip balm with a glossy finish for soft, nourished lips.');
INSERT INTO products (id, brand, name, size, color, price, category, image, description) VALUES ('sephora-lip-stain-red', 'Sephora Collection', 'Cream Lip Stain', '0.17 FL OZ', '01 Always Red', 14.99, 'Lip Stain', '/products/6.jpg', 'Long-lasting lip stain with intense color and matte finish.');
INSERT INTO products (id, brand, name, size, color, price, category, image, description) VALUES ('sephora-lip-stain-coral', 'Sephora Collection', 'Cream Lip Stain', '0.17 FL OZ', '04 Corail Safe', 14.99, 'Lip Stain', '/products/7.jpg', 'Long-lasting lip stain in a beautiful coral shade.');
INSERT INTO products (id, brand, name, size, color, price, category, image, description) VALUES ('sephora-mascara-volume', 'Sephora Collection', 'Size Up Volumizing Mascara', '0.39 FL OZ', '01 Black', 12.99, 'Mascara', '/products/8.jpg', 'Volumizing mascara for dramatic, full lashes.');
INSERT INTO products (id, brand, name, size, color, price, category, image, description) VALUES ('sephora-eyeshadow-palette', 'Sephora Collection', 'Colorful Wink-It Felt Tip Liner', '0.01 FL OZ', '01 Noir', 11.99, 'Eyeliner', '/products/9.jpg', 'Precision felt tip eyeliner for easy, smooth application.');
INSERT INTO products (id, brand, name, size, color, price, category, image, description) VALUES ('vs-amber-romance-lotion', 'Victoria''s Secret', 'Amber Romance Fragrance Lotion', '8 FL OZ', 'Amber Romance', 18.99, 'Body Care', '/products/amber1.jpg', 'Moisturizing body lotion with warm amber and vanilla scent.');
INSERT INTO products (id, brand, name, size, color, price, category, image, description) VALUES ('vs-amber-romance-mist', 'Victoria''s Secret', 'Amber Romance Fragrance Mist', '8.4 FL OZ', 'Amber Romance', 16.99, 'Fragrance', '/products/amber2.jpg', 'Body mist with warm amber and vanilla fragrance.');
INSERT INTO products (id, brand, name, size, color, price, category, image, description) VALUES ('vs-strawberry-lotion', 'Victoria''s Secret', 'Strawberry & Champagne Body Lotion', '8 FL OZ', 'Strawberry & Champagne', 18.99, 'Body Care', '/products/raspberry.jpg', 'Moisturizing body lotion with sweet strawberry and champagne notes.');
INSERT INTO products (id, brand, name, size, color, price, category, image, description) VALUES ('vs-pink-tequila-lotion', 'Victoria''s Secret', 'Pink Tequila Body Lotion', '8 FL OZ', 'Pink Tequila', 18.99, 'Body Care', '/products/m1.jpg', 'Refreshing body lotion with pink tequila and lime scent.');
INSERT INTO products (id, brand, name, size, color, price, category, image, description) VALUES ('vs-pink-tequila-mist', 'Victoria''s Secret', 'Pink Tequila Fragrance Mist', '8.4 FL OZ', 'Pink Tequila', 16.99, 'Fragrance', '/products/m2.jpg', 'Body mist with refreshing pink tequila fragrance.');
INSERT INTO products (id, brand, name, size, color, price, category, image, description) VALUES ('vs-coconut-passion-lotion', 'Victoria''s Secret', 'Coconut Passion Body Lotion', '8 FL OZ', 'Coconut Passion', 18.99, 'Body Care', '/products/w1.jpg', 'Moisturizing body lotion with coconut and vanilla scent.');
INSERT INTO products (id, brand, name, size, color, price, category, image, description) VALUES ('vs-coconut-passion-mist', 'Victoria''s Secret', 'Coconut Passion Fragrance Mist', '8.4 FL OZ', 'Coconut Passion', 16.99, 'Fragrance', '/products/w2.jpg', 'Body mist with tropical coconut and vanilla fragrance.');
INSERT INTO products (id, brand, name, size, color, price, category, image, description) VALUES ('juicy-couture-blue-bag', 'Juicy Couture', 'Blue Stripe Tote Bag', 'One Size', 'Blue Stripe', 45.99, 'Accessories', '/products/juicy2.jpg', 'Stylish blue stripe tote bag with Juicy Couture branding.');
INSERT INTO products (id, brand, name, size, color, price, category, image, description) VALUES ('juicy-couture-pink-bag', 'Juicy Couture', 'Pink Velour Tote Bag', 'One Size', 'Pink Velour', 49.99, 'Accessories', '/products/juicy3.jpg', 'Luxurious pink velour tote bag with gold accents.');
INSERT INTO products (id, brand, name, size, color, price, category, image, description) VALUES ('juicy-couture-gold-bag', 'Juicy Couture', 'Gold Logo Crossbody Bag', 'One Size', 'Gold', 55.99, 'Accessories', '/products/juicy4.jpg', 'Elegant crossbody bag with Juicy Couture gold logo.');
INSERT INTO products (id, brand, name, size, color, price, category, image, description) VALUES ('juicy-couture-tracksuit', 'Juicy Couture', 'Velour Tracksuit Set', 'S/M/L', 'Pink', 89.99, 'Apparel', '/products/juicy5.png', 'Classic velour tracksuit set with Juicy Couture branding.');
INSERT INTO products (id, brand, name, size, color, price, category, image, description) VALUES ('juicy-couture-hoodie', 'Juicy Couture', 'Logo Hoodie', 'S/M/L', 'Black', 65.99, 'Apparel', '/products/juicy6.png', 'Comfortable hoodie with Juicy Couture logo.');
INSERT INTO products (id, brand, name, size, color, price, category, image, description) VALUES ('juicy-couture-phone-case', 'Juicy Couture', 'Rhinestone Phone Case', 'Universal', 'Pink', 29.99, 'Accessories', '/products/juicy7.jpg', 'Sparkly rhinestone phone case with Juicy Couture charm.');
INSERT INTO products (id, brand, name, size, color, price, category, image, description) VALUES ('givenchy-fragrance', 'Givenchy', 'Irresistible Eau de Parfum', '1.7 FL OZ', 'Original', 79.99, 'Fragrance', '/products/givenchy.jpg', 'Elegant floral fragrance with rose and iris notes.');
INSERT INTO products (id, brand, name, size, color, price, category, image, description) VALUES ('dolce-fragrance', 'Dolce & Gabbana', 'Light Blue Eau de Toilette', '1.6 FL OZ', 'Light Blue', 69.99, 'Fragrance', '/products/dolce.jpg', 'Fresh and vibrant fragrance with citrus and apple notes.');
INSERT INTO products (id, brand, name, size, color, price, category, image, description) VALUES ('sephora-aqua-cream', 'Sephora Collection', 'Aqua Infinity Cream Foundation', '1.01 FL OZ', 'Various Shades', 22.99, 'Foundation', '/products/Aquacream.jpg', 'Long-lasting cream foundation with waterproof formula.');
INSERT INTO products (id, brand, name, size, color, price, category, image, description) VALUES ('sephora-aqua-fragrance', 'Sephora Collection', 'Aqua Collection Fragrance', '1.7 FL OZ', 'Fresh Scent', 24.99, 'Fragrance', '/products/Aquafragance.jpg', 'Refreshing aquatic fragrance for everyday wear.');
INSERT INTO products (id, brand, name, size, color, price, category, image, description) VALUES ('sephora-scented-lips', 'Sephora Collection', 'Scented Lip Balm Set', '0.5 OZ', 'Various Scents', 14.99, 'Lip Care', '/products/scentedlips.jpg', 'Set of scented lip balms for hydration and flavor.');
INSERT INTO products (id, brand, name, size, color, price, category, image, description) VALUES ('sephora-blush', 'Sephora Collection', 'Colorful Blush', '0.12 OZ', 'Various Shades', 12.99, 'Blush', '/products/img.jpg', 'Silky smooth blush for a natural, healthy glow.');
INSERT INTO products (id, brand, name, size, color, price, category, image, description) VALUES ('beauty-set-1', 'Sephora Collection', 'Beauty Essentials Set', 'Various', 'Multi-Color', 34.99, 'Gift Set', '/products/pack1.jpg', 'Curated set of beauty essentials for a complete look.');
