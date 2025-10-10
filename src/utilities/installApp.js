import { toast } from "react-toastify";

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
        toast.error("Already installed");
    } else {
        installedApps.push(id);
        localStorage.setItem("installedApps", JSON.stringify(installedApps));
        toast.success("App installed successfully");
    }
};

export { getInstalledApps, addToInstalledApps };
