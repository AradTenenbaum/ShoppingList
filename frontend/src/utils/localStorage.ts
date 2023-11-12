import { Settings } from "../interfaces/settings.interface";

export const getSettings = (): Settings => {
  const storedSettingsString = localStorage.getItem("settings");
  if (storedSettingsString) {
    const settings = JSON.parse(storedSettingsString);
    if (settings.autoScroll !== undefined) return settings;
  }
  return { autoScroll: true };
};

export const saveSettings = (autoScroll: boolean) => {
  const settings = { autoScroll };
  localStorage.setItem("settings", JSON.stringify(settings));
};
