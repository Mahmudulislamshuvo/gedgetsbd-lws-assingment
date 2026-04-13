import jwt from "jsonwebtoken";

const ACCESS_EXPIRES_IN = "15m";
const REFRESH_EXPIRES_IN = "7d";
const ACCESS_EXPIRES_MS = 15 * 60 * 1000;
const REFRESH_EXPIRES_MS = 7 * 24 * 60 * 60 * 1000;

function getAccessSecret() {
  return process.env.JWT_ACCESS_SECRET || process.env.NEXTAUTH_SECRET;
}

function getRefreshSecret() {
  return process.env.JWT_REFRESH_SECRET || process.env.NEXTAUTH_SECRET;
}

export function getAccessTokenExpiry() {
  return Date.now() + ACCESS_EXPIRES_MS;
}

export function getRefreshTokenExpiry() {
  return Date.now() + REFRESH_EXPIRES_MS;
}

export function generateAccessToken(userId, userType) {
  const secret = getAccessSecret();
  if (!secret || !userId) {
    throw new Error("Missing access token secret or user id");
  }

  return jwt.sign({ sub: String(userId), userType }, secret, {
    expiresIn: ACCESS_EXPIRES_IN,
  });
}

export function generateRefreshToken(userId) {
  const secret = getRefreshSecret();
  if (!secret || !userId) {
    throw new Error("Missing refresh token secret or user id");
  }

  return jwt.sign({ sub: String(userId) }, secret, {
    expiresIn: REFRESH_EXPIRES_IN,
  });
}

export function verifyAccessToken(token) {
  const secret = getAccessSecret();
  if (!secret || !token) {
    return null;
  }

  try {
    return jwt.verify(token, secret);
  } catch {
    return null;
  }
}

export function verifyRefreshToken(token) {
  const secret = getRefreshSecret();
  if (!secret || !token) {
    return null;
  }

  try {
    return jwt.verify(token, secret);
  } catch {
    return null;
  }
}
