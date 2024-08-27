
import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useState } from "react";

function Products() {
  const [dataSource] = useState([
    {
      key: '1',
    
      title: 'Apple',
      price: 29.99,
      rating: 4.5,
      stock: "400kg",
      brand: 'Brand A',
      
    },
    {
      key: '2',
      
      title: 'Rice',
      price: 50,
      rating: 3.0,
      stock: "300kg",
      brand: 'Brand B',
      
    },
    {
      key: '3',
      
      title: 'Lentil',
      price: 80,
      rating: 5.0,
      stock: "600kg",
      brand: 'Brand C',
      
    },
    {
      key: '1',
    
      title: 'Pineapple',
      price: 65,
      rating: 4.5,
      stock: "150kg",
      brand: 'Brand A',
      
    },
    {
      key: '2',
      
      title: 'Radish',
      price: 60,
      rating: 3.0,
      stock: "30kg",
      brand: 'Brand B',
      
    },
    {
      key: '3',
      
      title: 'Green Chili',
      price: 70,
      rating: 5.0,
      stock: "200kg",
      brand: 'Brand C',
      
    },
    // Add more product objects here
  ]);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Products</Typography.Title>
      <Table
        loading={false} // No need for loading state
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Price",
            dataIndex: "price",
            render: (value) => <span>{value.toFixed(2)}/-</span>,
          },
          {
            title: "Rating",
            dataIndex: "rating",
            render: (rating) => {
              return <Rate value={rating} allowHalf disabled />;
            },
          },
          {
            title: "Stock",
            dataIndex: "stock",
          },
          {
            title: "Brand",
            dataIndex: "brand",
          },
      
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      />
    </Space>
  );
}

export default Products;
