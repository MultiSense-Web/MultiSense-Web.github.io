const $lib = {
    url: new URL(document.location),
    get: (key, defaulz) => {
        return $lib.url.searchParams.has(key)
            ? $lib.url.searchParams.get(key)
            : defaulz;
    },
};
