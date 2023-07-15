import axios from "axios";

const BACKEND_DOMAIN = "http://localhost:8000"

const PROFILE_URL = `${BACKEND_DOMAIN}/api/v1/profile/me/`
const UPDATE_PROFILE_URL = `${BACKEND_DOMAIN}/api/v1/profile/update/`


// Get profile

const getProfile = async (accessToken) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${accessToken}`,
        }
    }
    const response = await axios.get(PROFILE_URL, config)

    return response.data
}

const updateProfile = async (profileData, accessToken) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "application/json"
        }
    }

    const response = await axios.patch(UPDATE_PROFILE_URL + profileData.username + "/", profileData, config)

    return response.data
}





const profileService = { getProfile, updateProfile }

export default profileService