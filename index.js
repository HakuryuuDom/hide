module.exports = function Hide(mod) {
    mod.command.add('hide', {
        $default(name) {
            if(mod.settings.players.includes(name.toLowerCase())) {
                mod.command.message(`Unhiding: ${name}`);
                mod.settings.players.splice(mod.settings.players.indexOf(name.toLowerCase()))
                mod.saveSettings();
            } else {
                mod.command.message(`Hiding: ${name}`);
                mod.settings.players.push(name.toLowerCase());
                mod.saveSettings();
            }
        }
    });

    mod.hook('S_SPAWN_USER', 15, event => {
        if(mod.settings.players.includes(event.name.toLowerCase())) {
            return false;
        }
    })
}