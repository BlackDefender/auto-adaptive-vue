const loadSettingsFromLocalStorage = (storageKey, defaultSettings) => {
    const settings = defaultSettings
    if (localStorage) {
        const loadedSettingsStr = localStorage.getItem(storageKey)
        if (loadedSettingsStr) {
            try {
                const loadedSettings = JSON.parse(loadedSettingsStr)
                for (let param in settings) {
                    if (settings.hasOwnProperty(param) && loadedSettings.hasOwnProperty(param)) {
                        settings[param] = loadedSettings[param]
                    }
                }
            } catch (e) {
                console.error('Settings can\'t be loaded. Use default settings.')
                console.error(e)
                return defaultSettings
            }
        }
    }
    return settings
}

export default loadSettingsFromLocalStorage
