import {getCookie} from "cookies-next"

export default function getToken() {
	const token = getCookie("accessToken")
	return token
}
