import { itemIcon, itemWith, keysLabel } from "../../constants";



export const EnumToString = (_enum: object) =>
  Object.keys(_enum)
    .map(key => _enum[key])
    .filter(value => typeof value === 'string') as string[];


    export const EnumToStrings = (_enum: object) =>{
      const animalTypes = [];
      for (const key in _enum) {
        if (Object.prototype.hasOwnProperty.call(_enum, key)) {
          animalTypes.push({ value:key , label: keysLabel[key], avatar:itemIcon[key], with:itemWith[key] }) ;
        }
      }
      return animalTypes
    }