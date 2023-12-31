const URL = "http://localhost:8000/users/api/users/";

export const signup = async (user) => {
    try {
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user),
        });
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error("Invalid Credentials: ", response.status, response.statusText);
        }
    }
    catch (error) {
        console.log(error);
    }

}

export const getUserByIdentificationNumber = async (user) => {
    try {
        const response = await fetch(URL + user.user_identification_number + "/", {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${user.access_token}`
            },
        });
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error("Invalid user id: ", response.status);
        }
    }
    catch (error) {
        console.log(error);
    }
}
export const getUserById = async (id, token) => {

    try {
        const response = await fetch(URL + id + "/user_by_id/", {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${token}`,
                "Content-Type": "application/json"
            },
        });
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error("Invalid token or id: ", response);
        }
    }
    catch (error) {
        console.log(error);
    }
}


export const logout = async (tokens) => {
    try {
        const response = await fetch(URL + "logout/", {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${tokens.access}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ refresh_token: tokens.refresh }),
        });
        if (response.ok) {
            const data = await response.text();
            return data;
        } else {
            throw new Error("Invalid Credentials: ", response.status, response.statusText);
        }
    }
    catch (error) {
        console.log(error);
    }

}


export const partialUpdateUser = async (user, token) => {
    console.log(user);
    try {
        const response = await fetch(URL + user.id + "/", {
            method: "PATCH",
            headers: {
                'Authorization': `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user),
        });
        if (response.ok) {
            const data = await response.text();
            return data;
        } else {
            throw new Error("Invalid Credentials: ", response.status, response.statusText);
        }
    }
    catch (error) {
        console.log(error);
    }
}