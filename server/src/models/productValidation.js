function Validation(values) {
    let errors = {};

    if (values.idProduct === "") {
        errors.idProduct = "Product ID is required";
    } else errors.idProduct = '';

    if (values.nameProduct === "") {
        errors.nameProduct = "Product Name is required";
    } else errors.nameProduct = '';

    if (values.description === "") {
        errors.description = "Product Description is required";
    } else errors.description = '';

    if (values.importDate === "") {
        errors.importDate = "Import Date is required";
    } else errors.importDate = '';

    if (isNaN(values.price) || values.price < 0 || values.price === "") {
        errors.price = "Price must be a non-negative number";
    } else errors.price = '';

    if (isNaN(values.quantity) || values.quantity < 0 || values.quantity === "") {
        errors.quantity = "Quantity must be a non-negative number";
    } else errors.quantity = '';

    if (values.brand === "") {
        errors.brand = "Brand is required";
    } else errors.brand = '';

    if (values.img === "") {
        errors.img = "Image Link is required";
    } else errors.img = '';

    return errors;
}

export default Validation;
