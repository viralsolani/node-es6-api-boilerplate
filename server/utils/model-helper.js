export const sanitizeModel = (sequelize, Model) => {

    const SanitizedModel = sequelize.define(Model.name, Model.definition, Model.modelOptions);

    const [, , , ...props] = Object.getOwnPropertyNames(Model);

    const [, ...protos] = Object.getOwnPropertyNames(Model.prototype);

    for (const prop of props) {

        SanitizedModel[prop] = Model[prop];
    }

    for (const proto of protos) {

        SanitizedModel[proto] = Model.prototype[proto];
    }

    return SanitizedModel;
}
