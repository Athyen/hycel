const Enmap = require("enmap");

const defaultSettings = {
    "prefix": "/",
    "adminRole": "Administrator"
  };
  
  const settings = new Enmap({
    name: "settings",
    cloneLevel: 'deep',
    ensureProps: true
  });

  (async function () {
    console.log("Rozpoczynam konfigurację bota...");
    await settings.defer;
    if (!settings.has("default")) {
      console.log("Pierwszy start! Wgrywam domyślne dane do bazy danych...");
      await settings.set("default", defaultSettings);
    } else {
      console.log("Domyślnie dane są już w bazie danych!");
    }
    await settings.close();
  }());
