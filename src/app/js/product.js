function Product (sku, name, stock, description, price, brand, model, network, os, size) {
    this.sku = sku;
    this.name = name;
    this.description = description;
    this.price = price;
    this.stock = stock;
    this.specifications = {
        "Brand": brand,
        "Model": model,
        "Network": network,
        "Operating System": os,
        "Screen Size": size
    };
}
