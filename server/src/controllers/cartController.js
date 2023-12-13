const { connection } = require('../config/db');

class CartController {
    listPaymentProduct(req, res) {
        const userId = req.idUser;
        const sql = `
            SELECT listproductpayment.idProduct from listproductpayment where
            listproductpayment.idUser = "${userId}" and listproductpayment.idPaymentProduct IS NULL;
        `;
        console.log("UserID list payment product: ",userId);
        connection.query(sql, [userId], (err, data) => {
            if (err) {
                console.log(err);
                return res.json({ Error: "Unsuccessful" });
            } else {
                return res.json({ Status: "Success", data });
            }
        });
    }

    listProduct(req, res) {
        const userId = req.idUser;
        const sql = `
            SELECT p.nameProduct, lp.idProduct, p.price, lp.quantity, p.img FROM products AS p 
            JOIN listproductpayment AS lp ON lp.idProduct = p.idProduct
            WHERE lp.idUser = "${userId}" AND lp.idPaymentProduct IS NULL;
        `;
        console.log("userID list products: ", userId);
        connection.query(sql, [userId], (err, data) => {
            if (err) {
                console.log(err);
                return res.json({ Error: "Unsuccessful" });
            } else {


                return res.json({ Status: "Success", data });
            }
        });
    }

    addToCart(req, res) {
        const userId = req.idUser;
        const { idProduct, quantity } = req.body;
        console.log("userID add To Cart: ", userId);
        console.log("productID add To Cart: ", idProduct);

        // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng của người dùng hay chưa
        const checkExistingProductQuery = `SELECT idProduct FROM listproductpayment WHERE idUser = "${userId}" AND idProduct = ${idProduct};`;
        connection.query(checkExistingProductQuery, (checkErr, checkResult) => {
            if (checkErr) {
                console.log(checkErr);
                return res.json({ Error: "Unsuccessful" });
            } else {
                if (checkResult.length > 0) {
                    // Nếu sản phẩm đã tồn tại, cập nhật số lượng
                    const increaseQuantityQuery = `
                            UPDATE listproductpayment
                            SET quantity = CASE 
                                WHEN idPaymentProduct IS NULL THEN quantity + "${quantity}"
                                ELSE quantity
                            END
                            WHERE idUser = "${userId}" AND idProduct = "${idProduct}";
                        `;
                    connection.query(increaseQuantityQuery, (updateErr) => {
                        if (updateErr) {
                            console.log(updateErr);
                            return res.json({ Error: "Unsuccessful" });
                        } else {
                            // Sau khi cập nhật số lượng, truy vấn lại danh sách sản phẩm mới
                            const fetchProductsQuery = `
                                    SELECT p.nameProduct, lp.idProduct, p.price, lp.quantity, p.img 
                                    FROM products AS p
                                    LEFT JOIN listproductpayment AS lp ON lp.idProduct = p.idProduct
                                    WHERE lp.idUser = "${userId}" AND lp.idPaymentProduct IS NULL;
                                `;

                            connection.query(fetchProductsQuery, (fetchErr, data) => {
                                if (fetchErr) {
                                    console.log(fetchErr);
                                    return res.json({ Error: "Failed to fetch products" });
                                } else {
                                    return res.json({ Status: "Success", data });
                                }
                            });
                        }
                    });
                } else {
                    // Nếu sản phẩm chưa tồn tại, thêm mới vào giỏ hàng
                    const insertNewProductQuery = `INSERT INTO listproductpayment (idUser, idProduct, quantity) VALUES ("${userId}", ${idProduct}, ${quantity});`;
                    connection.query(insertNewProductQuery, (insertErr) => {
                        if (insertErr) {
                            console.log(insertErr);
                            return res.json({ Error: "Unsuccessful" });
                        } else {
                            // Sau khi thêm sản phẩm mới, truy vấn lại danh sách sản phẩm
                            const fetchProductsQuery = `
                                    SELECT p.nameProduct, lp.idProduct, p.price, lp.quantity, p.img 
                                    FROM products AS p
                                    LEFT JOIN listproductpayment AS lp ON lp.idProduct = p.idProduct
                                    WHERE lp.idUser = "${userId}" AND lp.idPaymentProduct IS NULL;
                                `;

                            connection.query(fetchProductsQuery, (fetchErr, data) => {
                                if (fetchErr) {
                                    console.log(fetchErr);
                                    return res.json({ Error: "Failed to fetch products" });
                                } else {
                                    return res.json({ Status: "Success", data });
                                }
                            });
                        }
                    });
                }
            }
        });
    }

    decreaseQuantity(req, res) {
        const userId = req.idUser;
        const { idProduct, quantity } = req.body;
        // Nếu sản phẩm đã tồn tại, cập nhật số lượng
        const decreaseQuantityQuery = `
        UPDATE listproductpayment
        SET quantity = CASE 
            WHEN quantity > 0 THEN quantity-"${quantity}" 
            ELSE quantity
        END
        WHERE idUser = "${userId}" AND idProduct = "${idProduct}";
        `;
        connection.query(decreaseQuantityQuery, (updateErr) => {
            if (updateErr) {
                console.log(updateErr);
                return res.json({ Error: "Unsuccessful" });
            } else {
                // Sau khi cập nhật số lượng, truy vấn lại danh sách sản phẩm mới
                const fetchProductsQuery = `
                SELECT p.nameProduct, lp.idProduct, p.price, lp.quantity, p.img 
                FROM products AS p
                JOIN listproductpayment AS lp ON lp.idProduct = p.idProduct
                WHERE lp.idUser = "${userId}" AND lp.idPaymentProduct IS NULL;
            `;

                connection.query(fetchProductsQuery, (fetchErr, data) => {
                    if (fetchErr) {
                        console.log(fetchErr);
                        return res.json({ Error: "Failed to fetch products" });
                    } else {
                        return res.json({ Status: "Success", data });
                    }
                });
            }
        });

    }

    removeProduct(req, res) {
        const userId = req.idUser;
        const { idProduct } = req.body;
        // Nếu sản phẩm đã tồn tại, cập nhật số lượng
        const sql = `
                DELETE FROM listproductpayment
                WHERE idUser = "${userId}" AND idProduct = "${idProduct}" and idPaymentProduct is null;
        `;
        connection.query(sql, (updateErr) => {
            if (updateErr) {
                console.log(updateErr);
                return res.json({ Error: "Unsuccessful" });
            } else {
                // Sau khi cập nhật số lượng, truy vấn lại danh sách sản phẩm mới
                const fetchProductsQuery = `
                SELECT p.nameProduct, lp.idProduct, p.price, lp.quantity, p.img 
                FROM products AS p
                JOIN listproductpayment AS lp ON lp.idProduct = p.idProduct
                WHERE lp.idUser = "${userId}" AND lp.idPaymentProduct IS NULL;
            `;

                connection.query(fetchProductsQuery, (fetchErr, data) => {
                    if (fetchErr) {
                        console.log(fetchErr);
                        return res.json({ Error: "Failed to fetch products" });
                    } else {
                        return res.json({ Status: "Success", data });
                    }
                });
            }
        });

    }

    removeAllProduct(req, res) {
        const userId = req.idUser;
        // Nếu sản phẩm đã tồn tại, cập nhật số lượng
        const sql = `
             DELETE FROM listproductpayment
             WHERE idUser = "${userId}" and idPaymentProduct is null;
        `;
        connection.query(sql, (updateErr) => {
            if (updateErr) {
                console.log(updateErr);
                return res.json({ Error: "Unsuccessful" });
            } else {
                // Sau khi cập nhật số lượng, truy vấn lại danh sách sản phẩm mới
                const fetchProductsQuery = `
                SELECT p.nameProduct, lp.idProduct, p.price, lp.quantity, p.img 
                FROM products AS p
                JOIN listproductpayment AS lp ON lp.idProduct = p.idProduct
                WHERE lp.idUser = "${userId}" AND lp.idPaymentProduct IS NULL;
            `;

                connection.query(fetchProductsQuery, (fetchErr, data) => {
                    if (fetchErr) {
                        console.log(fetchErr);
                        return res.json({ Error: "Failed to fetch products" });
                    } else {
                        return res.json({ Status: "Success", data });
                    }
                });
            }
        });

    }
}

module.exports = new CartController();
