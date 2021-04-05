const processAsync = async (func: Function, ...args: any[]): Promise<any> => {
  return await new Promise((resolve) => func(...args, (result: any) => resolve(result)));
};

/**
 * @function makeAsyncChromeMethods
 * @description соотносит с заглушками методы chrome и делает их асинхронными
 * @param obj - объект, эмулирующий chrome
 * @param parentProperty - история свойств для подобъектов
 */
const makeAsyncChromeMethods = (obj: typeof chrome, parentProperty?: string) => {
  // определяем массив ключей объекта
  const properties = Object.keys(obj);
  let descriptor, subProperties, value, propertyPath;
  properties.forEach(property => {
    descriptor = Object.getOwnPropertyDescriptor(obj, property);
    if (typeof descriptor.value === 'object') {
      // если значение ключа - это объект, то надо пройтись по его ключам
      propertyPath = parentProperty ? `${parentProperty}.${property}` : property;
      makeAsyncChromeMethods(descriptor.value, propertyPath);
    } else {
      // достаем значение свойства chrome
      subProperties = parentProperty.split('.');
      for (let i = 0; i < subProperties.length; i++) {
        value = i === 0 ?
          chrome[subProperties[i]] :
          value[subProperties[i]];
      }
      let finalValue = value[property];
      if (typeof finalValue === 'function') {
        finalValue = finalValue.bind(value);
        descriptor.value = processAsync.bind(null, finalValue);
      } else {
        descriptor.value = value;
      }
    }
    Object.defineProperty(obj, property, descriptor);
  });
};

const asyncMethods = (ClassRef) => {
  return class extends ClassRef {
    constructor() {
      super();
      makeAsyncChromeMethods(this as unknown as typeof chrome);
    }
  }
};

// @ts-ignore
@asyncMethods
class Chrome {
  readonly tabs = {
    query(...args) {},
  };

  readonly storage = {
    sync: {
      get(...args): any {},
      set(...args): any {}
    }
  };

  readonly declarativeContent = {
    onPageChanged: {
      removeRules(...args) {},
    }
  };
}

export default new Chrome();
