export function get(key: string) {
    // PRIVACY MODE MAY THWART STORAGE, NEED TRY/CATCH
    try {
        const serializedState = window.localStorage.getItem(key);
        if (serializedState === null) {
            return void 0;
        }
        return JSON.parse(serializedState);
    } catch (error) {
        return undefined;
    }
}

export function set(key: string, value: any) {
    // PRIVACY MODE MAY THWART STORAGE, NEED TRY/CATCH
    try {
        return window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        // DO NOTHING
    }
}

export function removeItem(key: string) {
    window.localStorage.removeItem(key);
}

function getKey(int: number): string | null {
    // returns the KEY only by index.
    return window.localStorage.key(int);
}

export function getByIndex(int: number): string | null {
    const item = getKey(int);

    if (item) {
        return get(item);
    }
    return item;
}

export function numItems(): number {
    return window.localStorage.length;
}

export function clearAll() {
    window.localStorage.clear();
}

export function doesBrowserHaveLocalStorage() {
    function test() {
        var test = 'test';
        try {
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            return true;
        } catch (e) {
            return false;
        }
    }

    if (test() === true) {
        return true;
    } else {
        return false;
    }
}
