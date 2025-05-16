export const product = {
  name: 'product',
  title: 'Produkt',
  type: 'document',
  fields: [
    {
      name: 'producttitle',
      title: 'Produktnavn',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Pen URL',
      type: 'slug',
      options: {
        source: 'producttitle',
        slugify: (input) => slugifier(input),
      },
    },
    {
      name: 'productimage',
      title: 'produktbilde',
      type: 'image',
    },
    {
      name: 'price',
      title: 'pris',
      type: 'number',
    },
    {
      name: 'category',
      title: 'kategori',
      type: 'reference',
      to: [{type: 'category'}],
    },
  ],
}
