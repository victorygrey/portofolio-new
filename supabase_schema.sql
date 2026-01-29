-- Create tables for the portfolio

-- Skills table
CREATE TABLE skills (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Projects table
CREATE TABLE projects (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  type TEXT,
  tags TEXT[],
  image_url TEXT,
  project_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Experience table
CREATE TABLE experience (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  company TEXT NOT NULL,
  role TEXT NOT NULL,
  period TEXT,
  description TEXT,
  order_index INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Education table
CREATE TABLE education (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  school TEXT NOT NULL,
  degree TEXT NOT NULL,
  year TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Seed some initial data
INSERT INTO skills (name, category) VALUES 
('React / Next.js', 'Web'),
('React Native / Expo', 'Mobile'),
('Supabase', 'Backend');
