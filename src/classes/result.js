
// This is an axios wrapper. Only Get and Post methods are defined here since we dont use Put, Patch and Delete calls.
// There are try-catch blocks so we can easily use the Vue Alert component when a request fails
export const Result = class Result {
    constructor(url = null) {
        this.success = null;
        this.data = null;
    }

    error(data) {
        this.data = data;
        this.success = false;
        return {data: this.data, success: this.success};
    }

    ok(data) {
        this.data = data;
        this.success = true;
        return {data: this.data, success: this.success};
    }
}