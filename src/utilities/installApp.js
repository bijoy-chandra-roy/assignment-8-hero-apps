const getInstalledApps = () => {
    const storedAppsSTR = localStorage.getItem("installedApps");
    if (storedAppsSTR) {
        const storedAppsData = JSON.parse(storedAppsSTR);
        return storedAppsData;
    } else {
        return [];
    }
};

const addToInstalledApps = (id) => {
    const installedApps = getInstalledApps();
    if (installedApps.includes(id)) {
        alert("Already installed");
    } else {
        installedApps.push(id);
        localStorage.setItem("installedApps", JSON.stringify(installedApps));
        alert("App installed");
    }
};

export { getInstalledApps, addToInstalledApps };
