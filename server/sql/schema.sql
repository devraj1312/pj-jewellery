-- psql -h localhost -U postgres -d jwellers -f schema.sql

-- ============================================
-- Admins Table Schema (with AD001 style IDs)
-- ============================================
CREATE TABLE IF NOT EXISTS admins (
    admin_id VARCHAR(10) PRIMARY KEY,   -- custom ID like AD001
    admin_name VARCHAR(100) NOT NULL,
    admin_phone VARCHAR(15) UNIQUE NOT NULL,
    admin_email VARCHAR(100) UNIQUE NOT NULL,
    admin_password VARCHAR(255) NOT NULL,
    admin_role VARCHAR(50) NOT NULL DEFAULT 'admin',
    admin_profile VARCHAR(255),
    admin_status BOOLEAN NOT NULL DEFAULT TRUE, -- true = active, false = inactive
    admin_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    admin_updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for faster lookup
CREATE INDEX IF NOT EXISTS idx_admin_phone ON admins(admin_phone);
CREATE INDEX IF NOT EXISTS idx_admin_email ON admins(admin_email);
CREATE INDEX IF NOT EXISTS idx_admin_status ON admins(admin_status);


-- ============================================
-- Admin OTPs Table Schema
-- ============================================
CREATE TABLE IF NOT EXISTS user_otps (
  id SERIAL PRIMARY KEY,
  user_id VARCHAR(10) NOT NULL,
  phone VARCHAR(15) NOT NULL,
  otp VARCHAR(6) NOT NULL,
  expires_at TIMESTAMP NOT NULL,
  is_used BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for faster lookup
CREATE INDEX IF NOT EXISTS idx_user_otps_phone ON user_otps(phone);
CREATE INDEX IF NOT EXISTS idx_user_otps_valid ON user_otps(is_used, expires_at);
CREATE INDEX IF NOT EXISTS idx_user_otps_user_id ON user_otps(user_id);

