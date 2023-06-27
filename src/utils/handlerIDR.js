export const handlerIDR = (e) => {
    return Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
    }).format(e)
}

