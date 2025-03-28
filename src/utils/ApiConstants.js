/**
 * API constants and configuration
 */

// Base URLs
export const API_BASE_URL = 'http://192.168.29.237:5000';

// Authentication endpoints
export const AUTH_ENDPOINTS = {
  LOGIN: API_BASE_URL+'/api/auth/login',
  REGISTER: API_BASE_URL+'/api/auth/signup',
  REFRESH_TOKEN: '/auth/refresh',
  FORGOT_PASSWORD: '/auth/forgot-password',
  RESET_PASSWORD: '/auth/reset-password',
  VERIFY_EMAIL: '/auth/verify-email',
  PROFILE: '/auth/profile',
  UPDATE_PROFILE: '/auth/profile',
  CHANGE_PASSWORD: '/auth/change-password',
};

// Video endpoints
export const VIDEO_ENDPOINTS = {
  FEATURED: '/videos/featured',
  TRENDING: '/videos/trending',
  RECOMMENDED: '/videos/recommended',
  CATEGORIES: '/videos/categories',
  SEARCH: '/videos/search',
  VIDEOS_BY_CATEGORY: (categoryId) => `/videos/category/${categoryId}`,
  VIDEO_DETAILS: (videoId) => `/videos/${videoId}`,
  VIDEO_COMMENTS: (videoId) => `/videos/${videoId}/comments`,
  ADD_COMMENT: (videoId) => `/videos/${videoId}/comments`,
  LIKE_VIDEO: (videoId) => `/videos/${videoId}/like`,
  UNLIKE_VIDEO: (videoId) => `/videos/${videoId}/unlike`,
  ADD_TO_WATCHLIST: (videoId) => `/videos/${videoId}/watchlist`,
  REMOVE_FROM_WATCHLIST: (videoId) => `/videos/${videoId}/watchlist`,
  RATE_VIDEO: (videoId) => `/videos/${videoId}/rate`,
};

// User endpoints
export const USER_ENDPOINTS = {
  WATCHLIST: '/user/watchlist',
  HISTORY: '/user/history',
  LIKED_VIDEOS: '/user/liked',
  SUBSCRIPTIONS: '/user/subscriptions',
  SUBSCRIBE: (channelId) => `/user/subscribe/${channelId}`,
  UNSUBSCRIBE: (channelId) => `/user/unsubscribe/${channelId}`,
};

// API response status codes
export const STATUS_CODES = {
  SUCCESS: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  VALIDATION_ERROR: 422,
  SERVER_ERROR: 500,
};

// API request timeout in milliseconds
export const REQUEST_TIMEOUT = 30000;

// API headers
export const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};

// Local storage keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  REFRESH_TOKEN: 'refresh_token',
  USER_DATA: 'user_data',
  WATCH_HISTORY: 'watch_history',
}; 