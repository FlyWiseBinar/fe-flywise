import { baseUrl } from "./baseUrl"


export default {
    // auth
    apiLogin: `${baseUrl}/v1/api/auth/login`,
    apiRegister: `${baseUrl}/v1/api/auth/register`,
    apiOtp: `${baseUrl}/v1/api/auth/send-otp`,
    apiVerifyOtp: `${baseUrl}/v1/api/auth/verify-otp`,
    apiResendOtp: `${baseUrl}/v1/api/auth/resend-otp`,

    // reset password
    apiSendResetPassOtp: `${baseUrl}/v1/api/auth/reset-password/send-otp`,
    apiResendResetPassOtp: `${baseUrl}/v1/api/auth/reset-password/resend-otp`,
    apiVerifyResetPassOtp: `${baseUrl}/v1/api/auth/reset-password/verify-otp`,
    apiResetPass: `${baseUrl}/v1/api/auth/reset-password/reset`,

    // update profile
    apiUpdateProfile: `${baseUrl}/v1/api/auth/profile`,

    // ticket
    apiAirport: `${baseUrl}/v1/api/schedule/airport`,
    apiSearchTicket: `${baseUrl}/v1/api/schedule/search`,
    apiSchedule: `${baseUrl}/v1/api/schedule`,
    apiScheduleFavorite: `${baseUrl}/v1/api/schedule/favorite`,

    // checkout
    apiCheckout: `${baseUrl}/v1/api/order/checkout`,

    // payment
    apiPaymentCreate: `${baseUrl}/v1/api/order/payment`,
    apiPaymentInvoice: `${baseUrl}/v1/api/order/send-payment-invoice`,
    apiStatusPayment: `${baseUrl}/v1/api/order/pay-payment`,

    // history
    apiHistory: `${baseUrl}/v1/api/order/history`,
    apiHistoryByOrderCode: `${baseUrl}/v1/api/order/historysearch`,
    apiHistoryByFilterHistory: `${baseUrl}/v1/api/order/historyfilter`,

    // who am i
    apiWhoAmI: `${baseUrl}/v1/api/auth/whoami`,

    // delete user
    apiDeleteUser: `${baseUrl}/v1/api/auth/delete-account`,
}