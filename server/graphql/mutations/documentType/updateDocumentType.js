const { GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');
const { v4: uuidv4 } = require('uuid');
const DocumentTypeModel = require('../../../mongoose/models/documentType');
const documentType = require('../../types/documentType');
const inputDatatype = require('../../inputs/inputDataType');
const inputDoctype = require('../../inputs/inputDocType');

const updateDocumentType = {
  type: documentType,
  args: {
    _id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    name: {
      type: GraphQLString,
    },
    parentDocumentType: {
      type: GraphQLString,
    },
    inheritFrom: {
      type: GraphQLString,
    },
    privileges: {
      type: GraphQLString,
    },
    compilation: {
      type: new GraphQLList(inputDatatype),
    },
    descendants: {
      type: new GraphQLList(GraphQLString),
    },
  },
  resolve: async (parent, args, req) => {
    if (!req.isAuth) {
      throw new Error('unAuthorized');
    }
    // TODO: refactor how descendants are pushed
    let _descendants = null;
    if (args.descendants) {
      _descendants = args.descendants;
      delete args.descendants;
    }
    let compilationDeleted = [];
    let addOrUpdate = [];
    if (args.compilation.length > 0) {
      args.compilation.forEach((obj) => {
        if (obj.toBeDeleted === true) {
          compilationDeleted.push(obj.compilationItemId);
        } else {
          if (!obj.compilationItemId) {
            //TODO: fix this
            obj.compilationItemId = uuidv4();
          }

          addOrUpdate.push(obj);
        }
      });
    }
    console.log(addOrUpdate);
    let obj = {};
    obj = args.parentDocumentType
      ? {
          ...obj,
          parentDocumentType: args.parentDocumentType,
        }
      : obj;
    obj = args.inheritFrom ? { ...obj, inheritFrom: args.inheritFrom } : obj;
    obj = args.privileges ? { ...obj, privileges: args.privileges } : obj;
    obj = args.descendants
      ? {
          ...obj,
          $addToSet: { descendants: args.descendants },
        }
      : obj;
    obj = args.compilation
      ? {
          ...obj,
          compilation: addOrUpdate,
        }
      : obj;
    console.log(obj);
    let updated = await DocumentTypeModel.findByIdAndUpdate(
      { _id: args._id },
      obj,
      { new: true }
    );

    if (!updated) {
      throw new Error('Error');
    }
    if (compilationDeleted.length === 0) {
      return updated;
    }

    updated = await DocumentTypeModel.findByIdAndUpdate(
      { _id: args._id },
      {
        $pull: {
          compilation: {
            dataTypeId: { $in: compilationDeleted },
          },
        },
      },
      { new: true }
    );
    if (!updated) {
      throw new Error('Error');
    }
    return updated;
  },
};

module.exports = updateDocumentType;
