import { MongoClient } from 'mongodb';
import { createClient } from '@supabase/supabase-js';
import Redis from 'ioredis';
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// MongoDB setup
const mongoClient = new MongoClient(process.env.MONGODB_URI as string);

// Supabase setup
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
);

// Redis setup
const redis = new Redis(process.env.REDIS_URL as string);

// Firebase setup
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseDb = getDatabase(firebaseApp);

export { mongoClient, supabase, redis, firebaseDb };