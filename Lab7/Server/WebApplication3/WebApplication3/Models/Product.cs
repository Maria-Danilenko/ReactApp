﻿namespace WebApplication3.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public string Category { get; set; }
        public int Quantity { get; set; }
        public string ImgPath { get; set; }

        public Product()
        {
            Quantity = 1;
        }
    }
}
