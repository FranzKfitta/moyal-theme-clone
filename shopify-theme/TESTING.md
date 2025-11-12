# Testing the Theme with Shopify CLI

## Prerequisites

1. **Install Shopify CLI** (if not already installed):
   ```bash
   npm install -g @shopify/cli @shopify/theme
   ```

   Or using Homebrew (Mac):
   ```bash
   brew tap shopify/shopify
   brew install shopify-cli
   ```

   Or using Scoop (Windows):
   ```bash
   scoop bucket add shopify https://github.com/shopify/scoop-shopify-cli.git
   scoop install shopify
   ```

2. **Authenticate with your Shopify store**:
   ```bash
   shopify auth login
   ```

## Testing Locally

1. **Navigate to the theme directory**:
   ```bash
   cd shopify-theme
   ```

2. **Start the development server**:
   ```bash
   shopify theme dev
   ```

   This will:
   - Start a local development server
   - Create a development theme on your Shopify store
   - Provide a preview URL
   - Watch for file changes and sync them automatically

3. **Access your theme**:
   - The CLI will provide a preview URL (e.g., `https://your-store.myshopify.com?preview_theme_id=123456`)
   - Open this URL in your browser to see your theme

## Development Workflow

- **Live Reload**: Changes to Liquid, CSS, and JS files are automatically synced
- **Hot Reload**: CSS and JS changes are injected without full page reload
- **Theme Editor**: You can still use the Shopify theme editor to customize settings

## Other Useful Commands

### Push theme to store (without dev server):
```bash
shopify theme push
```

### Pull theme from store:
```bash
shopify theme pull
```

### List all themes:
```bash
shopify theme list
```

### Open theme in browser:
```bash
shopify theme open
```

### Check for issues:
```bash
shopify theme check
```

## Troubleshooting

### If you get authentication errors:
```bash
shopify auth logout
shopify auth login
```

### If the theme doesn't appear:
- Make sure you're in the `shopify-theme` directory
- Check that all required files are present (layout/theme.liquid, config/settings_schema.json, etc.)
- Verify your store connection with `shopify whoami`

### If styles aren't loading:
- Check that `assets/theme.css` exists and is properly formatted
- Verify the CSS file is referenced in `layout/theme.liquid`
- Check browser console for 404 errors

## Notes

- The development theme is temporary and will be deleted when you stop the dev server
- To make it permanent, use `shopify theme push` to push to a named theme
- Always test on a development store or a duplicate of your live store first

