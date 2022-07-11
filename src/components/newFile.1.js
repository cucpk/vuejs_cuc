export default (await import("vue")).defineComponent({
  name: "Exercise",
  data() {
    return {
      sourceProducts: [
        {
          name: "iPhone 12 Pro Max Chính Hãng",
          image:
            "https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/h/photo_2020-10-13_22-12-24.jpg_1_2.png",
          price: 32990000,
          quantity: 566,
          isAvailable: true,
        },
        {
          name: "iPhone 12 Chính Hãng (VN/A)",
          image: "",
          price: 21790000,
          quantity: 123,
          isAvailable: true,
        },
        {
          name: "iPhone 11 Chính hãng",
          image:
            "https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/_/0/_0004_layer_5.jpg",
          price: 16690000,
          quantity: 0,
          isAvailable: false,
        },
        {
          name: "Apple iPhone XR 64GB Chính hãng(VN/A)",
          image:
            "https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-xr_5_.jpg",
          price: 12190000,
          quantity: 1023,
          isAvailable: true,
        },
        {
          name: "iPhone 11 Pro Max Chính hãng(VN/A)",
          image: "",
          price: 26500000,
          quantity: 45,
          isAvailable: true,
        },
      ],
      products: [
        {
          name: "iPhone 12 Pro Max Chính Hãng",
          image:
            "https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/h/photo_2020-10-13_22-12-24.jpg_1_2.png",
          price: 32990000,
          quantity: 566,
          isAvailable: true,
        },
        {
          name: "iPhone 12 Chính Hãng (VN/A)",
          image: "",
          price: 21790000,
          quantity: 123,
          isAvailable: true,
        },
        {
          name: "iPhone 11 Chính hãng",
          image:
            "https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/_/0/_0004_layer_5.jpg",
          price: 16690000,
          quantity: 0,
          isAvailable: false,
        },
        {
          name: "Apple iPhone XR 64GB Chính hãng(VN/A)",
          image:
            "https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-xr_5_.jpg",
          price: 12190000,
          quantity: 1023,
          isAvailable: true,
        },
        {
          name: "iPhone 11 Pro Max Chính hãng(VN/A)",
          image: "",
          price: 26500000,
          quantity: 45,
          isAvailable: true,
        },
      ],
      products: [
        {
          name: "iPhone 12 Pro Max Chính Hãng",
          image:
            "https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/h/photo_2020-10-13_22-12-24.jpg_1_2.png",
          price: 32990000,
          quantity: 566,
          isAvailable: true,
        },
        {
          name: "iPhone 12 Chính Hãng (VN/A)",
          image: "",
          price: 21790000,
          quantity: 123,
          isAvailable: true,
        },
        {
          name: "iPhone 11 Chính hãng",
          image:
            "https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/_/0/_0004_layer_5.jpg",
          price: 16690000,
          quantity: 0,
          isAvailable: false,
        },
        {
          name: "Apple iPhone XR 64GB Chính hãng(VN/A)",
          image:
            "https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-xr_5_.jpg",
          price: 12190000,
          quantity: 1023,
          isAvailable: true,
        },
        {
          name: "iPhone 11 Pro Max Chính hãng(VN/A)",
          image: "",
          price: 26500000,
          quantity: 45,
          isAvailable: true,
        },
      ],
      searchText: "",
    };
  },
  methods: {
    formatPrice(price) {
      return price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") + " đ";
    },
    clearSearch() {
      this.searchText = "";
      this.products = this.sourceProducts;
    },
    onPressSearch(event) {
      if (this.searchText && event.code === "Enter") {
        this.products = this.sourceProducts.filter((product) => {
          let name = product.name.toLowerCase();
          return name.includes(this.searchText.toLowerCase());
        });
      } else {
        this.products = this.sourceProducts;
      }
    },
  },
});
