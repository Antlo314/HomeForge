-- HomeForge Enterprise Schema

-- Roles enum
CREATE TYPE user_role AS ENUM ('buyer', 'seller', 'admin');

-- Profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  avatar_url TEXT,
  role user_role DEFAULT 'buyer',
  subscription_tier TEXT DEFAULT 'free', -- 'free', 'basic', 'pro', 'enterprise'
  credits INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Listings table
CREATE TABLE IF NOT EXISTS listings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  seller_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  price NUMERIC NOT NULL,
  location TEXT NOT NULL,
  beds INTEGER,
  baths NUMERIC,
  sqft INTEGER,
  strategy TEXT NOT NULL, -- 'seller-financing', 'rent-to-own', 'house-hacking', 'shared-equity'
  status TEXT DEFAULT 'pending', -- 'pending', 'active', 'rejected', 'sold'
  images TEXT[] DEFAULT '{}',
  tags TEXT[] DEFAULT '{}',
  creative_terms JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Deal Analyses table
CREATE TABLE IF NOT EXISTS deal_analyses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  listing_id UUID REFERENCES listings(id) ON DELETE SET NULL,
  raw_content TEXT, -- The pasted text or OCR result
  analysis_result JSONB,
  strategy_simulations JSONB,
  risk_score INTEGER,
  legal_red_flags TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Activity Logs (Audit Trail)
CREATE TABLE IF NOT EXISTS activity_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
  action TEXT NOT NULL,
  details JSONB,
  ip_address TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Team Accounts (Multi-user)
CREATE TABLE IF NOT EXISTS team_memberships (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  team_id UUID NOT NULL, -- Could be a shared ID or a specific organization table
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  role TEXT DEFAULT 'member', -- 'owner', 'admin', 'member'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- RLS Policies
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE listings ENABLE ROW LEVEL SECURITY;
ALTER TABLE deal_analyses ENABLE ROW LEVEL SECURITY;
ALTER TABLE activity_logs ENABLE ROW LEVEL SECURITY;

-- Public can view active listings
CREATE POLICY "Public listings access" ON listings FOR SELECT USING (status = 'active');

-- Users can view their own data
CREATE POLICY "Users view own profile" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users view own analyses" ON deal_analyses FOR SELECT USING (auth.uid() = user_id);

-- Admins can view everything
CREATE POLICY "Admins view all" ON profiles FOR ALL USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
);
