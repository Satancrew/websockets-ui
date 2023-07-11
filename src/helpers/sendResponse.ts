import { RequestTypesEnum } from "src/utils/enums";

export const sendResponse = (type: RequestTypesEnum, data: object): string => {
  return JSON.stringify({
    type,
    data: JSON.stringify(data)
  });
};
