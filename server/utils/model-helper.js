export const sanitizeModel = (sequelize, Model) => {

    const SanitizedModel = sequelize.define(Model.name, Model.definition, Model.modelOptions);

    const [, , , ...props] = Object.getOwnPropertyNames(Model);

    const [, ...protos] = Object.getOwnPropertyNames(Model.prototype);

    for (const prop of props) {

        Object.defineProperty(SanitizedModel, prop, {
            ...Object.getOwnPropertyDescriptor(Model, prop),
        })
    }

    for (const proto of protos) {

        Object.defineProperty(SanitizedModel.prototype, proto, {
            ...Object.getOwnPropertyDescriptor(Model.prototype, proto),
        })
    }

    return SanitizedModel;
}