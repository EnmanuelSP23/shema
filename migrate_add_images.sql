-- Migration: add multi-image support (up to 3 images per product)
-- Run this in the Supabase SQL Editor (safe to run more than once)

ALTER TABLE products ADD COLUMN IF NOT EXISTS images TEXT[];

-- Backfill: existing products use their single image as the first image
UPDATE products SET images = ARRAY[image] WHERE images IS NULL;
