import { GraphQLScalarType, Kind} from 'graphql';
import { ObjectId} from 'mongodb';

export const ObjectIdScalar = new GraphQLScalarType({
    name:"ObjectId",
    description:"Mongod id scalar type",
    parseValue(value:string){
        return new ObjectId(value); // Client input variable
    },
    serialize(value:ObjectId){
        return value.toHexString() // Value sent to client
    },
    parseLiteral(ast){
             if(ast.kind === Kind.STRING){
                 return new ObjectId(ast.value) // value from the client query 
             }
             return null;
    }

    
})