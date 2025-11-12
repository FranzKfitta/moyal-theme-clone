# Quick Start - Testing Your Theme

## Step 1: Navigate to Theme Directory
```bash
cd shopify-theme
```

## Step 2: Start Development Server
```bash
shopify theme dev
```

This will:
- ✅ Create a temporary development theme on your Shopify store
- ✅ Start a local development server
- ✅ Provide a preview URL to view your theme
- ✅ Watch for file changes and sync automatically

## Step 3: View Your Theme
- The CLI will output a preview URL like: `https://your-store.myshopify.com?preview_theme_id=123456`
- Open this URL in your browser
- You'll see your theme with live reloading as you make changes

## First Time Setup

If you haven't authenticated yet:
```bash
shopify auth login
```

Then follow the prompts to connect to your Shopify store.

## What to Test

1. **Homepage** - Check hero section and featured collection
2. **Collections** - Test filters and sorting
3. **Product Pages** - Test variant selection and add to cart
4. **Cart Drawer** - Test adding/removing items
5. **Responsive Design** - Test on mobile/tablet/desktop

## Tips

- Changes to `.liquid`, `.css`, and `.js` files sync automatically
- Use the Shopify theme editor to customize settings
- The development theme is temporary - use `shopify theme push` to make it permanent

