function Store () {
	this.products = [
		new Product("cp1", "Apple iPhone 5S 16GB 'Factory Unlocked' Gray - Gold - Silver Smartphone", 3 , "This Phone is GSM Factory Unlocked (SIM-Free Will work with any GSM network/ carrier worldwide)", 239.99, "Apple", "iPhone 5S","GSM Unlocked", "iOS - Apple","4'"),
		new Product("cp2", "Apple iPhone 4S 8GB 'Factory Unlocked' Black and White Smartphone (Grade A)", 4,"These are in (A) Condition (Great Condiition)", 159.99, "Apple", "iPhone 4S","GSM Unlocked", "iOS - Apple","4'"),
		new Product("cp3", "Apple iPhone 6", 5, "APPLE IPHONE 6 FACTORY UNLOCKED CDMA/GSM SMARTPHONE 16GB 64GB GRAY GOLD SILVER", 539.99, "Apple", "iPhone 6","GSM Unlocked", "iOS - Apple","6'"),
		new Product("cp4", "Samsung Galaxy S5", 3, "Samsung Galaxy S6 SM-G920W8 (Latest Model) - 32GB - Black Sapphire (Unlocked).", 415, "Samsung", "Galaxy S5","Unlocked", "Android","5.1'"),
		new Product("cp5", "Apple iPhone 5C 16GB  4G LTE Smartphone", 1, "USA Seller - No Contract Required - Fast Shipping!!", 169.95, "Apple", "Iphone 5C","Unlocked", "iOS","4.9'"),
		new Product("cp6", "Samsung Galaxy Note IV 4 SM-N910A 4G LTE 32GB AT&T Factory Unlocked Smartphone", 5, "SHIPS SAME DAY IF ORDERED BY 2:00PM EST", 350.99, "Samsung", "Samsung Galaxy Note 4 SM-N910A","Unlocked", "Android","5.7'"),
		new Product("cp7", "Samsung Galaxy S6 SM-G920F Factory Unlocked 32GB Smartphone-White Gold Blue", 7, "WE ACCEPT CARD PAYMENTS ONLY-30 DAYS FREE RETURN", 489.99, "Samsung", "Samsung Galaxy S6 SM-G920F","Unlocked", "Android","5.1'"),
		new Product("cp8", "Samsung G900 Galaxy S5 Verizon Wireless 4G LTE 16GB Android Smartphone", 6,  "SHIPS SAME DAY IF ORDERED BY 2:00PM EST", 169.95, "Samsung", "Samsung G900 Galaxy S5 Verizon Wireless 4G LTE 16GB Android Smartphone","Unlocked", "Android","5.59'"),
		new Product("cp9", "HTC One M8 32GB Android Smartphone - GSM Unlocked (T-Mobile) - Gunmetal Gray", 7, "Free shipping", 148.98, "HTC", "HTC One M8","T-Mobile", "Android","5'"),
		new Product("cp10", "Samsung Galaxy S4 SGH-I337 Unlocked phone 16GB AT&T Smartphone Black/White", 10,  "Free shipping", 150.00, "Samsung", "Samsung Galaxy S 4","Unlocked", "Android","5'"),

		new Product("cp11", "NEW APPLE IPHONE 5S FACTORY UNLOCKED GSM 16GB 32GB 64GB GRAY GOLD SILVER A1533", 6, "CHOOSE COLOR & CAPACITY-UNLOCKED FOR ANY GSM WORLDWIDE", 389.99, "Apple", "iPhone 5S","GSM Unlocked", "iOS - Apple","4'"),
		new Product("cp12", "5.7 Unlocked Original Samsung Galaxy Note 3 HD 4G Android Smartphone 32GB 13MP C", 3,  "", 299.99, "Samsung", "Note 3","GSM Unlocked", "Android","5.7'"),
		new Product("cp13", "New HTC One M7 32GB Unlocked AT&T T-Mobile GSM WIFI Android Smartphone Black", 3, "", 155.59, "HTC", "One M7","GSM Unlocked", "Android","6'"),
		new Product("cp14", "LENOVO A816 QHD 5,5 4G LTE Unlocked Dual SIM Smartphone 8GB 8MP Quad Core Black", 5, "", 86.99, "Lenovo", "A816","Unlocked", "Android","5.5'"),
		new Product("cp15", "5 5MP Dual Sim Android 4.4 Smartphone Quad Core Unlocked 3G/GSM Cell Phone", 5, "USA Seller - No Contract Required - Fast Shipping!!", 356.95, "Apple", "Iphone 5C","Unlocked", "iOS","4.9'"),
		new Product("cp16", "HTC One M8 - 32GB - 4G LTE Android phone (AT&T- UNLOCKED) Grey/ Gold/ Silver (B)", 2, "", 159.99, "HTC", "M8","Unlocked", "Android","5.7'"),
		new Product("cp17", "New LG Google Nexus 5 D820 4G LTE Unlocked 16GB Android Smartphone black/white", 2,  "WE ACCEPT CARD PAYMENTS ONLY-30 DAYS FREE RETURN", 185.99, "LG", "Nexus 5","Unlocked", "Android","5.1'"),
		new Product("cp18", "New HTC One M8 32GB GSM Factory Unlocked WIFI Android Smartphone Cell Phone Gold", 5, "SHIPS SAME DAY IF ORDERED BY 2:00PM EST", 225.95, "HTC", "One M8","Unlocked", "Android","5.59'"),
		new Product("cp19", "Samsung Galaxy S4 Active SGH-I537 UNLOCKED 16GB Smartphone USED - Blue Gray", 1, "Free shipping", 84.98, "Samsung", "S4","T-Mobile", "Android","5'"),
		new Product("cp20", "Samsung Galaxy S4 SGH-I337 Unlocked phone 16GB AT&T Smartphone Black/White", 5, "Free shipping", 150.00, "Samsung", "Samsung Galaxy S 4","Unlocked", "Android","5'"),


	];

}

Store.prototype.getProduct = function (sku) {
	for (var i = 0; i < this.products.length; i++) {
		if (this.products[i].sku == sku)
			return this.products[i];
	}
	return null;
}
