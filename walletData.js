export const GROUP_TYPES = {
  PERSONAL: 'Personal',
  GROUP: 'Group'
}

export const DATA = [
 
  {
    id: '1',
    title: 'Item 1',
    image: require('./assets/images/p1.jpeg'),
    description: 'Dress                                                                    Rs. 500 (20% off)',
  },
  {
    id: '2',
    title: 'Item 2',
    image: require('./assets/images/p1.jpeg'),
    description: 'Dress                                                                    Rs. 699 (20% off)',
  },
  {
    id: '3',
    title: 'Item 3',
    image: require('./assets/images/p1.jpeg'),
    description: 'Dress                                                                    Rs. 600 (30% off)',
  },
  {
    id: '4',
    title: 'Item 4',
    image: require('./assets/images/p1.jpeg'),
    description: 'Dress                                                                    Rs. 500 (40% off)',
  },
  {
    id: '5',
    title: 'Item 5',
    image: require('./assets/images/p1.jpeg'),
    description: 'Dress                                                                    Rs. 500 (20% off)',
  },
  {
    id: '6',
    title: 'Item 6',
    image: require('./assets/images/p1.jpeg'),
    description: 'Dress                                                                    Rs. 400 (20% off)',
  },
]

export const WISHLIST_DATA = [
  {
    id: 1,
    label: 'Your WishList',
    value: 18675,
    type: GROUP_TYPES.PERSONAL,
    message: '3 of 4 signatures required to process transactions',
    products: DATA

  },
  {
    id: 2,
    label: 'Radhika Kashish Ishita',
    value: 98368,
    type: GROUP_TYPES.GROUP,
    message: '4 of 8 signatures required to process transactions',
    products: DATA
  },
  {
    id: 3,
    label: 'Family',
    value: 3456,
    type: GROUP_TYPES.GROUP,
    message: '1 signature required to process transactions',
    products: DATA
  },
  {
    id: 4,
    label: 'Goa Trip',
    value: 8761,
    type: GROUP_TYPES.GROUP,
    message: '1 signature required to process transactions',
    products: DATA
  },
  {
    id: 5,
    label: 'Prom',
    value: 76789,
    type: GROUP_TYPES.GROUP,
    message: '4 of 5 signature required to process transactions',
    products: DATA
  }
]
