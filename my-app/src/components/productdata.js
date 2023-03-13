const data = [
    {
        product_id: '1',
        product_category: 'Hoodies & T-Shirts',
        product_name: 'Classic Hoodie',
        product_price: '$125.00',
        product_img: 'https://images.unsplash.com/photo-1615397587950-3cbb55f95b77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
        product_status: 'Just In',
        product_size: 'XL',
        product_color: 'White',
        product_sex: 'Unisex'
    },
    {
        product_id: '2',
        product_category: 'Jackets',
        product_name: 'Classic Jacket',
        product_price: '$140.00',
        product_img: 'https://images.unsplash.com/photo-1605908502724-9093a79a1b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
        product_status: '',
        product_size: 'L',
        product_color: 'Black',
        product_sex: 'Unisex'
    },
    {
        product_id: '3',
        product_category: 'Hoodies & T-Shirts',
        product_name: 'Classic Hoodie',
        product_price: '$125.00',
        product_img: 'https://images.unsplash.com/photo-1615397587950-3cbb55f95b77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
        product_status: 'Just In',
        product_size: 'L',
        product_color: 'Black',
        product_sex: 'Unisex'
    },
    {
        product_id: '4',
        product_category: 'Hoodies & T-Shirts',
        product_name: 'Classic Shirt',
        product_price: '$105.00',
        product_img: 'https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
        product_status: 'On Sale',
        product_size: 'L',
        product_color: 'White',
        product_sex: 'Male'
    },
    {
        product_id: '5',
        product_category: 'Hoodies & T-Shirts',
        product_name: 'Plain White Tee',
        product_price: '$125.00',
        product_img: 'https://images.unsplash.com/photo-1622445272461-c6580cab8755?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
        product_status: '',
        product_size: 'S',
        product_color: 'White',
        product_sex: 'Unisex'
    },
    {
        product_id: '6',
        product_category: 'Hoodies & T-Shirts',
        product_name: 'Classic Hoodie',
        product_price: '$125.00',
        product_img: 'https://images.unsplash.com/photo-1615397587950-3cbb55f95b77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
        product_status: 'Just In',
        product_size: 'XL',
        product_color: 'Red',
        product_sex: 'Unisex'
    },
    {
        product_id: '7',
        product_category: 'Hoodies & T-Shirts',
        product_name: 'Classic Tee',
        product_price: '$125.00',
        product_img: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        product_status: '',
        product_size: 'S',
        product_color: 'Black',
        product_sex: 'Female'
    },
    {
        product_id: '8',
        product_category: 'Sweaters',
        product_name: 'Cotton Sweater',
        product_price: '$145.00',
        product_img: 'https://images.unsplash.com/photo-1610901157620-340856d0a50f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80',
        product_status: '',
        product_size: 'XL',
        product_color: 'Green',
        product_sex: 'Unisex'
    },
    {
        product_id: '9',
        product_category: 'Sweaters',
        product_name: 'Cotton Sweater',
        product_price: '$145.00',
        product_img: 'https://images.unsplash.com/photo-1622925492162-98c3760a7080?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fHN3ZWF0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
        product_status: '',
        product_size: 'M',
        product_color: 'Pink',
        product_sex: 'Unisex'
    },
    {
        product_id: '10',
        product_category: 'Pants',
        product_name: 'Racing Joggers',
        product_price: '$250.00',
        product_img: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80',
        product_status: '',
        product_size: 'L',
        product_color: 'Green',
        product_sex: 'Female'
    },
    {
        product_id: '11',
        product_category: 'Pants',
        product_name: 'Racing Joggers',
        product_price: '$250.00',
        product_img: 'https://images.unsplash.com/photo-1552904219-f4b87efe8792?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
        product_status: '',
        product_size: 'M',
        product_color: 'White',
        product_sex: 'Male'
    },
    {
        product_id: '12',
        product_category: 'Jeans',
        product_name: 'Classic Jeans',
        product_price: '$115.00',
        product_img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
        product_status: '',
        product_size: 'S',
        product_color: 'Blue',
        product_sex: 'Female'
    },
    {
        product_id: '13',
        product_category: 'Jeans',
        product_name: 'Classic Jeans',
        product_price: '$115.00',
        product_img: 'https://images.unsplash.com/photo-1617114919297-3c8ddb01f599?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
        product_status: '',
        product_size: '32',
        product_color: 'Blue',
        product_sex: 'Male'
    },
    {
        product_id: '14',
        product_category: 'Accessories',
        product_name: 'Everday Beanie',
        product_price: '$25.00',
        product_img: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
        product_status: '',
        product_size: 'O/S',
        product_color: 'Yellow',
        product_sex: 'Unisex'
    },
]

export default data;