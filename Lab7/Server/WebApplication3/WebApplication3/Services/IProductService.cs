using System.Xml.Linq;
using WebApplication3.Models;

namespace WebApplication3.Services
{
    public interface IProductService
    {
        Task<IEnumerable<Product>> GetAllProductsAsync();
        Task<Product> GetProductByIdAsync(int id);
        Task AddProductAsync(Product product);
        Task UpdateProductAsync(Product product);
        Task DeleteProductAsync(int id);
    }

    public class ProductService : IProductService
    {
        private readonly List<Product> _products;
        public ProductService()
        {
            _products = new List<Product>
            {
                new Product() { Id = 1, Name = "Напій Monster Energy Super Fuel Watermelon 500 ml", Price = 150,
                        Category = "Японська їжа і солодощі", Quantity = 1, ImgPath = "/img" },
                new Product { Name = "Жувальна гумка Canels Gum 4pc Fruit", Price = 20, Id = 2,
                        Category = "Японська їжа і солодощі", Quantity = 1 },
                new Product { Name = "Напій MONSTER ENERGY ULTRA WATERMELON 500 ml", Price = 150, Id = 3,
                        Category = "Японська їжа і солодощі", Quantity = 1 },
                new Product { Name = "Напій MONSTER ENERGY ASSAULT 500 ml", Price = 150, Id = 4,
                        Category = "Японська їжа і солодощі", Quantity = 1 },
                new Product { Name = "Палички Pocky Biscuit Stick, Matcha Green Tea, 1.38 Ounce", 
                        Price = 220, Id = 5,Category = "Японська їжа і солодощі", Quantity = 1 },
                new Product { Name = "Шопер «Junji Itou Collection» [Morze Pulsar] v 3", Price = 450, Id = 6, 
                          Category = "Сумки", Quantity = 1 },
                new Product { Name = "Шопер «Danganronpa»", Price = 400, Id = 7, 
                        Category = "Сумки", Quantity = 1 },
                new Product { Name = "Сумка - бананка «Naruto»", Price = 390, Id = 8, 
                        Category = "Сумки", Quantity = 1 },
                new Product { Name = "Шопер «Demon Slayer: Kimetsu no Yaiba» tape 2", Price = 550, Id = 9, 
                        Category = "Сумки", Quantity = 1 },
                new Product { Name = "Шопер «Junji Itou Collection» [Morze Pulsar] v 2", Price = 450, Id = 10, 
                        Category = "Сумки", Quantity = 1 },
                new Product { Name = "Рюкзак за мотивами аніме серіалу «Клинок, розтинає демонів» [Demon Slayer: Kimetsu no Yaiba] tape 19", 
                        Price = 1100, Id = 11, Category = "Рюкзаки", Quantity = 1 }
            };
        }

        public async Task<IEnumerable<Product>> GetAllProductsAsync()
        {
            return await Task.FromResult<IEnumerable<Product>>(_products);
        }

        public async Task<Product> GetProductByIdAsync(int id)
        {
            return await Task.FromResult(_products.FirstOrDefault(u => u.Id == id));
        }
        public async Task AddProductAsync(Product product)
        {
            product.Id = _products.Count + 1;
            _products.Add(product);
            await Task.CompletedTask;

        }
        public async Task UpdateProductAsync(Product product)
        {
            var index = _products.FindIndex(p => p.Id == product.Id);
            _products[index] = product;
            await Task.CompletedTask;
        }
        public async Task DeleteProductAsync(int id)
        {
            var user = _products.FirstOrDefault(u => u.Id == id);
            if (user != null)
            {
                _products.Remove(user);
            }
            await Task.CompletedTask;
        }
    }
}
