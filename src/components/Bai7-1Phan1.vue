<template>
<div class="container">
        <div class="productList">
            <table>
                <tr>
                    <th>STT</th>
                    <th>Sản phẩm</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Trạng thái</th>
                    <th>Hành động</th>
                </tr>
                <tr v-if="products.length === 0">
                    <td colspan="6" class="textCenter">Không có dữ liệu</td>
                </tr>
                <tr v-for="(product, index) in products" :key="index">
                    <td class="textCenter">{{index + 1}}</td>
                    <td>
                        <div class="productNameWrap">
                            <img v-if="product.image" :src="product.image" alt="">
                            <img v-else src="../assets/defaultImg.png" alt="">
                            <div class="textMain">{{product.name}}</div>
                        </div>
                    </td>
                    <td>{{formatPrice(product.price)}}</td>
                    <td class="textCenter">{{product.quantity}}</td>
                    <td class="textCenter">
                        <span v-if="product.quantity > 0" class="textGreen">Còn hàng</span>
                        <span v-else class="textRed">Hết hàng</span>
                    </td>
                    <td>
                        <button class="addToCartButton" @click="addToCart(product)">Thêm vào giỏ</button>
                    </td>
                </tr>
            </table>
        </div>
        <!-- <div class="cartWrap">
            <div class="title">Giỏ hàng</div>
            <div class="cartEmpty" v-if="cartProducts.length === 0">
                Không có sản phẩm nào được thêm vào giỏ
            </div>
            <div class="cartProductWrap" v-for="(product, index) in cartProducts" :key="product.id">
                <div class="cartProductNameWrap">
                    <img v-if="product.image" :src="product.image" alt="">
                    <img v-else src="../assets/defaultImg.png" alt="">
                    <div>
                        <strong>{{formatProductName(product.name)}}</strong>
                        <div>{{formatPrice(product.price)}}</div>
                    </div>
                </div>
                <div class="actions">
                    <input
                        class="quantityChangeInput"
                        type="number"
                        v-model="cartProducts[index].quantity"
                    >
                    <button class="removeFromCartButton" @click="removeFromCart(product, index)">Xoá</button>
                </div>
            </div>
            <div class="cartTotal">
                Tổng tiền: {{total}}
            </div>
        </div> -->
    </div>
</template>
<script>
</script>
<style>
</style>