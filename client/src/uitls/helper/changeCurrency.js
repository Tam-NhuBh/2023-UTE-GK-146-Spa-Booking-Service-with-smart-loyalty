export const formatCurrency = (amount, locale, currency) => {
  return amount.toLocaleString(locale, {
    style: "currency",
    currency: currency,
  });
};
