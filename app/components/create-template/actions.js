export let actions = {
    SAVE_TEMPLATE: 'SAVE_TEMPLATE'
};

export function saveTemplate(template) {
    return {
        type: actions.SAVE_TEMPLATE,
        data: template
    };
}
