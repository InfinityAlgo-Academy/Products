# 📝 How to Add New Products

This guide explains how to add new product documentation pages to the site.

## 🚀 Quick Start

### 1. Create Product Page

Create a new markdown file in the appropriate directory:

```bash
# For Expert Advisors
docs/products/expert-advisors/product-name.md

# For Indicators
docs/products/indicators/product-name.md

# For Educational Resources
docs/products/educational/product-name.md
```

### 2. Use the Template

Copy this template for your product page:

```markdown
# Product Name - Short Description

![Product Image](https://infinityalgoacademy.net/path-to-image.png)

---

## 📋 Overview

Brief description of the product.

<div class="grid cards" markdown>

-   :material-chart-line:{ .lg } **Platform**
    
    MT4/MT5/TradingView

-   :material-tag:{ .lg } **Category**
    
    Product Category

-   :material-cog:{ .lg } **Type**
    
    Product Type

-   :material-clock:{ .lg } **Style**
    
    Trading Style

</div>

---

## ✨ Key Features

### Main Feature 1

Description of feature 1

### Main Feature 2

Description of feature 2

### Main Feature 3

Description of feature 3

---

## 📈 Performance

!!! success "Results"
    - Metric 1: Value
    - Metric 2: Value
    - Metric 3: Value

!!! warning "Risk Disclosure"
    Standard risk disclosure text

---

## 🔧 Installation & Setup

### Requirements

- Requirement 1
- Requirement 2
- Requirement 3

### Installation Steps

1. Step 1
2. Step 2
3. Step 3

---

## ⚙️ Settings Guide

### Parameter Table

| Parameter | Description | Default | Range |
|-----------|-------------|---------|-------|
| Param1 | Description | Value | Range |
| Param2 | Description | Value | Range |

---

## 💡 Best Practices

Tips and recommendations

---

## ❓ FAQ

??? question "Question 1?"
    Answer 1

??? question "Question 2?"
    Answer 2

---

## 🛒 Purchase

[Purchase Now](https://infinityalgoacademy.net/item/product-slug/){ .md-button .md-button--primary }

---

## 🔗 Related Products

- [Related Product 1](link.md)
- [Related Product 2](link.md)
```

### 3. Add to Navigation

Edit `mkdocs.yml` and add your product to the navigation:

```yaml
nav:
  - Expert Advisors:
    - products/expert-advisors/index.md
    - Your New Product: products/expert-advisors/your-product.md
```

### 4. Update Index Page

Add your product to the relevant index page:

- `docs/products/expert-advisors/index.md`
- `docs/products/indicators/index.md`
- `docs/products/educational/index.md`

Add a table entry:

```markdown
| **Product Name** | Platform | Description | [View →](product-name.md) |
```

### 5. Test Locally

```bash
mkdocs serve
```

Visit `http://127.0.0.1:8000` to preview

### 6. Commit and Push

```bash
git add .
git commit -m "Add documentation for Product Name"
git push origin main
```

The site will automatically deploy via GitHub Actions!

---

## 📚 Advanced Features

### Admonitions

```markdown
!!! note "Note Title"
    Note content

!!! tip "Tip Title"
    Tip content

!!! warning "Warning Title"
    Warning content

!!! danger "Danger Title"
    Danger content

!!! success "Success Title"
    Success content

!!! info "Info Title"
    Info content
```

### Collapsible Sections

```markdown
??? question "Question?"
    Answer content (collapsed by default)

???+ question "Question?"
    Answer content (expanded by default)
```

### Tabs

```markdown
=== "Tab 1"
    Content for tab 1

=== "Tab 2"
    Content for tab 2

=== "Tab 3"
    Content for tab 3
```

### Cards Grid

```markdown
<div class="grid cards" markdown>

-   :material-icon:{ .lg } **Title**
    
    Description

-   :material-icon:{ .lg } **Title**
    
    Description

</div>
```

### Buttons

```markdown
[Button Text](link){ .md-button }
[Primary Button](link){ .md-button .md-button--primary }
```

### Code Blocks

````markdown
```python
def example():
    return "Hello World"
```

```yaml
key: value
nested:
  key: value
```
````

### Tables

```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
| Data 4   | Data 5   | Data 6   |
```

---

## 🎨 Icons

Use Material Design Icons:

```markdown
:material-robot:{ .lg }
:material-chart-line:{ .lg }
:material-gold:{ .lg }
:material-shield-check:{ .lg }
```

Find more icons: [Material Design Icons](https://pictogrammers.com/library/mdi/)

---

## 📝 Content Guidelines

### Product Pages Should Include:

1. **Clear Title** - Product name and brief description
2. **Overview** - What the product does
3. **Features** - Key features and capabilities
4. **Performance** - Results and metrics
5. **Installation** - Setup instructions
6. **Settings** - Parameter guide
7. **Best Practices** - Tips and recommendations
8. **FAQ** - Common questions
9. **Purchase Link** - Link to store
10. **Related Products** - Similar or complementary products

### Writing Style:

- ✅ Clear and concise
- ✅ Professional tone
- ✅ Use bullet points
- ✅ Include examples
- ✅ Add screenshots/images
- ✅ Provide specific values
- ❌ Avoid jargon
- ❌ Don't make unrealistic claims
- ❌ Don't skip important details

---

## 🔄 Workflow

1. **Create** product page
2. **Add** to navigation
3. **Update** index page
4. **Test** locally
5. **Commit** changes
6. **Push** to GitHub
7. **Auto-deploy** via Actions

---

## 📞 Need Help?

- Check [MkDocs Documentation](https://www.mkdocs.org/)
- Check [Material Theme Docs](https://squidfunk.github.io/mkdocs-material/)
- Review existing product pages as examples

---

Happy documenting! 🚀
