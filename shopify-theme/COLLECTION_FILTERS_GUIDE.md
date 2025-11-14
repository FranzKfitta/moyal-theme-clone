# Collection Filters Customization Guide

This guide explains how to customize collection page filters using the Shopify theme editor.

## Overview

The collection page now uses a modular section-based architecture that allows you to fully customize which filters appear on your collection pages through the Shopify theme editor.

## How to Access Filter Settings

1. Go to your Shopify admin panel
2. Navigate to **Online Store > Themes**
3. Click **Customize** on your active theme
4. Navigate to any **Collection page**
5. In the left sidebar, you'll see sections for:
   - **Collection Header**
   - **Collection Filters**
   - **Collection Products**

## Collection Filters Section

### Adding Filters

1. Click on the **Collection Filters** section
2. Click **Add block** at the bottom
3. Choose from:
   - **List Filter** - For categorical filters (availability, type, vendor, size, color, etc.)
   - **Price Filter** - For price range filtering

### List Filter Configuration

When you add a **List Filter** block, you can configure:

- **Filter Source**: Select which filter to display
  - **All available filters** - Shows all filters enabled in your collection
  - **Availability** - Shows In stock/Out of stock options
  - **Product Type** - Shows product categories
  - **Vendor** - Shows product brands/vendors
  - **Size** - Shows size options (requires product tags or metafields)
  - **Color** - Shows color options (requires product tags or metafields)
  - **Material** - Shows material options (requires product tags or metafields)
  - **Style** - Shows style options (requires product tags or metafields)

### Price Filter Configuration

When you add a **Price Filter** block:

- **Enable price filter** - Toggle to show/hide the price range filter
- Only one price filter can be added per page

### Section Settings

General settings for the filters section:

- **Show clear filters button** - Display a "Clear all" button when filters are active
- **Clear button text** - Customize the text for the clear button (default: "Clear all")

## Reordering Filters

You can change the order of filters by:

1. Clicking on a filter block in the theme editor
2. Using the up/down arrows to reorder
3. Drag and drop blocks to reorder them

## Removing Filters

To remove a filter:

1. Click on the filter block you want to remove
2. Click the **Remove block** button (trash icon)

## Setting Up Product Filters in Shopify

For filters to work, you need to enable them in your Shopify admin:

### Step 1: Enable Product Filters

1. Go to **Online Store > Navigation > Filters**
2. Enable the filters you want to use:
   - Product availability
   - Product type
   - Product vendor
   - Price
   - Product tags (for custom filters like color, size, material)

### Step 2: Add Product Tags or Metafields

For custom filters (color, size, material, style):

**Option A: Using Tags**
1. Go to **Products** in your admin
2. Edit a product
3. Add tags in the format: `color:blue`, `size:large`, `material:cotton`
4. Shopify will automatically create filters from these tags

**Option B: Using Metafields** (Recommended)
1. Go to **Settings > Custom data > Products**
2. Add metafield definitions:
   - `custom.color` (Single line text or List of values)
   - `custom.size` (Single line text or List of values)
   - `custom.material` (Single line text or List of values)
3. When editing products, fill in these metafields
4. Enable these metafields as filters in **Navigation > Filters**

## Example Configurations

### Basic Configuration (Availability + Price + Type)
This is the default configuration:
1. Availability filter (In stock/Out of stock)
2. Price filter (Range slider)
3. Product Type filter

### Advanced Configuration (E-commerce Store)
1. Availability filter
2. Price filter
3. Product Type filter
4. Size filter
5. Color filter
6. Material filter

### Minimal Configuration (Simple Store)
1. Product Type filter only

## Collection Products Section Settings

You can also customize the product grid:

- **Product card min width** (300-600px) - Controls how many products appear per row
- **Show image carousel arrows** - Enable/disable product image carousel

## Collection Header Section Settings

Customize the collection header:

- **Show collection description** - Display the collection description below the title

## How Filters Work

1. **Native Shopify Filtering**: The filters use Shopify's native filtering system, which means:
   - URL parameters are used (`?filter.v.availability=1`)
   - Filtering is fast and SEO-friendly
   - Works with all product data

2. **Dynamic Filtering**: Only filters with available options will be shown
   - If no products have a "Size" tag, the size filter won't appear
   - Filter counts show how many products match each option

3. **Multiple Filters**: Customers can select multiple filters at once
   - Filters combine using AND logic
   - Example: "Blue" + "Large" + "In stock" shows products matching all three

## Troubleshooting

### Filter Not Appearing
- Make sure the filter is enabled in **Navigation > Filters**
- Check that products have the required tags or metafields
- Verify that at least one product in the collection has the filter value

### Price Filter Not Working
- Ensure products have prices set
- Check that the price range isn't too narrow

### Filter Shows Wrong Values
- Review product tags and metafields
- Make sure tags follow the correct format: `property:value`
- Update metafield definitions in Settings > Custom data

## Best Practices

1. **Don't Overwhelm Users**: Only add filters that are relevant to your products
2. **Consistent Naming**: Use consistent tag/metafield names across all products
3. **Test Filters**: Test on mobile devices to ensure usability
4. **Monitor Performance**: If you have many filters, consider showing only the most important ones
5. **Use Metafields**: For professional stores, metafields are more reliable than tags

## Technical Details

### Files Modified
- `sections/collection-filters.liquid` - The customizable filters section
- `sections/collection-header.liquid` - Collection title and description
- `sections/collection-products.liquid` - Product grid with customization options
- `templates/collection.json` - JSON template for section-based layout
- `assets/theme.js` - JavaScript for filter dropdowns and product carousels

### Template Structure
The collection page now uses a JSON template format, allowing:
- Full customization through the theme editor
- Section reordering
- Per-collection settings
- Future extensibility

## Support

For additional customization or technical support:
- Refer to Shopify's [Product Filters documentation](https://help.shopify.com/en/manual/online-store/themes/customizing-themes/filters)
- Check the theme files in `shopify-theme/sections/` for advanced modifications
