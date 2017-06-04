# textbase

Basic minimal template for new projects

- HTML structure
- CSS: Basic stuff, typography
- optionally normalize.css
- optionally fontfaceobserver for async font loading

Overwrite stuff or remove what is not needed


## extras
- settings `box-sizing`, `hyphens` and font-features
- defines `::selection` and `:target` styles


## tags

- `h1-h5 p ul ol dl table`: font sizes and margins
- `img img[src$='.svg']`: responsive images
- `hr`: stylized rule


## defines these helper classes:

- `.textnegative`: Light text on dark background needs higher line-height and slightly different rendering on some platforms
- `.textcaps`: caps style for headlines or inline text
- `.textul`: base list which uses dashes instead of dots
- `.textlink`: links in text
- `.pre`: code parts

## layout

A `15px` side padding is used for all screen sizes which is mainly
useful for small screens though. Only size defined in `px` as this is a minimal
padding which should not be dependent on font size (all other margins
and padddings are defined using `em` or `rem`).

- `article`: max-width and padding
- `.bspaced`: basic space-between flexbox layout
- `.tablebox`: table overflowing on smaller screens
