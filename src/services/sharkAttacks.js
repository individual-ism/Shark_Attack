import api from "./apiConfig"

export const getSharkAttacks = async () => {
    try {
        const response = await api.get("/")
        return response.data
    } catch (error) {
        throw error
    }
}

export const getSharkAttack = async (id) => {
    try {
        const response = await api.get(`/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const createSharkAttack = async (sharkAttack) => {
    try {
        const response = await api.post("/", sharkAttack)
        return response.data
    } catch (error) {
        throw error
    }
}

export const updateSharkAttack = async (id, sharkAttack) => {
    try {
        const response = await api.put(`/${id}`, sharkAttack)
        return response.data
    } catch (error) {
        throw error
    }
}

export const deleteSharkAttack = async (id) => {
    try {
        const response = await api.delete(`/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}