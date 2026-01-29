# Deployment Guide

Follow these steps to deploy your portfolio to Vercel and set up Supabase.

## 1. Setup Supabase

1. Create a new project at [supabase.com](https://supabase.com).
2. Go to the **SQL Editor** in the Supabase dashboard.
3. Copy the contents of `supabase_schema.sql` and run it to create your tables.
4. Go to **Project Settings > API** and copy your `Project URL` and `anon public key`.

## 2. Setup Vercel

1. Push your code to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and import your repository.
3. In the **Environment Variables** section, add the following:
   - `NEXT_PUBLIC_SUPABASE_URL`: (Your Supabase Project URL)
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: (Your Supabase Anon Key)
4. Click **Deploy**.

## 3. Local Development

1. Create a `.env.local` file using `.env.example` as a template.
2. Fill in your Supabase credentials.
3. Run `npm run dev` to start the development server.

## 4. Customizing Content

- Static data is located in `src/lib/data.ts`.
- Components are in `src/app/page.tsx`.
- Styling is in `src/app/globals.css`.
