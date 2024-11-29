const products = [
    { name: "Laptop", category: "electrónica", price: 1200, stock: 5, discount: 0 },
    { name: "Televisor", category: "electrónica", price: 800, stock: 3, discount: 10 },
    { name: "Sofá", category: "hogar", price: 500, stock: 8, discount: 15 },
    { name: "Mesa de comedor", category: "hogar", price: 700, stock: 2, discount: 0 },
    { name: "Pan", category: "alimentos", price: 1.5, stock: 50, discount: 0 },
    { name: "Leche", category: "alimentos", price: 1.2, stock: 20, discount: 5 },
];

// 1. Filtrar Productos con Descuento: Usa filter para obtener un nuevo array con los productos que tienen un descuento aplicado (es decir, discount > 0).
document.write("<strong>Productos con Descuento > 0:</strong><br>");

const discountedProducts = products.filter(products => products.discount > 0);
console.log(discountedProducts);

discountedProducts.forEach((product) => {
    document.write(`Producto: ${product.name}, Descuento: ${product.discount}%`+ "<br>");
});

document.write("<br><br>");


// 2. Calcular el Precio Final con Descuento: Usa map para calcular el precio final de los productos que tienen descuento y crea un nuevo array que incluya el priceAfterDiscount.

document.write("<strong>Precio final con descuento:</strong><br>");

const priceAfterDiscount = discountedProducts.map(product => {
    return {
        ...product,
        priceAfterDiscount: product.price - (product.price * product.discount / 100)
    };
});

priceAfterDiscount.forEach((product) => {    
    document.write(`Producto: ${product.name}, Precio Final: ${product.priceAfterDiscount.toFixed(2)}<br>`);
});

document.write("<br><br>");


// 3. Identificar Productos con Stock Bajo: Usa un bucle para identificar los productos con menos de 5 unidades en inventario y guárdalos en un array nuevo.


document.write("<strong>Productos con stock bajo (< 5 unidades):</strong><br>");

for (let i = 0; i < products.length; i++) {
    if (products[i].stock < 5) {
        document.write(`Producto: ${products[i].name}, Stock: ${products[i].stock}<br>`);
    }
}

document.write("<br><br>");


// 4. Actualizar el Stock de un Producto: Crea una función que reciba el nombre de un producto y una cantidad a agregar. Usa un try...catch para verificar si el producto existe en el array. Si existe, incrementa su stock; si no, lanza un error.
document.write("<strong>Ver en consola</strong><br>");


function updateStock(productName, quantity) {
    const product = products.find(product => product.name === productName);
    if (!product) {
        console.error(`Error: El producto ${productName} no existe en el inventario.`);
        return;
    }
    
    product.stock += quantity;
    console.log(`Stock actualizado de ${productName}: ${product.stock}`);
}

updateStock("Leche", 20);
updateStock("Teléfono", 6);


document.write("<br><br>");

// 5. Resumen por Categorías: Usa un bucle para contar cuántos productos hay en cada categoría (electrónica, hogar, alimentos) y devuelve un objeto con este resumen.

document.write("<strong>Resumen por categorías de productos:</strong><br>");

const originalProducts = [
    { name: "Laptop", category: "electrónica", price: 1200, stock: 5, discount: 0 },
    { name: "Televisor", category: "electrónica", price: 800, stock: 3, discount: 10 },
    { name: "Sofá", category: "hogar", price: 500, stock: 8, discount: 15 },
    { name: "Mesa de comedor", category: "hogar", price: 700, stock: 2, discount: 0 },
    { name: "Pan", category: "alimentos", price: 1.5, stock: 50, discount: 0 },
    { name: "Leche", category: "alimentos", price: 1.2, stock: 20, discount: 5 },
];


const categories = {};

for (let i = 0; i < originalProducts.length; i++) {
    const category = originalProducts[i].category;
    const stock = originalProducts[i].stock;
    
    if (!categories[category]) {
        categories[category] = stock;
    } else {
        categories[category] += stock;
    }
}
for (const category in categories) {
    document.write(`Categoría: ${category}, Cantidad total en stock: ${categories[category]}<br>`);
}
